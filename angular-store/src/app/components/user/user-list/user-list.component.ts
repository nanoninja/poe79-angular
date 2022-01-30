import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

import { UserModel } from './../../../models/user.model';
import { UserService } from './../../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class UserListComponent implements OnInit {
  users: UserModel[] = [];
  columns: any[] = [
    { name: 'name', display: 'Name' },
    { name: 'email', display: 'Email' },
    { name: 'date_created', display: 'Created At' },
    { name: 'date_updated', display: 'Updated Date' }
  ];
  columnsToDisplay = ['name', 'email', 'date_created', 'date_updated'];
  expandedElement: UserModel | null = null;

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getAll()
      .subscribe((users: UserModel[]) => this.users = users)
  }

}
