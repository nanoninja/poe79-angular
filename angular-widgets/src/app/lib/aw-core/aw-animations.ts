import { animate, state, style, transition, trigger } from '@angular/animations';

export let fadeIn = trigger('fadeIn', [
    state('void', style({ opacity: 0 })),
    transition(':enter', animate(1000))
]);

export let fadeOut = trigger('fadeOut', [
    state('void', style({ opacity: 0 })),
    transition(':leave', animate(500))
]);

export let slideLeftIn = trigger('slideLeftIn', [
    state('void', style({ transform: 'translateX(-5px)' })),
    transition(':enter', animate(1000))
]);

export let slideRightIn = trigger('slideRightIn', [
    state('void', style({ transform: 'translateX(5px)' })),
    transition(':leave', animate(500))
]);