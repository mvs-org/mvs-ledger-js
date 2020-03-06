import {WebUSBDevice} from './device/webusb'
import {HIDDevice} from './device/hid'
import {Ledger} from './ledger'

export {HIDDevice} from './device/hid'
export {WebUSBDevice} from './device/webusb'
export {Ledger} from './ledger'

export * from './interfaces'

const MvsLedger  = {
    HIDDevice,
    WebUSBDevice,
    Ledger
}

export default MvsLedger