import http from 'k6/http';
import { sleep, check } from 'k6';
import { Trend } from 'k6/metrics';
import { smoke_test_options } from '../configs/smoke_tests.js'


const myTrend = new Trend('waiting_time');

export const options = smoke_test_options

export default function() {  
  const r = http.get('https://httpbin.test.k6.io');
  check(r, {
    'is status 200': (r) => r.status === 200,
  });
  myTrend.add(r.timings.waiting);
  sleep(1);
}
