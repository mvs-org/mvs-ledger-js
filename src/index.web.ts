import {WebUSBDevice} from './device/webusb'
import {Ledger} from './ledger'


export {WebUSBDevice} from './device/webusb'
export {Ledger} from './ledger'

export * from './interfaces'

const MvsLedger  = {
    WebUSBDevice,
    Ledger
}

export default MvsLedger