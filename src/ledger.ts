import { splitPath } from './utils';
import { LedgerPublicKeyResponse } from './interfaces';

import Transport from '@ledgerhq/hw-transport'

type AddressFormat = "legacy" | "p2sh"

export const AddressFormatMap = {
    legacy: 0,
    p2sh: 1,
    bech32: 2
}

export class Ledger {

    constructor(private transport: Transport, scrambleKey: string = "ETP") {
        transport.decorateAppAPIMethods(
            this,
            [
                "getWalletPublicKey",
                "signP2SHTransaction",
                "signMessageNew",
                "createPaymentTransactionNew"
            ],
            scrambleKey
        )
    }

    close(){
        this.transport.close()
    }

    async getWalletPublicKey(
        path: string,
        verify: boolean = false,
        format: AddressFormat = 'legacy',
    ): Promise<LedgerPublicKeyResponse> {
        if (!(format in AddressFormatMap)) {
            throw new Error("getWalletPublicKey invalid format=" + format)
        }
        const paths = splitPath(path)
        const pathBuffer = Buffer.alloc(1 + paths.length * 4)
        pathBuffer[0] = paths.length
        paths.forEach((element, index) => {
            pathBuffer.writeUInt32BE(element, 1 + 4 * index);
        })
        const response = await this.transport.send(224, 64, verify ? 1 : 0, AddressFormatMap[format], pathBuffer)
        const publicKeyLength = response[0]
        const addressLength = response[1 + publicKeyLength]
        const publicKey = response.slice(1, 1 + publicKeyLength).toString("hex")
        const address = response.slice(1 + publicKeyLength + 1, 1 + publicKeyLength + 1 + addressLength)
            .toString("ascii")
        const chainCode = response.slice(1 + publicKeyLength + 1 + addressLength, 1 + publicKeyLength + 1 + addressLength + 32)
            .toString("hex")
        return { publicKey, address, chainCode }
    }

}