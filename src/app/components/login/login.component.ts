import { Component, OnInit, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from "@angular/router";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from "rxjs/operators";



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm:FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private route: ActivatedRoute,
    private router: Router,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams["returnUrl"] || "/";
  }

  submit(){

        this.router.navigate(["/home"]);
        this.dialogRef.close();

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
