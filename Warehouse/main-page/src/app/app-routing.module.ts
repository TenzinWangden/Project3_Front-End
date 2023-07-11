import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './main-page/main-page.component';
import { Warehouse1Component } from './warehouse1/warehouse1.component';
import { Warehouse2Component } from './warehouse2/warehouse2.component';
import { Warehouse3Component } from './warehouse3/warehouse3.component';
import { AboutComponent } from './about/about.component';
import { InventoryComponent } from './inventory/inventory.component';
import { AppComponent } from './app.component';

const routes: Routes = [{path: "home", component: MainPageComponent, title: "Camo Confections"},
                        {path: "inventory", component: InventoryComponent, title: "Inventory", children:[
                        {path: "warehouse1", component: Warehouse1Component, title: "Warehouse 1"},
                        {path: "warehouse2", component: Warehouse2Component, title: "Warehouse 2"},
                        {path: "warehouse3", component: Warehouse3Component, title: "Warehouse 3"}]},
                        {path: "about", component: AboutComponent, title: "About"}
                       ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
