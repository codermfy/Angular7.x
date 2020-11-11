import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @ViewChild('mybox') mybox:any;
  @ViewChild('form') form:any;
  constructor() { }

  ngOnInit(): void {
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log(this.mybox)
    this.mybox.nativeElement.style.width='200px';
    this.mybox.nativeElement.style.height='200px';
    this.mybox.nativeElement.style.background='red';

  }
  getchildmethod(){
    this.form.dosubmit()
  }
}
