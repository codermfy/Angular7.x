import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-father',
  templateUrl: './father.component.html',
  styleUrls: ['./father.component.css']
})
export class FatherComponent implements OnInit {

  public title:string='父组件标题传入子组件'
  public msg:string='父组件的msg'
  constructor() { }

  ngOnInit(): void {
  }
  run(){
    console.log('我是父组件的方法')
  }
  getchild(e){
    console.log(e)
  }
}
