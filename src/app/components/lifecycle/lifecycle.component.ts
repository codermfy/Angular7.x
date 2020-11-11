import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit {
  public msg:string='我是一个生命周期演示'
  constructor() { 

    console.log('1构造函数执行了--除了使用简单的值对局部变量进行初始化之外，什么都不应该做')
  }
  ngOnChanges(): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log('2ngOnChanges执行---当被绑定的输入属性的值发生变化时调用（父子组件传值的时候会触发）')
  }
  ngOnInit(): void {
    console.log('3 ngOnInit执行了---请求数据一般放在这个里面')
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    console.log('4 ngDoCheck执行了---检测，并在发生Angular无法或不愿意自己检测的变化时作出反应')
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log('5ngAfterContentInit执行了--当把内容投影进组件之后调用，只调用一次')
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    console.log('6ngAfterContentChecked--每次完成投影组件内容的更变检测之后调用')
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log('7ngAfterViewInit,初始化完组件视图以及子视图之后调用，第一次ngaftercontentchecked之后调用，只调用一次，可以进行dom操作')
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    console.log('8ngAfterViewChecked，每次做完组件视图和子视图的变更检测之后调用')
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log('9ngOnDestroy,当Angular每次销毁指令/组件之前调用并清扫')
  }
}
