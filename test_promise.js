//
const fetch = require('node-fetch')
const withQuery = require('with-query').default

const ENDPOINT = 'https://api.openweathermap.org/data/2.5/weather'
const API_KEY = 'c866aa2a280e3101cbab13d284c3f3d6'

const url = withQuery(
    ENDPOINT,
    {
        q: 'Singapore',
        appid: API_KEY
    }
)

console.info('url =', url.toString())

const p = fetch(url)

p
.then(result => {
    return result.json()
    //console.info('result', result)
})
.then(result => {
    console.info(result)
})
.catch(err => {
    console.error('error', err)
})
