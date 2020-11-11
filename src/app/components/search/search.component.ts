import { Component, OnInit } from '@angular/core';

//引入服务
import {StorageService} from '../../services/storage.service'
/*
  服务类似于全局函数，只要在组件中引入就可以使用
  1.ng g service services/storage
  2.app.module.ts 里面引入创建的服务，并且声明
    import {StorageService} from './services/storage.service'
    providers: [StorageService], //配置项目所需要的服务
  3.在用到的组件里面引入服务
  4.初始化，建议在构造函数里面，例子是下面的constructor
 */
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  public keywordlist:any[];
  // public doingnum:number=this.keywordlist.filter(item=>!item.state).length
  // public donenum:number=this.keywordlist.filter(item=>item.state).length
  public keyword:string=''
  constructor(public storage:StorageService) {
    
   }

  ngOnInit(): void {
    console.log('页面刷新会触发这个生命周期函数')
    if(this.storage.get('keywordlist')){
      this.keywordlist=this.storage.get('keywordlist')
    }else{
      this.keywordlist=[
        {title:'zhangsan',state:false},
        {title:'zhangsan1',state:false},
        {title:'zhangsan2',state:true},
      ]
    }
  }
  doingnum(){
    return this.keywordlist.filter(item=>!item.state).length
  }
  donenum(){
    return this.keywordlist.filter(item=>item.state).length
  }
  addkeyword(e){
    if(e.keyCode==13){
      if(this.keyword &&!this.haskeyword(this.keyword)){
        this.keywordlist.unshift(
          {
            title:this.keyword,
            state:false
          }
          )
          this.storage.set('keywordlist',this.keywordlist)
        this.keyword=''
      }else{
        alert('already has ')
        this.keyword=''
      }
    }
  }
  haskeyword(keyword){
    return this.keywordlist.find(item=>item.title==keyword)
  }
  delete(key){
    this.keywordlist.splice(key,1)
    this.storage.set('keywordlist',this.keywordlist)
  }
  clear(){
    this.keywordlist=[]
    this.storage.set('keywordlist',this.keywordlist)
  }
  statechange(){
    this.storage.set('keywordlist',this.keywordlist)
  }
}
