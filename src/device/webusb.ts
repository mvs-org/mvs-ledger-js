import { Ledger } from '../ledger';
import Transport from '@ledgerhq/hw-transport-webusb'

export class WebUSBDevice {
    constructor(){}
    static async getDevice(){
        return new Ledger(await Transport.create())
    }
}