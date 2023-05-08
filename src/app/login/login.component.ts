import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public userCredentials: any | FormBuilder;
  message: string = "";
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userCredentials = this.formBuilder.group({

      email: ['', [Validators.required]],
      password: ['', [Validators.required]]

    })
  }

  public onSubmit() {
    this.userService.login(this.userCredentials.getRawValue()).subscribe(
      (response: any) => {
        this.message = response.message;
        console.log(response)
        setTimeout(() => {
          this.router.navigate(['/home']);
        }, 2000);
      },
      (error: any) => {
        this.message = "401 unauthorized";
        console.error(error)
      }

    );
  }
}