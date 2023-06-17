import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-popup-confirm',
  templateUrl: './popup-confirm.component.html',
  styleUrls: ['./popup-confirm.component.scss']
})
export class PopupConfirmComponent implements OnInit {

  public title: string;
  public text: string;
  public cancelTxt: string = 'Ні';
  public confirmTxt: string = 'Так';
  public cancelClass = 'btn_2';
  public confirmClass = ''; // Custom class for confirm button

  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialogRef: MatDialogRef<PopupConfirmComponent>
  ) {}

  ngOnInit(): void {
    // console.log('dialogRef ', this.dialogRef);
    if (this.data){
      if (this.data.title) this.title = this.data.title;
      if (this.data.text) this.text = this.data.text;
      if (this.data.cancelTxt) this.cancelTxt = this.data.cancelTxt;
      if (this.data.confirmTxt) this.confirmTxt = this.data.confirmTxt;
      if (this.data.cancelClass) this.cancelClass = this.data.cancelClass;
      if (this.data.confirmClass) this.confirmClass = this.data.confirmClass;
    }
  }

}
