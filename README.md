# nex-scraperrr
Simple proxy scraper by **NeutronX** (`yaxeldragon`)


## How it Works
Once you input the **URLs** you want to look in, It will send a **`request`**, check if each proxy is an actual proxy using **`regex`**. Then It will give you access to **all proxies** in an array from an **`async`** funcion.
### Features
- [x] Custom **URL** Scrape.
- [x] Filter from an **HTML** document.
- [x] Check proxies with **`Regex`**.
- [x] Remove **all** Duplicates.
- [x] Easily access to all Proxies.

Area | Quick Description
------------ | -------------
[Get Started](#get-started) | How to start using **`nex-scraper`**
[How to Scrape](#how-to-scrape) | How to get the Proxies.

## Get Started
To install **`nex-scraper`** in your project you need to input the following in your console:
```
npm install nex-scraper
```
Once **`nex-scraper`** is installed you can import it in your project by using the following methods:
```js
const proxy = require('nex-scraper');
const proxies = new proxy([
    '(input URL here)',
    '(another URL here...)'
]);
```
You can do as many **`objects`** as you want with the **`URLs`** you want.

## How to Scrape
your project by using the following methods:
```js
const proxy = require('nex-scraper');
const proxies = new proxy([
    'http://www.live-socks.net/2020/05/28-05-20-socks-5-servers.html',
    // ^^^^^^^ This Is HTML (It will get filtered)
    'https://api.proxyscrape.com/?request=getproxies&proxytype=socks5'
    // ^^^^^^^ This Is a normal API (RAW text)
]);
proxies.scrape().then(proxies => {
    // Here you can access the Proxies
});
```
# Happy Coding!