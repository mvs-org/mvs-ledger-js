<p align="center">
  <a href="https://mvs.org/">
    <img src="https://raw.githubusercontent.com/mvs-org/lightwallet/master/src/assets/logo.png" alt="">
  </a>
  <br>
  <a href="https://travis-ci.org/mvs-org/mvs-ledger-js">
     <img src="https://travis-ci.org/travis-ci.org/mvs-org/mvs-ledger-js?branch=master" alt="Build status">
  </a>
  <br>
  A javascript library for the Metaverse Ledger app
</p>

## Installation
Install using npm:
``` bash
npm install mvs-ledger
```

## Setup
### NodeJS
``` javascript
const {HIDDevice} = require('mvs-ledger/lib/device/hid')
```
<a href="https://nodei.co/npm/mvs-ledger/"><img src="https://nodei.co/npm/mvs-ledger.png?downloads=true&downloadRank=true&stars=true"></a>
### Browser
For use in webapps the npm package contains a dist/bundle.browser.js. You can see an example for WebUSB in the examples folder. You can generate builds using webpack by running the following command
``` bash
npm run build
```

## Usage

Please also check the examples folder.

### Get Public Key
``` javascript
const {HIDDevice} = require('mvs-ledger')

const path = "1337'/0/0"

HIDDevice.getDevice()
    .then(device=>device.getWalletPublicKey(path))
    .then(console.log)
```
## Licence

MIT License

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE