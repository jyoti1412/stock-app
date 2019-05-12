import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { ChatModule } from './chat/chat.module';
import {ChatComponent} from "./chat/chat/chat.component";
const routes: Routes = [
  {
    path: 'media-net/stock',
    loadChildren: './stock/stock.module#StockModule',
  },
  { path: '', redirectTo: 'media-net/stock', pathMatch: 'full' },
]

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
    BrowserModule,
    CoreModule,
    SharedModule,
    ChatModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
