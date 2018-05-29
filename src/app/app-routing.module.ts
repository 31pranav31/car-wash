import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ServiceCenterComponent } from './service-center/service-center.component';
import { EditComponent } from './user/edit/edit.component';
import { EditServiceComponent } from './service-center/edit-service/edit-service.component';
import { SearchComponent } from './user/search/search.component';
import { AddServiceComponent } from './service-center/add-service/add-service.component';
import { BookComponent } from "./user/book/book.component";

const app_routes: Routes = [
  // { path: '**', pathMatch: 'full', redirectTo: '' },
  { path: '', redirectTo:"users" , pathMatch:"full" },
  { path: 'users', component:UserComponent,
    children:[
      { path:'' , redirectTo:'search-service' , pathMatch:'full'},
      { path:':id/edit',component:EditComponent},
      { path:'search-service',component:SearchComponent},
      { path:'book',component:BookComponent}
    ]
  },
  { path: 'services', component: ServiceCenterComponent,
    children:[
      { path:'',redirectTo:'create',pathMatch:'full'},
      { path:'create',component:AddServiceComponent },
      { path:':id/edit',component:EditServiceComponent }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(app_routes),
  ],
  declarations: [],
  providers: [],
  exports:[
    RouterModule
  ],
})
export class AppRoutingModule { }
