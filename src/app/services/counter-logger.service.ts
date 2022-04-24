import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterLoggerService {
  private counterState: number = 0;

  public get counter() {
    return this.counterState;
  }

  constructor() { }

  public increment(): void {
    this.counterState++;
    console.log(`Conut state is: ${this.counterState}`);
  }
}
