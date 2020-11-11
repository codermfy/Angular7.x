import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

/*
  get传值
<a [routerLink]="[ '/newscontent' ]" [queryParams]="{id:1,key:2}">newscontent</a>
  接收 
  import {ActivatedRoute} from '@angular/router';
   constructor(public route:ActivatedRoute) { }
   this.route.queryParams.subscribe(data=>{
      console.log(data)
    })
  动态路由
    {path:'newscontent/:id',component:NewscontentComponent},
<a [routerLink]="[ '/newscontent' ,123]">newscontent</a>
  import {ActivatedRoute} from '@angular/router';
   constructor(public route:ActivatedRoute) { }
   this.route.params.subscribe(data=>{
      console.log(data)
    })
*/
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.route.queryParams)
    //get传值
    // this.route.queryParams.subscribe(data=>{
    //   console.log(data)
    // })
    // this.route.params.subscribe(data=>{
    //   console.log(data)
    // })
  }

}
