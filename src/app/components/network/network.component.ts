import { Component, OnInit } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http'
import axios from 'axios';

@Component({
  selector: 'app-network',
  templateUrl: './network.component.html',
  styleUrls: ['./network.component.css']
})
export class NetworkComponent implements OnInit {

  public list:any[];
  constructor(public http:HttpClient) { }

  ngOnInit(): void {
    this.axiosGet()
  }
  getdata(){
    let api='http://a.itying.com/api/productlist';
    this.http.get(api).subscribe((res:any)=>{
      console.log(res)
      this.list=res.result
    })
  }
  dologin(){
    //手动设置请求的类型
  //   const HttpOptions={headers:new HttpHeaders({'Content-Type':'application/json'})}
  //   let api='http://127.0.0.1:3000/dologin'
  //   this.http.post(api,{"username":'zhangsan',"age":20},HttpOptions).subscribe(res=>{
  //     console.log(res)
  //   })
  }

  getJsonData(){
    //jsonp请求 服务器必须支持jsonp
    let api='http://a.itying.com/api/productlist';
    this.http.jsonp(api,'callback').subscribe(res=>{
      console.log(res)
    })
  }
  axiosGet(){
    let api='http://a.itying.com/api/productlist';
    axios.get(api).then(res=>{
      console.log(res)
    })
  }
}
