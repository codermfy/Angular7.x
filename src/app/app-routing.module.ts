//配置路由模块

import{NgModule} from '@angular/core';
import {Routes,RouterModule} from '@angular/router';


import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FormComponent } from './components/form/form.component';
import { SearchComponent } from './components/search/search.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component'
import { ShouyeComponent } from './components/shouye/shouye.component';
import { ShouyelistComponent } from './components/shouyelist/shouyelist.component';
import { ProductComponent } from './components/product/product.component';
import { ProductlistComponent } from './components/productlist/productlist.component'
import { Productlist1Component } from './components/productlist1/productlist1.component';
import { Shouyelist1Component } from './components/shouyelist1/shouyelist1.component'
const routes:Routes=[
    {path:'',redirectTo:'/shouye/shouyelist', pathMatch: 'full'},
    {path:'home',component:HomeComponent},
    {path:'news',component:NewsComponent},
    {path:'form',component:FormComponent},
    {path:'newscontent/:id/:key',component:NewscontentComponent},
    {path:'search',component:SearchComponent},
    {path:'shouye',component:ShouyeComponent,children:[
        {path:'',redirectTo:'shouyelist', pathMatch: 'full'},
        {path:'shouyelist',component:ShouyelistComponent},
        {path:'shouyelist1',component:Shouyelist1Component},
    ]},
    {path:'product',component:ProductComponent,children:[
        {path:'',redirectTo:'productlist', pathMatch: 'full'},
        {path:'productlist',component:ProductlistComponent},
        {path:'productlist1',component:Productlist1Component},
    ]},
];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule { }