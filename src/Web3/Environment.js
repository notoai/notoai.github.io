import {Configuration} from "./Configuration";

const environmentIdentifier = process.env.REACT_APP_ENV

const isDevelopment = () => environmentIdentifier === "development"
const isProduction = () => environmentIdentifier === "production"

const connectorSupportedChainIds = () => {
    if (isDevelopment()) {
        return [Configuration.Goerli.ChainId]
    } else {
        return [Configuration.Mainnet.ChainId]
    }
}

const connectorSupportedChainIdHexString = () => {
    if (isDevelopment()) {
        return Configuration.Goerli.ChainIdHexString
    } else {
        return Configuration.Mainnet.ChainIdHexString
    }
}

const etherScanUrl = () => {
    if (isDevelopment()) {
        return Configuration.Goerli.EtherscanURL
    } else {
        return Configuration.Mainnet.EtherscanURL
    }
}

const noToAI_ABI = () => {
    if (isDevelopment()) {
        return Configuration.Goerli.NoToAI
    } else {
        return Configuration.Mainnet.NoToAI
    }
}

const noToAI_ContractAddress = () => {
    if (isDevelopment()) {
        return Configuration.Goerli.NoToAI_ContractAddress
    } else {
        return Configuration.Mainnet.NoToAI_ContractAddress
    }
}

export const Environment = {
    identifier: environmentIdentifier,
    isDevelopment: isDevelopment(),
    isProduction: isProduction(),
    connectorSupportedChainIds: connectorSupportedChainIds(),
    connectorSupportedChainIdHexString: connectorSupportedChainIdHexString(),

    NoToAI_ABI: noToAI_ABI(),
    NoToAI_ContractAddress: noToAI_ContractAddress(),
    etherscanAddress: etherScanUrl(),
}
