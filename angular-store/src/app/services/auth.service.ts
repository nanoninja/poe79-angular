import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap, map } from 'rxjs';
import { AuthUser, JWT } from '../models/auth.model';
import { environment } from 'src/environments/environment';

const KEY_AUTH = 'store_user_auth';
const KEY_JWT = 'store_json_web_token';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl: string = environment.apiUrl;
    private userSubject: BehaviorSubject<AuthUser | null>;
    private jwtSubject: BehaviorSubject<JWT | null>;

    /**
     * On vérifie si les données de l'utilisateur et le jwt sont
     * dans le local storage puis on transmet l'information aux
     * observeurs.
     */
    constructor(private http: HttpClient) {
        this.userSubject = new BehaviorSubject<AuthUser | null>(null);
        this.jwtSubject = new BehaviorSubject<JWT | null>(null);

        const jwt: JWT | null = this.parse(localStorage.getItem(KEY_JWT));
        const auth: AuthUser = this.parse(localStorage.getItem(KEY_AUTH));

        if (jwt) {
            this.jwtSubject.next(jwt);
        }

        if (auth) {
            this.userSubject.next(auth);
        }
    }

    /**
     * Méthode publique permettant de récupérer les informations
     * de l'utilisateur dans les composants, services,...
     */
    get user(): AuthUser | null {
        return this.userSubject.value;
    }

    /**
     * Méthode publique permettant de récupérer le JWT dans
     * les services comme HTTPInterceptor.
     */
    get jwt(): JWT | null {
        return this.jwtSubject.value;
    }

    init(): void {
        if (!this.jwt) {
            const jwt: JWT | null = this.parse(localStorage.getItem(KEY_JWT));

            if (jwt) {
                this.jwtSubject.next(jwt);
            }
        }

        if (!this.user) {
            const auth: AuthUser = this.parse(localStorage.getItem(KEY_AUTH));

            if (auth) {
                this.userSubject.next(auth);
            }
        }
    }

    /**
     * La méthode login envoie une requête HTTP de type POST vers le serveur
     * pour vérifier si l'email et le mot de passe sont corrects.
     * 
     * Si c'est correct la réponse renvoie un jeton contenant les données 
     * encodées en base64. On les décodes pour récupérer les informations 
     * de l'utilisateur puis on transmet avec la méthode next pour informer
     * tout les observeurs.
     */
    login(email: string, password: string): Observable<AuthUser | null> {
        const data = {
            email: email,
            password: password
        }

        return this.http.post<JWT>(`${this.apiUrl}/login`, data)
            .pipe(tap(data => console.log(data)))
            .pipe(map(
                (data: JWT): AuthUser | null => {

                    const jwt: JWT = Object.assign(new JWT(), data);
                    const authUser: AuthUser | null = jwt.getPayload();

                    if (authUser) {
                        localStorage.setItem(KEY_AUTH, JSON.stringify(authUser));
                        localStorage.setItem(KEY_JWT, JSON.stringify(jwt));

                        this.userSubject.next(authUser);
                        return authUser;
                    }

                    return null;
                }
            ))
    }

    /**
     * La méthode logout supprime les informations associées 
     * dans le local storage puis transmet la valeur null
     * pour notifier aux observeurs que l'utilisateur s'est déconnecté.
     */
    logout(): void {
        localStorage.removeItem(KEY_AUTH);
        localStorage.removeItem(KEY_JWT);

        this.userSubject.next(null);
        this.jwtSubject.next(null);
    }

    /**
     * La méthode parse sert à décoder du JSON
     * de manière sécurisé pour éviter les erreurs.
     */
    private parse(json: any): any {
        let data: any;

        try {
            data = JSON.parse(json);
        } catch (e) {
            data = null;
        }

        return data;
    }

}
