import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  public title: string = 'Зв\'яжіться з нами';

  constructor() {}

  ngOnInit(): void {
  }

}
