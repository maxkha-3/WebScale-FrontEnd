import { Injectable } from '@angular/core';

@Injectable()
export class DruidDataService {

  constructor() { }

  WorstMonitorsSLA15 = (): Array<any> => {
      return [
          {ID: 55, SLA: 80},
          {ID: 465, SLA: 82},
          {ID: 344, SLA: 87},
          {ID: 254, SLA: 91},
          {ID: 11, SLA: 95},
          {ID: 755, SLA: 96},
          {ID: 343, SLA: 96},
          {ID: 222, SLA: 98},
          {ID: 87, SLA: 99},
          {ID: 555, SLA: 99}
      ];
  }

}
