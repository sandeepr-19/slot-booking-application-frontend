import { Component } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss']
})
export class UserHomeComponent {
  constructor(private userService: UserService) { }
  ngOnInit() {
    this.userService.getCenters().subscribe((response) => {
      console.log('response is ', response)
    }, (error) => {
      console.log('error is ', error)
    })
  }
}
