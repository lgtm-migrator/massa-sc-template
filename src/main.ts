/** ****************************
 * Bytecode to send to the massa network that push the `helloworld`
 * smartcontract.
 *
 * N.B. The entry file of your Massa Smart Contract program should be named
 * `src/main.ts`, the command `yarn bundle` will produce an `build/main.wasm`
 * which is ready to be send on Massa network node!
 **/

import { createSC, fileToBase64, call, Context, generateEvent} from "@massalabs/massa-sc-std";

export function main(_args: string): void {
    const bytes = fileToBase64('./build/smart-contract.wasm');
    let addr = createSC(bytes);
    generateEvent("Address = " + addr.toByteString());
    // Here example of how to call a smart contract
    generateEvent(call(addr, "helloworld", "World", 0));
    generateEvent(`${Context.caller().toByteString()}`)
}
