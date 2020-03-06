const { HIDDevice } = require('../lib/device/hid')

HIDDevice.getDevice()
    .then(device => device.getWalletPublicKey("0"))
    .then(console.log)