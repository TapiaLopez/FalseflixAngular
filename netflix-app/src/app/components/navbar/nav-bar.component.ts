import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  @Input() navBar!: any;
  @Input() changeDark!: any;
  @Input() theme!: string;
  constructor() { }

  ngOnInit(): void {
  }

}
