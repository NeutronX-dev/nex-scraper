# nex-scraper
Simple proxy scraper by **NeutronX** (`yaxeldragon`)
## Used by:
> **[MoreBots.OVH](https://morebots.ovh/)** - Agar.io Bots.
## Terms
When downloading this module/script you accept that
> The user/company should use it under his/her/their own responsability.

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
[Configuration](#configuration) | Customize **`nex-scraper`**.
[Versions](#versions) | See what's new.

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

# Configuration
Here you can decide weather you remove duplicates or not, if you want to it to filter something in specific, etc...
```js
// All configurations:
{
    removeDuplicates: true,    // bool
    filter: 'XXX.XXX.XXX:XXXX' // string
}
```
> [How to enable/disable removing Duplicates.](#remove-duplicates)

> [Customise what to Filter.](#custom-filter)
## Remove Duplicates
```js
const proxy = require('nex-scraper');
const proxies = new proxy([
    'URLs...'
]);
proxies.setConfig({
    removeDuplicates: true, // Default: true
});
```
This will **NOT** remove **ANY** duplicates, so you may get a same proxy more than one time.
## Custom Filter
```js
const proxy = require('nex-scraper');
const proxies = new proxy([
    'URLs...'
]);
proxies.setConfig({
    filter: "XXX.XXX.XXX.XXX:XXXX", // Default: true
});
```
**PD**: The default filter has a longer range than anything customizable.

This will **ONLY** return proxies that looks like **`XXX.XXX.XXX.XXX:XXXX`**. For example: **`XXX.XXX.XXX.XXX:XXXX`** to look like => **`123.456.789.123:4567`**.
### More examples:
```js
// -------------------------------------
proxies.setConfig({
    filter:  "XXX.XXX.XXX.XXX:XXXX",
    // Look: "123.456.789.123:4567"
});
// -------------------------------------
proxies.setConfig({
    filter:  "XX.XXX.XXX.XX:XXXX",
    // Look: "12.345.678.91:2345"
});
// -------------------------------------

```
## Versions
> * [1.0.2](https://www.npmjs.com/package/nex-scraper/v/1.0.2)* - Log:
>    * Added [version](#versions) Area.
>    * Added [configuration](#configuration) Method.
> * [1.0.1](https://www.npmjs.com/package/nex-scraper/v/1.0.1) - Patched crashes when Scraping.
> * [1.0.0](https://www.npmjs.com/package/nex-scraper/v/1.0.0) - First Release.
# Happy Coding!
