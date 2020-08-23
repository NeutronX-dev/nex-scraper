const _0x45d0 = ['removeDuplicates', 'duplicate', 'forEach', 'push', 'object', 'path', 'Invalid\x20Configuration.\x20<nex-client>.setConfig(json);\x20\x0a\x20\x20\x20\x27json.', 'custom', 'split', 'exports', 'scrape', 'filter', 'URLs\x20recieved\x20wasn\x27t\x20and\x20Array.', 'filterProxies', 'filterExp', '[1-9]{', 'search', 'removesduplicate', 'match', 'request', 'urls', ',}\x5c.', 'One\x20ore\x20more\x20of\x20the\x20URLs\x20recieved\x20was\x20NOT\x20a\x20string.', 'utility.js', 'GET', '})/', 'slice', 'length', 'config', 'twice', 'boolean', 'removeduplicates', '\x27\x20is\x20not\x20a\x20Boolean.\x0a\x0a\x0a', 'proxy', 'endsWith', 'removesduplicates', '\x27\x20Is\x20not\x20a\x20valid\x20Configuration.\x0a\x0a\x0a', 'regex', 'doubles', 'build', '})/g', 'keys', 'configuration', '\x27:\x20Did\x20not\x20recieve\x20the\x20correct\x20Fortmatting.\x0a\x20\x20\x20Correct\x20Format:\x20\x22XXX.XXX.XXX:XXXX\x22\x0a\x0a\x0a', 'Did\x20not\x20recognize\x20a\x20URL.', 'customregex', '(:\x5cd{', 'filtervalue', 'proxylayout', 'double', 'string', 'lookup', 'setConfig', 'exp', 'lookfor', 'proxies', 'isHTML', 'cfg'];
(function (_0x45b6e4, _0x45d0e7) {
    const _0x31f7fc = function (_0x15ac4d) {
        while (--_0x15ac4d) {
            _0x45b6e4['push'](_0x45b6e4['shift']());
        }
    };
    _0x31f7fc(++_0x45d0e7);
}(_0x45d0, 0x189));
const _0x31f7 = function (_0x45b6e4, _0x45d0e7) {
    _0x45b6e4 = _0x45b6e4 - 0x0;
    let _0x31f7fc = _0x45d0[_0x45b6e4];
    return _0x31f7fc;
};
const request = require(_0x31f7('0x20')),
    path = require(_0x31f7('0x12')),
    util = require(path['join'](__dirname, _0x31f7('0x24'))),
    proxy = class scraper {
        constructor(_0x1ed892) {
            this[_0x31f7('0x21')] = [], this[_0x31f7('0xa')] = [], this[_0x31f7('0x29')] = {
                'exp': /^(\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3})(?:\s+|\s*:\s*)(\d{2,5})$/,
                'filterExp': /\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}(:\d{2,5})?/g,
                'removeDuplicates': !![]
            };
            if (_0x1ed892 && typeof _0x1ed892 == _0x31f7('0x11')) _0x1ed892[_0x31f7('0xf')](_0x489116 => {
                if (typeof _0x489116 == _0x31f7('0x5')) {
                    var _0x4e9a88 = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi,
                        _0x59ba4f = new RegExp(_0x4e9a88);
                    if (_0x489116[_0x31f7('0x1f')](_0x59ba4f)) this[_0x31f7('0x21')]['push'](_0x489116);
                    else throw new Error(_0x31f7('0x39'));
                } else throw new Error(_0x31f7('0x23'));
            });
            else throw new Error(_0x31f7('0x19'));
        } [_0x31f7('0x17')]() {
            return new Promise((_0x498f8f, _0x43e70e) => {
                let _0x5097bf = 0x0;
                this[_0x31f7('0x21')]['forEach'](_0x3686c7 => {
                    request('' + _0x3686c7, {
                        'method': _0x31f7('0x25')
                    }, async (_0x20750a, _0x4fdf0e, _0x489d36) => {
                        if (_0x489d36) {
                            let _0x55884b = _0x489d36['split']('\x0a');
                            (util[_0x31f7('0xb')](_0x489d36) || !_0x55884b) && (_0x55884b = util[_0x31f7('0x1a')](_0x489d36, this[_0x31f7('0x29')][_0x31f7('0x1b')])), setTimeout(() => {
                                _0x55884b && typeof _0x55884b == _0x31f7('0x11') && _0x55884b[_0x31f7('0x28')] >= 0x1 ? (_0x55884b[_0x31f7('0xf')](_0x3d6bd7 => {
                                    _0x3d6bd7[_0x31f7('0x2f')]('\x0d') && (_0x3d6bd7 = _0x3d6bd7['replace']('\x0d', '')), util['isProxy'](_0x3d6bd7, this['config']['exp']) && this[_0x31f7('0xa')][_0x31f7('0x10')](_0x3d6bd7);
                                }), _0x5097bf++) : _0x5097bf++;
                            }, 0x32);
                        } else _0x5097bf++;
                    });
                });
                let _0x33903a = setInterval(() => {
                    _0x5097bf >= this[_0x31f7('0x21')][_0x31f7('0x28')] && setTimeout(() => {
                        let _0x3e0d64;
                        this[_0x31f7('0x29')][_0x31f7('0xd')] == !![] ? _0x3e0d64 = util[_0x31f7('0xd')](this[_0x31f7('0xa')]) : _0x3e0d64 = this[_0x31f7('0xa')], _0x498f8f(_0x3e0d64), clearInterval(_0x33903a);
                    }, 0x32);
                }, 0x1f4);
            });
        } ['setConfig'](_0x30d445) {
            _0x30d445 = _0x30d445 || null;
            if (_0x30d445 && typeof _0x30d445 == _0x31f7('0x11')) {
                let _0x214c55 = Object[_0x31f7('0x36')](_0x30d445);
                _0x214c55[_0x31f7('0xf')](_0x1162ba => {
                    let _0x4d9f6b = _0x30d445[_0x1162ba];
                    switch (_0x1162ba['toLowerCase']()) {
                        case _0x31f7('0x30'):
                        case _0x31f7('0x2c'):
                        case _0x31f7('0x1e'):
                        case 'removeduplicate':
                        case _0x31f7('0xe'):
                        case _0x31f7('0xe'):
                        case _0x31f7('0x33'):
                        case _0x31f7('0x4'):
                        case _0x31f7('0x2a'):
                            if (typeof _0x4d9f6b == _0x31f7('0x2b')) this[_0x31f7('0x29')][_0x31f7('0xd')] = _0x4d9f6b;
                            else throw new Error(_0x31f7('0x13') + _0x1162ba + _0x31f7('0x2d'));
                            break;
                        case _0x31f7('0x2'):
                        case _0x31f7('0x0'):
                        case _0x31f7('0x3'):
                        case 'proxylayout':
                        case 'iplayout':
                        case _0x31f7('0x9'):
                        case _0x31f7('0x1d'):
                        case _0x31f7('0x6'):
                        case _0x31f7('0x18'):
                        case _0x31f7('0x14'):
                        case _0x31f7('0x32'):
                        case _0x31f7('0x2e'):
                        case 'ip':
                            if (typeof _0x4d9f6b == 'string') {
                                if (_0x4d9f6b[_0x31f7('0x15')]('.')['length'] != 0x1) {
                                    let _0x340b66 = _0x4d9f6b['split']('.'),
                                        _0x23c589;
                                    if (_0x340b66[_0x340b66[_0x31f7('0x28')] - 0x1]['includes'](':')) {
                                        let _0xf5c72f = _0x340b66[_0x340b66['length'] - 0x1][_0x31f7('0x15')](':');
                                        _0x23c589 = _0xf5c72f[_0xf5c72f[_0x31f7('0x28')] - 0x1], _0x340b66['pop'](), _0x340b66[_0x31f7('0x10')](_0xf5c72f[0x0]), _0xf5c72f['pop']();
                                    }
                                    let _0x453da5 = '/',
                                        _0x8817b9 = '/';
                                    _0x340b66['forEach'](_0x5c2679 => {
                                        _0x453da5 += _0x31f7('0x1c') + _0x5c2679[_0x31f7('0x28')] + _0x31f7('0x22'), _0x8817b9 += _0x31f7('0x1c') + _0x5c2679[_0x31f7('0x28')] + _0x31f7('0x22');
                                    }), _0x23c589 ? (_0x453da5 = _0x453da5[_0x31f7('0x27')](0x0, _0x453da5[_0x31f7('0x28')] - 0x2), _0x8817b9 = _0x8817b9[_0x31f7('0x27')](0x0, _0x8817b9['length'] - 0x2), _0x453da5 += _0x31f7('0x1') + _0x23c589[_0x31f7('0x28')] + ',' + _0x23c589[_0x31f7('0x28')] + _0x31f7('0x26'), _0x8817b9 += _0x31f7('0x1') + _0x23c589[_0x31f7('0x28')] + ',' + _0x23c589[_0x31f7('0x28')] + _0x31f7('0x35')) : (_0x453da5 = _0x453da5[_0x31f7('0x27')](0x0, _0x453da5[_0x31f7('0x28')] - 0x2), _0x8817b9 = _0x8817b9[_0x31f7('0x27')](0x0, _0x8817b9['length'] - 0x2), _0x453da5 += '/', _0x8817b9 += '/g'), this[_0x31f7('0x29')][_0x31f7('0x8')] = eval(_0x453da5), this[_0x31f7('0x29')]['filterExp'] = eval(_0x8817b9);
                                } else throw new Error(_0x31f7('0x13') + _0x1162ba + _0x31f7('0x38'));
                            } else throw new Error(_0x31f7('0x13') + _0x1162ba + '\x27\x20is\x20not\x20a\x20String.\x0a\x0a\x0a');
                            break;
                        default:
                            throw new Error(_0x31f7('0x13') + _0x1162ba + _0x31f7('0x31'));
                            break;
                    }
                });
            } else {}
        } [_0x31f7('0x29')](_0x1718d8) {
            this[_0x31f7('0x7')](_0x1718d8);
        } [_0x31f7('0xc')](_0x56419b) {
            this[_0x31f7('0x7')](_0x56419b);
        } [_0x31f7('0x37')](_0x3405d0) {
            this[_0x31f7('0x7')](_0x3405d0);
        }
    };
module[_0x31f7('0x16')] = proxy, module['exports'][_0x31f7('0x34')] = _0x5b9823 => {
    return new proxy(_0x5b9823);
};
