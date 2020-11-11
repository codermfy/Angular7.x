//引入核心模块里面的Component
import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //使用这个组件的名称
  templateUrl: './app.component.html', //html
  styleUrls: ['./app.component.css']  //css
})
export class AppComponent {
  title = 'angulardemo01';    //定义属性
  public flag:boolean=true
  destroy(){
    this.flag=!this.flag
  }
}
