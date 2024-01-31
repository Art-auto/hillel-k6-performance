import { sleep, group } from 'k6'
import http from 'k6/http'

export const options = {
  ext: {
    loadimpact: {
      distribution: { 'amazon:us:ashburn': { loadZone: 'amazon:us:ashburn', percent: 100 } },
      apm: [],
      projectID: 3680300,
      // Test runs with the same name groups test runs together
      name: 'Artem Hillel'
    },
  },
  thresholds: {},
  vus: 1,
  // A string specifying the total duration of the test run.
  duration: '10s',
  scenarios: {
    Scenario_1: {
      executor: 'ramping-vus',
      gracefulStop: '30s',
      stages: [
        { target: 20, duration: '1m' },
        { target: 20, duration: '3m30s' },
        { target: 0, duration: '1m' },
      ],
      gracefulRampDown: '30s',
      exec: 'scenario_1',
    },
  },
}

export default function scenario_1() {
  let response

  group('page_1 - https://qauto.forstudy.space/', function () {
    response = http.get('https://qauto.forstudy.space/', {
      headers: {
        host: 'qauto.forstudy.space',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'document',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'none',
        'sec-fetch-user': '?1',
      },
    })
    sleep(1.8)
  })

  group('page_2 - https://qauto.forstudy.space/panel/garage', function () {
    response = http.get('https://qauto.forstudy.space/api/cars/brands', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://qauto.forstudy.space/api/cars/models?carBrandId=1', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1.9)
    response = http.get('https://qauto.forstudy.space/api/cars/models?carBrandId=3', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(4.6)
    response = http.get('https://qauto.forstudy.space/api/cars/brands/3', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://qauto.forstudy.space/api/cars/models/11', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    sleep(1.8)
  })

  group('page_5 - https://qauto.forstudy.space/panel/instructions', function () {
    response = http.get('https://qauto.forstudy.space/api/cars/brands', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get('https://qauto.forstudy.space/api/cars/models?carBrandId=1', {
      headers: {
        host: 'qauto.forstudy.space',
        accept: 'application/json, text/plain, */*',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
        connection: 'keep-alive',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
      },
    })
    response = http.get(
      'https://qauto.forstudy.space/api/instructions?carBrandId=1&carModelId=1&page=1',
      {
        headers: {
          host: 'qauto.forstudy.space',
          accept: 'application/json, text/plain, */*',
          'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
          'accept-encoding': 'gzip, deflate, br',
          dnt: '1',
          authorization: 'Basic Z3Vlc3Q6d2VsY29tZTJxYXV0bw==',
          connection: 'keep-alive',
          'sec-fetch-dest': 'empty',
          'sec-fetch-mode': 'cors',
          'sec-fetch-site': 'same-origin',
        },
      }
    )
    sleep(2.1)
  })

  group('page_6 - https://qauto.forstudy.space/', function () {
    response = http.get('https://www.youtube.com/embed/TLP8v7WTlSM?showinfo=0&controls=0', {
      headers: {
        host: 'www.youtube.com',
        accept:
          'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
        'accept-language': 'uk-UA,uk;q=0.8,en-US;q=0.5,en;q=0.3',
        'accept-encoding': 'gzip, deflate, br',
        dnt: '1',
        connection: 'keep-alive',
        'upgrade-insecure-requests': '1',
        'sec-fetch-dest': 'iframe',
        'sec-fetch-mode': 'navigate',
        'sec-fetch-site': 'cross-site',
      },
    })
    sleep(1.8)
  })
}
