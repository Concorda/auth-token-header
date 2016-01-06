![Seneca](http://senecajs.org/files/assets/seneca-logo.png)

auth-token-header
========================

[![npm version][npm-badge]][npm-url]
[![Dependency Status][david-badge]][david-url]
[![Gitter chat][gitter-badge]][gitter-url]

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
..........
seneca.use('auth')
seneca.use('auth-token-header', options)
..........

```

### Options

The only option for this plugin is the name of the token to be set in the HTTP response

   * tokenkey - the default value is "X-Auth-Token"

[npm-badge]: https://badge.fury.io/js/auth-token-header.svg
[npm-url]: https://badge.fury.io/js/auth-token-header
[david-badge]: https://david-dm.org/senecajs/auth-token-header.svg
[david-url]: https://david-dm.org/senecajs/auth-token-header
[gitter-badge]: https://badges.gitter.im/senecajs/seneca.png
[gitter-url]: https://gitter.im/senecajs/seneca