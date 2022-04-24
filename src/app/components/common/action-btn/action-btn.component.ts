import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { CounterLoggerService } from 'src/app/services/counter-logger.service';

@Component({
  selector: 'app-action-btn',
  templateUrl: './action-btn.component.html',
  styleUrls: ['./action-btn.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ActionBtnComponent implements OnInit {
  @Input() public label: string = "Action btn";

  constructor(private counterService: CounterLoggerService) { }

  ngOnInit(): void {
  }

  public onClick(): void {
    this.counterService.increment();
  }

}
