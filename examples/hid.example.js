const { HIDDevice } = require('../lib')

HIDDevice.getDevice()
    .then(device => device.getWalletPublicKey("0"))
    .then(console.log)