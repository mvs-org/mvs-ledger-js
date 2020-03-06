import { Ledger } from '../ledger';
import TransportHID from '@ledgerhq/hw-transport-node-hid'

export class HIDDevice {
    constructor(){}
    static async getDevice(){
        return new Ledger(await TransportHID.create())
    }
}