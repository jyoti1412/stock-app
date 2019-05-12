import { Injectable } from '@angular/core';
import { Observable, Observer } from 'rxjs';
import * as socketIo from 'socket.io-client';

const SERVER_URL = 'ws://stocks.mnet.website';
@Injectable({
  providedIn: 'root'
})
export class WebsocketService {
  private socket;

  constructor() { }

  public initSocket(): void {
    this.socket = socketIo(SERVER_URL);
  }

  public send(message:any): void {
    this.socket.emit('message', message);
  }

  public onMessage(): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on('message', (data: any) => observer.next(data));
    });
  }

  public onEvent(event: Event): Observable<any> {
    return new Observable<any>(observer => {
      this.socket.on(event, () => observer.next());
    });
  }

}
