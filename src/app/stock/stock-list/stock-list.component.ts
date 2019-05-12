import { Component, OnInit } from '@angular/core';
import { StockList } from '../shared/modal/stock-list';
import * as moment from 'moment';
import * as _ from 'lodash';
import * as M from 'materialize-css'
import { StockService } from '../shared/services/stock.service';
import { WebsocketService } from '../shared/services/websocket.service';

// const stocks = require("../stocks.json").stocks;

@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.scss']
})
export class StockListComponent implements OnInit {
  public stockCollection: StockList[] = [];
  public shimmerOn = false;



  constructor(private _stockService: StockService, private _ws:WebsocketService) {
// this._ws.initSocket();

    const that = this;

    this._stockService.getStockList().subscribe((res) =>{
      this.stockCollection = res['stocks'];
    })

    setTimeout(() => {
      that.shimmerOn=true;
    }, 2000)
  }

  ngOnInit() {
    const that = this;

    setInterval(() => {
      that.shimmerOn = false;
      that.updateArrayWithNewSocketMessage(that.randomlyPick());
    }, 10000)
  }


  randomlyPick(): any[] {
    let array = [[{
      "name": "AAPL",
      "price": 129.08,
    }, {
      "name": "EOOE",
      "price": 911.10,
    }, {
      "name": "MSFT",
      "price": 64.20,
    }, {
      "name": "LNKS",
      "price": 198.80,
    }, {
      "name": "FB",
      "price": 119.20,
    }],
    [{
      "name": "AAPL",
      "price": 1245.08,
    }, {
      "name": "EOOE",
      "price": 9156.10,
    }, {
      "name": "MSFT",
      "price": 61.20,
    }, {
      "name": "LNKS",
      "price": 19.80,
    }, {
      "name": "FB",
      "price": 19.20,
    }],
    [{
      "name": "AAPL",
      "price": 15.08,
    }, {
      "name": "EOOE",
      "price": 956.10,
    }, {
      "name": "MSFT",
      "price": 619.20,
    }, {
      "name": "LNKS",
      "price": 193.80,
    }, {
      "name": "FB",
      "price": 190.20,
    }]]

    return array[Math.ceil(Math.random() * 1000) % 3];

  }

  updateArrayWithNewSocketMessage(pushMessage: any[]): void {
      const that = this;
      setTimeout(() => {
        that.shimmerOn = true;
      }, 330)

      M.toast({html: 'Push message recieved! (Considering this new data as coming from socket connection!)'})
    _.forEach(pushMessage, (obj) => {
      const index = _.findIndex(this.stockCollection, {name: obj.name});
      if(index != -1) {
        const dummyObject = {
          "name": this.stockCollection[index].name,
          "oldPrice": this.stockCollection[index].price,
          "background": obj.price > this.stockCollection[index].price ? 'green' : obj.price < this.stockCollection[index].price ? 'red':'white',
          "price": obj.price,
          "createdOn": this.stockCollection[index].createdOn,
          "modifiedOn": this.stockCollection[index].modifiedOn
        }
        this.stockCollection.splice(index, 1, dummyObject);
      } else {
        const dummyObject = {
          "name": obj.name,
          "oldPrice": obj.price,
          "background": 'white',
          "price": obj.price,
          "createdOn": new Date().toISOString(),
          "modifiedOn": new Date().toISOString()
        }
        this.stockCollection.push(dummyObject);
      }

    })
  }
}
