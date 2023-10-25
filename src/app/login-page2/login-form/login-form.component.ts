import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent  implements OnInit {
  valid_usernames: string[] = [];
  valid_passwords: string[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.valid_usernames = ["admin", "root", "123"];
    this.valid_passwords = ["admin", "root", "123"]
  }

  checkPassword() {
    // Remember: ts does null-checks! `!` tells ts that getElementById() 100% returns an existing elem
    // see https://stackoverflow.com/a/52491933/20675205
    let username_input_elem = document.getElementById("login-username")!;
    let username = (username_input_elem as HTMLInputElement).value;
    console.log(username);

    let password_input_elem = document.getElementById("login-password")!;
    let password = (password_input_elem as HTMLInputElement).value;
    console.log(password)

    let id_usr: number = this.valid_usernames.indexOf(username);
    if( id_usr == -1 ){
      console.log("Username doesn't exist'");
      this.router.navigate(['login-failure'], { relativeTo: this.route });
    }else{
      let id_pw: number = this.valid_passwords.indexOf(password);
      if( id_pw == -1 ) {
        console.log("Wrong password");
        this.router.navigate(['login-failure'], { relativeTo: this.route });
      }
      else {
        this.router.navigate(['login-success'], { relativeTo: this.route });
      }
    }
  }

  keyPress( event: KeyboardEvent ) {
    if( event.code == 'Enter' ){
      this.checkPassword()
    }
  }
}
