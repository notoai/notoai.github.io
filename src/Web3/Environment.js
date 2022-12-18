import {Configuration, Urls} from "./Configuration";

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

const apiUrl = () => {
    if (isDevelopment()) {
        return Urls.ApiUrl.Development
    } else {
        return Urls.ApiUrl.Production
    }
}

export const Environment = {
    identifier: environmentIdentifier,
    isDevelopment: isDevelopment(),
    isProduction: isProduction(),
    connectorSupportedChainIds: connectorSupportedChainIds(),
    connectorSupportedChainIdHexString: connectorSupportedChainIdHexString(),

    etherscanAddress: etherScanUrl(),
    apiUrl: apiUrl(),
}
