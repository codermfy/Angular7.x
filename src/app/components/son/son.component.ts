import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-son',
  templateUrl: './son.component.html',
  styleUrls: ['./son.component.css']
})
export class SonComponent implements OnInit {
  @Input() title:any;
  @Input() msg:any;
  @Input() run:any;
  @Input() father:any;
  @Output() private outer=new EventEmitter();

  public tit:string='我是子组件'
  public messg:string='我是子组件消息'
  constructor() {
    
   }
  
  ngOnInit(): void {
    // console.log(this.msg)
  }
  sonmethod(){
    console.log('this is 子组件方法')
  }
  getfathermethod(){
    this.run()
  }
  getfather(){
    console.log(this.father)
  }
  sendfather(){
    this.outer.emit('我是子组件数据')
  }
}
