//浏览器解析的模块
import { BrowserModule } from '@angular/platform-browser';
import {CommonModule} from '@angular/common'
//angular核心模块
import { NgModule } from '@angular/core';
//引入表单相关模块，才能数据双向绑定
import {FormsModule} from '@angular/forms';
//引入HttpClientModule
import {HttpClientModule,HttpClientJsonpModule} from '@angular/common/http'
import {AppRoutingModule} from './app-routing.module';
//根组件
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';


//引入并且配置服务
import {StorageService} from './services/storage.service';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { GrandsonComponent } from './components/grandson/grandson.component';
import { LifecycleComponent } from './components/lifecycle/lifecycle.component';
import { RxjsComponent } from './components/rxjs/rxjs.component';
import { NetworkComponent } from './components/network/network.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { ShouyeComponent } from './components/shouye/shouye.component';
import { ShouyelistComponent } from './components/shouyelist/shouyelist.component';
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/productlist/productlist.component';
import { Productlist1Component } from './components/productlist1/productlist1.component';
import { Shouyelist1Component } from './components/shouyelist1/shouyelist1.component'
//@NgModule装饰器，@NgModule接受一个元数据对象，告诉Angular如何编译和启动应用
@NgModule({
  declarations: [ //配置当前项目运行的组件
    AppComponent, NewsComponent, HomeComponent, HeaderComponent, FormComponent, SearchComponent, FatherComponent, SonComponent, GrandsonComponent, LifecycleComponent, RxjsComponent, NetworkComponent, NewscontentComponent, ShouyeComponent, ShouyelistComponent, ProductComponent, ProductlistComponent, Productlist1Component, Shouyelist1Component
  ],
  imports: [    //配置当前模块运行依赖的其它模块
    BrowserModule,FormsModule,CommonModule,HttpClientModule,HttpClientJsonpModule,AppRoutingModule
  ],
  providers: [StorageService], //配置项目所需要的服务
  bootstrap: [AppComponent] //指定应用的主视图(称为根组件)通过引导根AppModule来启动应用，这里一般写的是根组件
})
//根模块不需要导出任何东西，因为其他组件不需要导入根模块
export class AppModule { }
