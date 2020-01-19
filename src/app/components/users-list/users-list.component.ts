import { Component, OnInit } from '@angular/core';
import { UsersServiceService } from '../services/users-service/users-service.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users: Array<any>;
  constructor(public usersServiceService: UsersServiceService ) { 
    this.users = usersServiceService.getUsers();
  }
  
  ngOnInit() {
    console.log(this.users)
  
  }

}
