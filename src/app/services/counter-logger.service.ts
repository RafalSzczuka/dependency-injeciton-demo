import { Inject, Injectable, OnDestroy, Optional } from '@angular/core';
import { LOGGER_SOURCE } from '../constants/injection-tokens';
import { Logger } from '../interfaces/logger';

@Injectable(
  {
    providedIn: "root"
  }
)
export class CounterLoggerService implements Logger, OnDestroy {
  private counterState: number = 0;

  public get counter() {
    return this.counterState;
  }

  constructor(@Optional() @Inject(LOGGER_SOURCE) private source: string) { }

  public ngOnDestroy(): void {
    console.log("DESTROY", this.source)
  }

  public increment(): void {
    this.counterState++;
    let message = `Conut state is: ${this.counterState}`
    if (this.source) {
      message += ` (Source ${this.source})`
    }

    console.log(message);
  }
}
