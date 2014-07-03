
# Exposer

Export all sibling files in an object.
It's teeny tiny but I use it in almost every project.

## Install

```
npm install exposer
```

## Usage

The following file structure:
```
- app.js
- models/
  - index.js
  - post.js
  - user.js
```

In `models/index.js`

```

// Expose siblings

module.exports = require('exposer')(__filename);

```

The in `app.js`

```

var models = require('./models');

// Access require(./models/user);
models.user.findAll();

console.log(models)
// {
//   user: ...,
//   post: ...
// }
```

## Author

[Thom Seddon](https://twitter.com/ThomSeddon)

## License

The MIT License (MIT)

Copyright (c) 2014-present Thom Seddon

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.

