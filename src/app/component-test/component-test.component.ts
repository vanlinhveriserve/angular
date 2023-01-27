import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component-test',
  templateUrl: './component-test.component.html',
  styleUrls: ['./component-test.component.css']
})
export class ComponentTestComponent implements OnInit {
  bind_title = 'Xin chao';
  public name: string = 'ahihi'; // dữ liệu muốn hiển thị sang view (file html)
  public imgLink : string = "https://image.shutterstock.com/image-photo/bright-spring-view-cameo-island-260nw-1048185397.jpg";
  public tbBorder : number = 1;
  public tbWidth : number = 1;
  public isBorder : boolean = true;
  public isSpecial : boolean = true; // dữ liệu muốn hiển thị sang view
  public size : number = 20; // dữ liệu muốn hiển thị sang view

  constructor() {}

  ngOnInit(): void {}
}
