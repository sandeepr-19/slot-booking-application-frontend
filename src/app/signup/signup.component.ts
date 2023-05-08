import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent {
  public userInfo: any | FormBuilder;
  message: string = "";
  constructor(private formBuilder: FormBuilder, private userService: UserService, private router: Router) {
    this.userInfo = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(20)]],
      email: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  onSubmit() {
    this.userService.register(this.userInfo.getRawValue()).subscribe(
      (response: any) => {
        this.message = response.message;
        console.log(response)
        setTimeout(() => {
          this.router.navigate(['/login']);
        }, 2000);

      },
      (error: any) => {
        this.message = error
        console.error(error)
      }
    );
  }
}
