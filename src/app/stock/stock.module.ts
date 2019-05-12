import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { ShockComponent } from './shock/shock.component';
import { StockListComponent } from './stock-list/stock-list.component'
import { CoreModule } from "../core/core.module";
import { StockService } from './shared/services/stock.service';
import { WebsocketService } from './shared/services/websocket.service';

const stockRoute: Routes = [
  {
    path: "",
    component: ShockComponent,
    children: [{
      path: "list",
      component: StockListComponent,
    },
    { path: '', redirectTo: 'list', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(stockRoute),
    CoreModule,
    HttpClientModule
  ],
  declarations: [ShockComponent, StockListComponent],
  providers: [StockService, WebsocketService]
})
export class StockModule { }
