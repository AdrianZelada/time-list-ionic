import { Component } from '@angular/core';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  clock: number = 0;

    schedule: Array<any> = [
        // {
        //   name: '1',
        //   timeBegin:
        // }
    ];
  constructor() {
      this.buildList();
      this.timeGo();
  }

  buildList() {
    const limit = 10;
    let begin = 0;
    const progress = 3;
    let end =  progress;
    for (let i = 1; i <= limit; i++) {

        this.schedule.push({
            name: i,
            timeBegin: begin,
            timeEnd: end
        });
        begin = end + 1;
        end = end + progress;
    }
  }

  timeGo() {
    const interval = setInterval( () => {
      this.schedule = this.schedule.map((item: any) => {

        // item.inHour = ((this.clock >= item.timeBegin) && (this.clock <= item.timeEnd));
        // item.timeValue = 100 - item.timeEnd;
        if ((this.clock >= item.timeBegin) && (this.clock <= item.timeEnd)) {
            const size = item.timeEnd - item.timeBegin;
            const value = this.clock - item.timeBegin;
            item.timeValue = `${(100 * value) / size}%`;
            item.inHour = true;
            return item;
        }
        item.timeValue = 0;
        item.inHour = false;
        return item;
      });
      this.clock = this.clock + 0.2;
      if (this.clock > this.schedule[this.schedule.length - 1].timeEnd) {
        clearInterval(interval);
      }
    }, 200);
  }

}
