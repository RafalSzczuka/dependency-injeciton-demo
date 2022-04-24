import { Injectable } from '@angular/core';
import { Logger } from '../interfaces/logger';

@Injectable({
  providedIn: 'root'
})
export class TrololoCounterService implements Logger {
  private counterState: number = 0;

  public get counter() {
    return this.counterState;
  }

  constructor() { }

  public increment(): void {
    const random = Math.floor(Math.random() * (100 - 1 + 1)) + 1
    this.counterState = random;
    console.log(`%cHaha! Your counter state -> ${this.counterState} <- is trolololo!!`, 'color: red; font-size: 20px');
  }
}
