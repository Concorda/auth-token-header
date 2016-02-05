![Seneca](http://senecajs.org/files/assets/seneca-logo.png)

> A [Seneca.js](https://github.com/senecajs/) plugin for storing auth token in the header.


[![npm version][npm-badge]][npm-url]
[![Build Status][travis-badge]][travis-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]


- __Version:__ 0.0.1
- __Tested on:__ Seneca 0.8, 0.9
- __Node:__ 4, 5
- __License:__ [MIT][]

Lead Maintainer: [Mircea Alexandru](https://github.com/mirceaalexandru)

[Seneca](http://senecajs.org) plugin for storing auth token in the header.

This plugin is used by [seneca-auth](https://www.npmjs.com/package/seneca-auth)

For a gentle introduction to Seneca itself, see the [senecajs.org](http://senecajs.org) site.

### Install

```sh
npm install seneca-auth-token-header
```

### Using header plugin

When using seneca-auth the token-header:

```
seneca.use('auth')
seneca.use('auth-token-header', options)

```

### Options

The only option for this plugin is the name of the token to be set in the HTTP response

   * tokenkey - the default value is "X-Auth-Token"

## Test
To run tests, simply use npm:

```sh
npm run test
```

## Contributing
The [Senecajs org](https://github.com/senecajs/) encourage open participation. If you feel you can help in any way, be it with
documentation, examples, extra testing, or new features please get in touch.

## License
Copyright (c) Mircea Alexandru and other contributors 2015, Licensed under [MIT][].


[npm-badge]: https://badge.fury.io/js/auth-token-header.svg
[npm-url]: https://badge.fury.io/js/auth-token-header
[david-badge]: https://david-dm.org/senecajs/auth-token-header.svg
[david-url]: https://david-dm.org/senecajs/auth-token-header
[gitter-badge]: https://badges.gitter.im/senecajs/seneca.png
[gitter-url]: https://gitter.im/senecajs/seneca
[travis-badge]: https://travis-ci.org/senecajs/auth-token-header.svg
[travis-url]: https://travis-ci.org/senecajs/auth-token-header

[MIT]: ./LICENSE