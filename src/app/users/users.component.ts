import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { UserService } from '../services/user.service';
import { LoadingIndicatorService } from '../services/loading-indicator.service';
import { TableService } from '../services/table.service';
import { AlertService } from '../services/alert.service';
import { User } from '../user';
import { Sort } from '../sort';
import { Alert } from '../alert';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  providers: [TableService]
})
export class UsersComponent implements OnInit, OnDestroy, OnChanges {
  search = '';
  selectedRows = [];
  disableDelete = true;
  sort: Sort;
  cssClass = 'users-table';
  users: User[];
  columnDefs = [
    {
      sortable: false,
      headerTitle: '',
      cssClass: 'table-select',
      key: 'selected',
      checkboxColumn: true,
      onChangeSelection: ($event) => {
        this.setSelectedUsers($event.target.checked, $event.target.value);
      }
  },
      {
          sortable: true,
          headerTitle: 'First Name',
          cssClass: 'first-name',
          key: 'firstName'
      },
      {
          sortable: true,
          headerTitle: 'Last Name',
          cssClass: 'last-name',
          key: 'lastName'
      },
      {
          sortable: true,
          headerTitle: 'Contact',
          cssClass: 'contact',
          key: 'contact'
      },
      {
          hasAction: true,
          sortable: false,
          headerTitle: 'Actions',
          cssClass: 'table-actions',
          onEdit: (id: any) => {this.router.navigate([id],  { relativeTo: this.route }); },
          onDelete: (id: any) => {this.deleteUsers([id])}
      }
  ];

  constructor(
      private tableService: TableService,
      private userService: UserService,
      private loadingIndicatorService: LoadingIndicatorService,
      private alertService: AlertService,
      private router: Router,
      private route: ActivatedRoute

  ) { }

  ngOnChanges(changes: SimpleChanges) {
console.log('ng on changes')
  }
  ngOnInit() {
    console.log('ng on init')
    this.tableService.getSort().subscribe(sort => {
        this.sort = sort;
        this.getUsers();
    });
  }

  getUsers(): void {
      this.userService.getUsers(this.sort, this.search).subscribe(users => {
         this.loadingIndicatorService.hide();
         this.disableDelete = true;
         this.users = users.map((user) => {
           user.selected = false;
           return user;
         });
      });
  }

  deleteUsers(selectedUsers) {
    this.userService.deleteSelectedUsers(selectedUsers).subscribe(response => {
      this.loadingIndicatorService.hide();
      this.users = this.users.filter((user) => {
          return selectedUsers.indexOf(user.id) === -1;
      });
      this.setDeleteButton();
      const alert = new Alert();
      alert.id = 'RECORDS_DELETED';
      alert.message = `${selectedUsers.length} record(s) has been deleted.`;
      this.alertService.showAlert(alert);
  });
}
  deleteSelectedUsers() {
      const selectedUsers = this.users.reduce((acc, user) => {
        if(user.selected) {
          acc.push(user.id)
        }
        return acc;
      }, []);
      this.deleteUsers(selectedUsers);
  }

 setDeleteButton() {
  this.disableDelete = !this.users.some((user) =>{
    return user.selected
  });
 }

 setSelectedUsers(checked, id): void {
   const user = this.users.find((user) => {
     return user.id.toString() === id;
   });
   user ? user.selected = checked : '';
   this.setDeleteButton();
  }
  onSearch(searchVal) {
    this.getUsers();
  }
  ngOnDestroy() {

  }
}
