import { InjectedConnector } from '@web3-react/injected-connector'
import {Environment} from "./Environment";
import {BitKeepInjectedConnector} from "./BitKeepInjectedConnector";

export const metaMaskConnector = new InjectedConnector({
    supportedChainIds: Environment.connectorSupportedChainIds
})

export const bitKeepConnector = new BitKeepInjectedConnector({
    supportedChainIds: Environment.connectorSupportedChainIds
})