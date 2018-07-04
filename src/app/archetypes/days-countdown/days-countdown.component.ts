import { Component, OnInit, Input, AfterViewInit } from "@angular/core";
import { Timestamp } from "rxjs";

@Component({
  selector: "app-days-countdown",
  templateUrl: "./days-countdown.component.html",
  styleUrls: ["./days-countdown.component.scss"]
})
export class DaysCountdownComponent implements OnInit {
  @Input() config: { closingDate: string; creationDate: string };
  private _MS_PER_DAY = 1000 * 60 * 60 * 24;
  public finishDays: number;
  public daysWidth;

  ngOnInit(): void {
    this.calculateProgressBar();
  }

  public calculateProgressBar() {
    const close = new Date(this.config.closingDate);
    const creation = new Date(this.config.creationDate);
    const totalDuration = this.dateDiffInDays(creation, close);
    const finishDays = this.dateDiffInDays(new Date(), close);
    const daysWidth = (finishDays / totalDuration) * 100;

    this.finishDays = finishDays;
    this.daysWidth = daysWidth;
  }

  public dateDiffInDays(a, b) {
    const utc1 = Date.UTC(a.getFullYear(), a.getMonth(), a.getDate());
    const utc2 = Date.UTC(b.getFullYear(), b.getMonth(), b.getDate());

    return Math.floor((utc2 - utc1) / this._MS_PER_DAY);
  }
}
