import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';


const myTrend = new Trend('waiting_time');

export const options = {
  // A number specifying the number of VUs to run concurrently.
  vus: 1,
  // A string specifying the total duration of the test run.
  duration: '10s',
  ext: {
    loadimpact: {
      projectID: 3680300,
      // Test runs with the same name groups test runs together
      name: 'Artem Hillel'
    }
  },
  thresholds: {
    http_req_failed: ['rate<0.01'], // http errors should be less than 1%
    http_req_duration: ['p(95)<150'], // 95% of requests should be below 200ms
  },
  // scenarios: {
  //   Scenario_1: {
  //     executor: 'ramping-vus',
  //     gracefulStop: '30s',
  //     stages: [
  //       { target: 20, duration: '1m' },
  //       { target: 20, duration: '3m30s' },
  //       { target: 0, duration: '1m' },
  //     ],
  //     gracefulRampDown: '30s',
  //   },
  // },
};

export default function() {  
  const r = http.get('https://httpbin.test.k6.io');
  check(r, {
    'is status 200': (r) => r.status === 200,
  });
  myTrend.add(r.timings.waiting);
  sleep(1);
}
