import { Component, OnInit } from '@angular/core';

import { Router ,NavigationExtras} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public picUrl='https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=205441424,1768829584&fm=26&gp=0.jpg'
  public list:any[]=['123',321,123]
  public flag:boolean=false
  public sw:number=2
  public today:any=new Date();
  public msg:string='moren'
  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  
  run(){
    alert('点击事件触发，也可以操作类中的其他数据')
  }
  change(){
    this.msg='默认值'
  }
  //js 动态路由
  goroute(){
    //有传值则在数组里面加
    // this.router.navigate(['/newscontent','123','234'])
    this.router.navigate(['/search'])
  }
  //get传值
  getroute(){
    let queryParams:NavigationExtras={
      queryParams:{'aid':123}
    }
    this.router.navigate(['/form'],queryParams)
  }
}
