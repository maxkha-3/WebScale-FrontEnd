import {Injectable} from '@angular/core';
import {MiscService} from '../misc-service/misc.service';

@Injectable()
export class DummyDataService {

    /*
    Script used for generating data:

    [
  {
  'repeat(3)':
  {
    monitor_id: '{{index(1)}}',
    error_seconds: [
      {
       'repeat(50)':
        {
          timestamp: function (tags, p, i) {return new Date(2014, 0, 10, 10, 30, i*10).toISOString();},
          value: '{{integer(0, 10)}}'
        }
      }
    ],
    tasks:  [
      {
      'repeat(3)':
      {
        task_id: function (tags, parent, i) {
          return parent.monitor_id*10 + i + 1;
        },
        error_seconds: [
          {
           'repeat(50)':
          {
            timestamp: function (tags, p, i) {return new Date(2014, 0, 10, 10, 30, i*10).toISOString();},
            value: '{{integer(0, 10)}}'
          }
          }
        ],
        streams: [
          {
			'repeat(3)':
            {
              stream_id: function (tags, parent, i) {
                return parent.task_id*10 + i + 1;
              },
              reflector: {
                reflector_id: function (tags, parent, i) {
                	return parent.stream_id * 10;
              	},
                latitude: '{{floating(65.574413, 65.594954, 6)}}',
                longitude: '{{floating(22.113728, 22.179343, 6)}}',
              },
              error_seconds: [
                {
                  'repeat(50)':
                  {
                    timestamp: function (tags, p, i) {return new Date(2014, 0, 10, 10, 30, i*10).toISOString();},
                    value: '{{integer(0, 10)}}'
                  }
                }
              ],
              rate: [
                {
                  'repeat(50)':
                  {
                    timestamp: function (tags, p, i) {return new Date(2014, 0, 10, 10, 30, i*10).toISOString();},
                    value: '{{integer(45, 55)}}'
                  }
                }
              ],
              avg_delay: [
                {
                  'repeat(50)':
                  {
                    timestamp: function (tags, p, i) {return new Date(2014, 0, 10, 10, 30, i*10).toISOString();},
                    value: '{{integer(110, 150)}}'
                  }
                }
              ]
            }
          }
        ]
      }
      }
    ]
  }
}
]
     */
    private overviewData: any[] = [
        {
            "monitor_id": 1,
            "error_seconds": [
                {
                    "timestamp": "2014-01-10T10:30:00.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:30:10.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:30:20.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:30:30.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:30:40.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:30:50.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:31:00.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:31:10.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:31:20.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:31:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:31:40.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:31:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:32:00.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:32:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:32:20.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:32:30.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:32:40.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:32:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:33:00.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:33:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:33:20.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:33:30.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:33:40.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:33:50.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:34:00.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:34:10.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:34:20.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:34:30.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:34:40.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:34:50.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:35:00.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:35:10.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:35:20.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:35:30.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:35:40.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:35:50.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:36:00.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:36:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:36:20.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:36:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:36:40.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:36:50.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:37:00.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:37:10.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:37:20.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:37:30.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:37:40.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:37:50.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:38:00.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:38:10.000Z",
                    "value": 6
                }
            ],
            "tasks": [
                {
                    "task_id": 11,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 10
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 111,
                            "reflector": {
                                "reflector_id": 1110,
                                "latitude": "65.577243",
                                "longitude": "22.157836"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 10
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 52
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 115
                                }
                            ]
                        },
                        {
                            "stream_id": 112,
                            "reflector": {
                                "reflector_id": 1120,
                                "latitude": "65.582631",
                                "longitude": "22.173989"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 6
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 48
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 137
                                }
                            ]
                        },
                        {
                            "stream_id": 113,
                            "reflector": {
                                "reflector_id": 1130,
                                "latitude": "65.59396",
                                "longitude": "22.168851"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 3
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 54
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 126
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 12,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 2
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 121,
                            "reflector": {
                                "reflector_id": 1210,
                                "latitude": "65.579734",
                                "longitude": "22.11613"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 0
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 131
                                }
                            ]
                        },
                        {
                            "stream_id": 122,
                            "reflector": {
                                "reflector_id": 1220,
                                "latitude": "65.590281",
                                "longitude": "22.172936"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 9
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 48
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 131
                                }
                            ]
                        },
                        {
                            "stream_id": 123,
                            "reflector": {
                                "reflector_id": 1230,
                                "latitude": "65.579074",
                                "longitude": "22.171023"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 8
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 46
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 128
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 13,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 4
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 131,
                            "reflector": {
                                "reflector_id": 1310,
                                "latitude": "65.57642",
                                "longitude": "22.139007"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 1
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 51
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 117
                                }
                            ]
                        },
                        {
                            "stream_id": 132,
                            "reflector": {
                                "reflector_id": 1320,
                                "latitude": "65.593516",
                                "longitude": "22.148568"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 8
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 51
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 128
                                }
                            ]
                        },
                        {
                            "stream_id": 133,
                            "reflector": {
                                "reflector_id": 1330,
                                "latitude": "65.591833",
                                "longitude": "22.165463"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 4
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 136
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "monitor_id": 2,
            "error_seconds": [
                {
                    "timestamp": "2014-01-10T10:30:00.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:30:10.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:30:20.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:30:30.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:30:40.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:30:50.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:31:00.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:31:10.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:31:20.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:31:30.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:31:40.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:31:50.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:32:00.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:32:10.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:32:20.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:32:30.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:32:40.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:32:50.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:33:00.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:33:10.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:33:20.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:33:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:33:40.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:33:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:34:00.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:34:10.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:34:20.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:34:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:34:40.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:34:50.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:35:00.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:35:10.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:35:20.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:35:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:35:40.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:35:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:36:00.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:36:10.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:36:20.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:36:30.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:36:40.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:36:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:37:00.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:37:10.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:37:20.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:37:30.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:37:40.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:37:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:38:00.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:38:10.000Z",
                    "value": 1
                }
            ],
            "tasks": [
                {
                    "task_id": 21,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 0
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 211,
                            "reflector": {
                                "reflector_id": 2110,
                                "latitude": "65.582898",
                                "longitude": "22.127812"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 4
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 55
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 123
                                }
                            ]
                        },
                        {
                            "stream_id": 212,
                            "reflector": {
                                "reflector_id": 2120,
                                "latitude": "65.584742",
                                "longitude": "22.165859"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 3
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 50
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 118
                                }
                            ]
                        },
                        {
                            "stream_id": 213,
                            "reflector": {
                                "reflector_id": 2130,
                                "latitude": "65.580665",
                                "longitude": "22.169972"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 7
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 46
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 112
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 22,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 0
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 221,
                            "reflector": {
                                "reflector_id": 2210,
                                "latitude": "65.579152",
                                "longitude": "22.165541"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 2
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 46
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 133
                                }
                            ]
                        },
                        {
                            "stream_id": 222,
                            "reflector": {
                                "reflector_id": 2220,
                                "latitude": "65.581297",
                                "longitude": "22.152486"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 6
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 54
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 149
                                }
                            ]
                        },
                        {
                            "stream_id": 223,
                            "reflector": {
                                "reflector_id": 2230,
                                "latitude": "65.576928",
                                "longitude": "22.172995"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 6
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 54
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 134
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 23,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 4
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 231,
                            "reflector": {
                                "reflector_id": 2310,
                                "latitude": "65.587167",
                                "longitude": "22.177249"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 3
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 51
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 141
                                }
                            ]
                        },
                        {
                            "stream_id": 232,
                            "reflector": {
                                "reflector_id": 2320,
                                "latitude": "65.590496",
                                "longitude": "22.152556"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 9
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 55
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 110
                                }
                            ]
                        },
                        {
                            "stream_id": 233,
                            "reflector": {
                                "reflector_id": 2330,
                                "latitude": "65.593975",
                                "longitude": "22.151883"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 1
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 49
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 138
                                }
                            ]
                        }
                    ]
                }
            ]
        },
        {
            "monitor_id": 3,
            "error_seconds": [
                {
                    "timestamp": "2014-01-10T10:30:00.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:30:10.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:30:20.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:30:30.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:30:40.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:30:50.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:31:00.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:31:10.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:31:20.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:31:30.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:31:40.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:31:50.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:32:00.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:32:10.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:32:20.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:32:30.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:32:40.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:32:50.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:33:00.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:33:10.000Z",
                    "value": 6
                },
                {
                    "timestamp": "2014-01-10T10:33:20.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:33:30.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:33:40.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:33:50.000Z",
                    "value": 2
                },
                {
                    "timestamp": "2014-01-10T10:34:00.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:34:10.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:34:20.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:34:30.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:34:40.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:34:50.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:35:00.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:35:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:35:20.000Z",
                    "value": 0
                },
                {
                    "timestamp": "2014-01-10T10:35:30.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:35:40.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:35:50.000Z",
                    "value": 3
                },
                {
                    "timestamp": "2014-01-10T10:36:00.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:36:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:36:20.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:36:30.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:36:40.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:36:50.000Z",
                    "value": 5
                },
                {
                    "timestamp": "2014-01-10T10:37:00.000Z",
                    "value": 7
                },
                {
                    "timestamp": "2014-01-10T10:37:10.000Z",
                    "value": 10
                },
                {
                    "timestamp": "2014-01-10T10:37:20.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:37:30.000Z",
                    "value": 4
                },
                {
                    "timestamp": "2014-01-10T10:37:40.000Z",
                    "value": 1
                },
                {
                    "timestamp": "2014-01-10T10:37:50.000Z",
                    "value": 8
                },
                {
                    "timestamp": "2014-01-10T10:38:00.000Z",
                    "value": 9
                },
                {
                    "timestamp": "2014-01-10T10:38:10.000Z",
                    "value": 8
                }
            ],
            "tasks": [
                {
                    "task_id": 31,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 6
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 311,
                            "reflector": {
                                "reflector_id": 3110,
                                "latitude": "65.591566",
                                "longitude": "22.118987"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 0
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 55
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 119
                                }
                            ]
                        },
                        {
                            "stream_id": 312,
                            "reflector": {
                                "reflector_id": 3120,
                                "latitude": "65.584491",
                                "longitude": "22.120829"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 10
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 133
                                }
                            ]
                        },
                        {
                            "stream_id": 313,
                            "reflector": {
                                "reflector_id": 3130,
                                "latitude": "65.592019",
                                "longitude": "22.117908"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 6
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 122
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 32,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 1
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 2
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 321,
                            "reflector": {
                                "reflector_id": 3210,
                                "latitude": "65.579016",
                                "longitude": "22.140341"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 6
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 49
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 118
                                }
                            ]
                        },
                        {
                            "stream_id": 322,
                            "reflector": {
                                "reflector_id": 3220,
                                "latitude": "65.581539",
                                "longitude": "22.156689"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 1
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 51
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 141
                                }
                            ]
                        },
                        {
                            "stream_id": 323,
                            "reflector": {
                                "reflector_id": 3230,
                                "latitude": "65.588433",
                                "longitude": "22.148429"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 5
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 55
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 117
                                }
                            ]
                        }
                    ]
                },
                {
                    "task_id": 33,
                    "error_seconds": [
                        {
                            "timestamp": "2014-01-10T10:30:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:30:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:30:20.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:30:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:30:40.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:30:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:31:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:31:10.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:31:20.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:31:30.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:31:40.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:31:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:32:00.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:32:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:32:20.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:32:30.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:32:40.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:32:50.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:33:00.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:33:10.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:33:20.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:30.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:33:40.000Z",
                            "value": 5
                        },
                        {
                            "timestamp": "2014-01-10T10:33:50.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:34:00.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:34:10.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:34:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:34:30.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:34:40.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:34:50.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:35:00.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:35:10.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:35:20.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:35:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:35:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:35:50.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:36:00.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:36:10.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:36:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:36:30.000Z",
                            "value": 0
                        },
                        {
                            "timestamp": "2014-01-10T10:36:40.000Z",
                            "value": 3
                        },
                        {
                            "timestamp": "2014-01-10T10:36:50.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:00.000Z",
                            "value": 9
                        },
                        {
                            "timestamp": "2014-01-10T10:37:10.000Z",
                            "value": 8
                        },
                        {
                            "timestamp": "2014-01-10T10:37:20.000Z",
                            "value": 10
                        },
                        {
                            "timestamp": "2014-01-10T10:37:30.000Z",
                            "value": 7
                        },
                        {
                            "timestamp": "2014-01-10T10:37:40.000Z",
                            "value": 6
                        },
                        {
                            "timestamp": "2014-01-10T10:37:50.000Z",
                            "value": 2
                        },
                        {
                            "timestamp": "2014-01-10T10:38:00.000Z",
                            "value": 4
                        },
                        {
                            "timestamp": "2014-01-10T10:38:10.000Z",
                            "value": 9
                        }
                    ],
                    "streams": [
                        {
                            "stream_id": 331,
                            "reflector": {
                                "reflector_id": 3310,
                                "latitude": "65.585372",
                                "longitude": "22.130906"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 3
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 48
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 144
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 143
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 117
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 134
                                }
                            ]
                        },
                        {
                            "stream_id": 332,
                            "reflector": {
                                "reflector_id": 3320,
                                "latitude": "65.577664",
                                "longitude": "22.158166"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 1
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 7
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 135
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 141
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 119
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 121
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 146
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 118
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 125
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 127
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 114
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 137
                                }
                            ]
                        },
                        {
                            "stream_id": 333,
                            "reflector": {
                                "reflector_id": 3330,
                                "latitude": "65.584875",
                                "longitude": "22.117274"
                            },
                            "error_seconds": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 2
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 3
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 9
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 7
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 8
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 4
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 0
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 5
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 6
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 10
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 3
                                }
                            ],
                            "rate": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 54
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 50
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 51
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 53
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 52
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 46
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 45
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 49
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 55
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 48
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 47
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 45
                                }
                            ],
                            "avg_delay": [
                                {
                                    "timestamp": "2014-01-10T10:30:00.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:10.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:20.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:30.000Z",
                                    "value": 128
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:40.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:30:50.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:00.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:10.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:20.000Z",
                                    "value": 134
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:30.000Z",
                                    "value": 147
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:40.000Z",
                                    "value": 124
                                },
                                {
                                    "timestamp": "2014-01-10T10:31:50.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:00.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:10.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:20.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:30.000Z",
                                    "value": 136
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:32:50.000Z",
                                    "value": 149
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:00.000Z",
                                    "value": 133
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:10.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:20.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:30.000Z",
                                    "value": 137
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:40.000Z",
                                    "value": 131
                                },
                                {
                                    "timestamp": "2014-01-10T10:33:50.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:10.000Z",
                                    "value": 132
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:20.000Z",
                                    "value": 120
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:30.000Z",
                                    "value": 130
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:40.000Z",
                                    "value": 126
                                },
                                {
                                    "timestamp": "2014-01-10T10:34:50.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:00.000Z",
                                    "value": 115
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:10.000Z",
                                    "value": 138
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:20.000Z",
                                    "value": 110
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:40.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:35:50.000Z",
                                    "value": 142
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:00.000Z",
                                    "value": 139
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:10.000Z",
                                    "value": 116
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:20.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:30.000Z",
                                    "value": 145
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:40.000Z",
                                    "value": 150
                                },
                                {
                                    "timestamp": "2014-01-10T10:36:50.000Z",
                                    "value": 113
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:00.000Z",
                                    "value": 122
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:10.000Z",
                                    "value": 123
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:20.000Z",
                                    "value": 140
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:30.000Z",
                                    "value": 111
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:40.000Z",
                                    "value": 148
                                },
                                {
                                    "timestamp": "2014-01-10T10:37:50.000Z",
                                    "value": 112
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:00.000Z",
                                    "value": 129
                                },
                                {
                                    "timestamp": "2014-01-10T10:38:10.000Z",
                                    "value": 116
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ];

    constructor(private miscService: MiscService) {
    }

    esContributionData = (): Promise<any> => {
        return new Promise((resolve => resolve([
            {ID: 'Monitor Loss', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'Delay variation', 'Data': {es: Math.floor((Math.random() * 100) + 1)}},
            {ID: 'SES', 'Data': {es: Math.floor((Math.random() * 100) + 1)}}
        ])));
    };

    monitorOverviewData = (id: any): any => {
        let dt = new Date('1995-12-17T11:00:00');
        let tarr = new Array();
        for (let i = 0; i < 100; i++) {
            tarr.push(dt.toISOString());
            dt.setMinutes(dt.getMinutes() + 30);
        }

        let retval = {
            ID: id,
            tasks: []
        };

        for (let z = 0; z < 5; z++) {
            retval.tasks.push({
                ID: 'tsk' + (z + 1),
                ESData: tarr.map(x => ({Timestamp: x, ES: Math.floor((Math.random() * 3) + 1)}))
            });
        }

        return retval;
    };

    geographicOverviewData = (fromLat, fromLng, toLat, toLng): any => {
        return this.getAllReflectors();
    };

    realTimePredictionData = (latestTimestamp: Date, latestValue: string, selector: string, measure: string, sourceID: string, interval: number): Promise<any> => {
        return new Promise((resolve, reject) => {
            let predictionData = {prediction: [{timestamp: latestTimestamp.toISOString(), value: latestValue}]};

            let randFrom = 0;
            let randTo = 1000;

            if (measure === "sla") {
                randFrom = 0;
                randTo = 100;
            } else if (measure === "avg_response_time") {
                randFrom = 0;
                randTo = 600;
            }

            for (let i = 1; i < 10; i++) {
                predictionData.prediction.push({timestamp: new Date(latestTimestamp.getTime() + (interval / 20 * i * 60 * 1000)).toISOString(), value: this.miscService.randomInt(randFrom, randTo).toString()});
            }
            resolve(predictionData);
        });
    };

    getAllMonitors = (): Promise<any> => {
        return new Promise((resolve, reject) => {

            let data = this.overviewData.map(x => ({monitor_id: x.monitor_id, error_seconds: x.error_seconds}));
            resolve(data);
        });
    };

    getAllTasks = (): Promise<any> => {
        return new Promise((resolve, reject) => {

            let data = [].concat.apply([], this.overviewData.map(x => ( x.tasks.map( y => ({task_id: y.task_id, error_seconds: y.error_seconds})))));
            resolve(data);
        });
    };

    getTasksInMonitor = (id: string): Promise<any> => {
        return new Promise((resolve, reject) => {

            let monitor = this.overviewData.find(x => x.monitor_id == id);
            let data = monitor.tasks.map(x => ({task_id: x.task_id, error_seconds: x.error_seconds}));
            resolve(data);
        });
    };

    getAllStreams = (): Promise<any> => {
        return new Promise((resolve, reject) => {

            let data = [].concat.apply([], [].concat.apply([], this.overviewData.map(x => ( x.tasks.map( y => ( y.streams.map( z => ({stream_id: z.stream_id, error_seconds: z.error_seconds}))))))));
            resolve(data);
        });
    };

    getAllReflectors = (): Promise<any> => {
        return new Promise((resolve, reject) => {

            let data = [].concat.apply([], [].concat.apply([], this.overviewData.map(x => ( x.tasks.map( y => ( y.streams.map( z => {
                let obj = z.reflector;
                obj.streams = [z.stream_id];
                return obj;
            })))))));
            resolve(data);
        });
    };

    getStreamsInTask = (id: string): Promise<any> => {
        return new Promise((resolve, reject) => {

            let task = [].concat.apply([], this.overviewData.map(x => x.tasks)).find(y => y.task_id == id)
            let data = task.streams.map(x => ({stream_id: x.stream_id, error_seconds: x.error_seconds}));
            resolve(data);
        });
    };

    getStream = (id: string): Promise<any> => {
        return new Promise((resolve, reject) => {

            let data = [].concat.apply([], [].concat.apply([], this.overviewData.map(x => ( x.tasks.map( y => ( y.streams))))));
            let stream = data.find(x => x.stream_id == id);
            resolve(stream);
        });
    };
}
