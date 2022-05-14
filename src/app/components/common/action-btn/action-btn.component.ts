import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBtnComponent {
  @Input() public label: string = "Action btn";

  constructor(private counterService: CounterLoggerService) { }

  public onClick(): void {
    this.counterService.increment();
  }

}
