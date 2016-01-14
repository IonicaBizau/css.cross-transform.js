# css-cross-transform [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/css-cross-transform.svg)](https://www.npmjs.com/package/css-cross-transform) [![Downloads](https://img.shields.io/npm/dt/css-cross-transform.svg)](https://www.npmjs.com/package/css-cross-transform) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Modify CSS transform properties with one JavaScript call.

## Installation

```sh
$ npm i --save css-cross-transform
```

## Example

```js
// Dependencies
var CSSCrossTransform = require("cross-transform");

// Rotate the elements
CSSCrossTransform(".some-class", "rotate(42deg)");
```

## Documentation

### `CSSCrossTransform(elm, value)`
Create css transform properties with cross-browser support.

#### Params
- **String|Element|NodeList** `elm`: A stringified query selector, an element or a node list.
- **String** `value`: The CSS transform value.

#### Return
- **NodeList|Array** The selected elements.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

## License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md