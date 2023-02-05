import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public year: number = new Date().getFullYear();
  public navigation: { route: string; name: string }[] = [
    { route: '/calendar', name: 'Calendar' },
    { route: '/about', name: 'About' },
  ];
  @Input() public user: any = {
    name: 'Clara',
    pic: 'src/assets/images/profile.png',
  };
  constructor() {}

  ngOnInit(): void {}
}
