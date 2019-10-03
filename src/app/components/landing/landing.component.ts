import { Component, OnInit } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {LoginComponent} from '../login/login.component';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
  }
  openDialog(): void {
    const dialogRef = this.dialog.open(LoginComponent, {
      width: '50%',
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  }

}
