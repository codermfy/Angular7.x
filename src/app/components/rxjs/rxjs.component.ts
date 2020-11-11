import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {map,filter} from 'rxjs/operators';
@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // this.getRxjsData().subscribe(data=>console.log(data))
    // //可以通过unsubscribe取消订阅，中途取消
    // var a=this.getRxjsData().subscribe(data=>console.log(data))
    // setTimeout(() => {
    //   a.unsubscribe();
    // }, 500);
    //// 多次执行
    // this.getintervaldata().subscribe(data=>{
    //   console.log(data)
    // })
      //用工具方法对返回的数据进行处理
      //filter过滤
      // var streamNum=this.getintervaldata();
      // streamNum.pipe(
      //   filter((value)=>{
      //     return value%2==0
      //   })
      // ).subscribe(data=>{
      //     console.log(data)
      //   })
      //map操作
      // var streamNum=this.getintervaldata();
      // streamNum.pipe(
      //   map((value)=>{
      //     return value*2
      //   })
      // ).subscribe(data=>{
      //     console.log(data)
      //   })
  }
  //rxjs类似于promise
  getRxjsData(){
    return new Observable<any>((observable)=>{
      setTimeout(() => {
        observable.next('shuju')
        // observable.error('????')
      }, 1000);
    })
  }
  //rxjs多次执行,promise不行
  getintervaldata(){
    let count=0
    return new Observable<any>((observable)=>{
      setInterval(() => {
        observable.next(++count)
        // observable.error()
      }, 500);
    })
  }

  
}
