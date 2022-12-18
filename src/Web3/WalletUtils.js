import {bitKeepConnector, metaMaskConnector} from "./Connectors";
import {Environment} from "./Environment";

export const WalletType = {
    MetaMask: 'MetaMask',
    BitKeep: 'BitKeep',
}

/**
 * MetaMask钱包是否可用
 */
export function isMetaMaskExist() {
    return window.ethereum !== undefined
}

/**
 * BitKeep钱包是否可用
 */
export function isBitKeepExist() {
    return window.bitkeep !== undefined && window.bitkeep.ethereum !== undefined
}

/**
 * 根据library.provider获取钱包类型
 * @param libraryProvider useWeb3React(): library.provider
 * @returns 钱包类型 取值: [Configuration.WalletType]
 */
export function getWalletType(libraryProvider) {
    if (libraryProvider === window.bitkeep.ethereum) {
        return WalletType.BitKeep
    } else {
        return WalletType.MetaMask
    }
}

export function getWalletObject(walletType) {
    if (walletType === WalletType.BitKeep) {
        return window.bitkeep.ethereum
    } else {
        return window.ethereum
    }
}

/**
 * 连接钱包
 * @param web3ReactContext useWeb3React()
 * @param walletType 钱包类型 取值: [Configuration.WalletType]
 * @param onError (error) => {}
 */
export async function WalletConnect(web3ReactContext, walletType, onError) {
    const {activate} = web3ReactContext
    let connector = metaMaskConnector
    if (walletType === WalletType.BitKeep && isBitKeepExist()) {
        connector = bitKeepConnector
    }

    // 切换Chain
    try {
        const walletObject = getWalletObject(walletType)
        await walletObject.request({
            method: 'wallet_switchEthereumChain',
            params: [{chainId: Environment.connectorSupportedChainIdHexString}],
        });
    } catch (switchError) {
        console.error(switchError)

        // todo: Chain不支持时添加
        // This error code indicates that the chain has not been added to MetaMask.
        // if (switchError.code === 4902) {
        //     try {
        //         await ethereum.request({
        //             method: 'wallet_addEthereumChain',
        //             params: [
        //                 {
        //                     chainId: '0xf00',
        //                     chainName: '...',
        //                     rpcUrls: ['https://...'] /* ... */,
        //                 },
        //             ],
        //         });
        //     } catch (addError) {
        //         // handle "add" error
        //     }
        // }
        // handle other "switch" errors
    }

    // 连接钱包
    await activate(connector, onError)
}

/**
 * 断开钱包连接
 */
export function WalletDisconnect(web3ReactContext) {
    const {deactivate} = web3ReactContext
    deactivate()
}