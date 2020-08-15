const _0x465c = ['path', 'match', 'forEach', 'build', 'join', 'urls', 'URLs\x20recieved\x20wasn\x27t\x20and\x20Array.', 'One\x20ore\x20more\x20of\x20the\x20URLs\x20recieved\x20was\x20NOT\x20a\x20string.', 'Did\x20not\x20recognize\x20a\x20URL.', 'isHTML', 'utility.js', 'filterProxies', 'exports', 'push', 'replace', 'split', 'isProxy', 'object', 'proxies', 'removeDuplicates'];
(function (_0x44e155, _0x465c98) {
    const _0x2188e4 = function (_0x286d58) {
        while (--_0x286d58) {
            _0x44e155['push'](_0x44e155['shift']());
        }
    };
    _0x2188e4(++_0x465c98);
}(_0x465c, 0x185));
const _0x2188 = function (_0x44e155, _0x465c98) {
    _0x44e155 = _0x44e155 - 0x0;
    let _0x2188e4 = _0x465c[_0x44e155];
    return _0x2188e4;
};
const request = require('request'),
    path = require(_0x2188('0xb')),
    {
        type
    } = require('os'),
    util = require(path[_0x2188('0xf')](__dirname, _0x2188('0x1'))),
    proxy = class scraper {
        constructor(_0x17e085) {
            this[_0x2188('0x10')] = [], this[_0x2188('0x9')] = [];
            if (_0x17e085 && typeof _0x17e085 == _0x2188('0x8')) _0x17e085[_0x2188('0xd')](_0x37ada9 => {
                if (typeof _0x37ada9 == 'string') {
                    var _0x435aae = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                        _0x21e0fc = new RegExp(_0x435aae);
                    if (_0x37ada9[_0x2188('0xc')](_0x21e0fc)) this[_0x2188('0x10')][_0x2188('0x4')](_0x37ada9);
                    else throw new Error(_0x2188('0x13'));
                } else throw new Error(_0x2188('0x12'));
            });
            else throw new Error(_0x2188('0x11'));
        } ['scrape']() {
            return new Promise((_0x136c09, _0x179bd6) => {
                let _0x14cc64 = 0x0;
                this[_0x2188('0x10')][_0x2188('0xd')](_0x54fcb7 => {
                    request('' + _0x54fcb7, {
                        'method': 'GET'
                    }, async (_0x3ef86e, _0x56ccad, _0xc0298c) => {
                        if (_0xc0298c) {
                            let _0x500d7a = _0xc0298c[_0x2188('0x6')]('\x0a');
                            util[_0x2188('0x0')](_0xc0298c) && (_0x500d7a = util[_0x2188('0x2')](_0xc0298c)), setTimeout(() => {
                                _0x500d7a[_0x2188('0xd')](_0x3cc72a => {
                                    _0x3cc72a['endsWith']('\x0d') && (_0x3cc72a = _0x3cc72a[_0x2188('0x5')]('\x0d', '')), util[_0x2188('0x7')](_0x3cc72a) && this[_0x2188('0x9')][_0x2188('0x4')](_0x3cc72a);
                                });
                            }, 0x32);
                        }
                        _0x14cc64++;
                    });
                });
                let _0x3ebcac = setInterval(() => {
                    _0x14cc64 >= this[_0x2188('0x10')]['length'] && setTimeout(() => {
                        let _0x403e83 = util[_0x2188('0xa')](this[_0x2188('0x9')]);
                        _0x136c09(_0x403e83), clearInterval(_0x3ebcac);
                    }, 0x32);
                }, 0x1f4);
            });
        }
    };
module[_0x2188('0x3')] = proxy, module['exports'][_0x2188('0xe')] = _0x5100de => {
    return new proxy(_0x5100de);
};