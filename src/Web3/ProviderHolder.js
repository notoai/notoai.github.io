import {Web3Provider} from '@ethersproject/providers'

export const makeWeb3Provider = (provider) => {
    ProviderHolder.library = new Web3Provider(provider)
    ProviderHolder.library.pollingInterval = 5000
    return ProviderHolder.library
}

export const ProviderHolder = {
    library: null
}