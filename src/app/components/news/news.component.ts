import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //前面不加东西 默认public
  title='我是一个新闻组件';
  username:string='zhangsan1'
  public student:any='我是一个学生'

  public userinfo:any={
    name:'zhangsan',
    age:20
  }

  public message:any;
  public content:string=`<h2>我是一个html标签</h2>`
  //简化版的
  public arr=['123','321','111','222']
  //第一种方式
  public list:any[]=['123',3333,true]
  //第二种方式
  public items:Array<any>=['123',3333,true]
  //复杂的
  public userlist:any[]=[
    {username:'lisi',age:20},
    {username:'wangwu',age:21},
  ]
  public cars:any[]=[
    {
      cate:'BMW',
      list:[
        {
          title:'BMWX1'
        },
        {
          title:'BMWX2'
        },
        {
          title:'BMWX3'
        },
      ]
    },
    {
      cate:'Audi',
      list:[
        {
          title:'AudiA1'
        },
        {
          title:'AudiA2'
        },
        {
          title:'AudiA3'
        },
      ]
    },
  ]
  /*
  声明属性的几种方式：
  public 公有（默认） 在当前类，子类，类外访问
  protected 保护属性 在当前类，子类访问
  private 私有 在当前类可以访问
  */
  constructor() { 
    this.message='????????message'
  }

  ngOnInit(): void {
  }

}
