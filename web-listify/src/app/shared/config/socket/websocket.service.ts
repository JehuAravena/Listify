import { Injectable } from '@angular/core';
import { io } from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class WebSocketService {
    private socket: any;

    constructor() {
        this.socket = io('http://localhost:3000');
    }

    public on(eventName: string, callback: (data: any) => void) {
        this.socket.on(eventName, callback);
    }

    public emit(eventName: string, data: any) {
        this.socket.emit(eventName, data);
    }
}
