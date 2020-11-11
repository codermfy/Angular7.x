import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleinfo:any={
    username:'',
    sex:'1',
    citylist:['北京','上海','广州'],
    city:'北京',
    hobbies:[
      {title:'吃饭',checked:false},
      {title:'睡觉',checked:false},
      {title:'代码',checked:false},
    ],
    mark:''
  }
  constructor() { }

  ngOnInit(): void {
  }
dosubmit(){
  console.log('提交用户信息')
}
}
