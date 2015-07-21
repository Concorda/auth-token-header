seneca-auth-token-header
========================

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

