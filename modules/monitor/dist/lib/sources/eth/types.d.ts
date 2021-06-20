import { WebSocketProvider, AlchemyWebSocketProvider, InfuraWebSocketProvider, FallbackProvider } from "@ethersproject/providers";
import { BigNumberish } from "ethers";
import { EventTypes } from "../types";
import { Result } from "@ethersproject/abi";
export declare type EthersEvent = Result;
export interface SubscribePayload {
    address: string;
    type: EventTypes;
    abi: any[];
    eventName: string;
    eventField: string;
    triggerValue: BigNumberish;
    label: string;
}
export declare type Providers = WebSocketProvider | AlchemyWebSocketProvider | InfuraWebSocketProvider | FallbackProvider;
export interface EthConstructor {
    provider: Providers;
    id: number;
}
//# sourceMappingURL=types.d.ts.map