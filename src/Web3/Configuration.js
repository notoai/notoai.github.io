import NoToAI_ABI from './abis/NoToAI.json'

export const Configuration = {
    Mainnet: {
        Name: "主网络",
        NetworkId: 1,
        ChainId: 1,
        ChainIdHexString: '0x1',
        NoToAI: NoToAI_ABI,
        NoToAI_ContractAddress: "0x47939e11B76fA2d8f1B3610d451FD9D5384e5a70",
        EtherscanURL: 'https://etherscan.io/'
    },
    Goerli: {
        Name: "Goerli测试网络",
        NetworkId: 5,
        ChainId: 5,
        ChainIdHexString: '0x5',
        NoToAI: NoToAI_ABI,
        NoToAI_ContractAddress: "0x6ccEe69b0eB06098B75C9b0E841C30449dcDC702",
        EtherscanURL: 'https://goerli.etherscan.io/'
    },
}

export const WalletType = {
    MetaMask: 'MetaMask',
    BitKeep: 'BitKeep',
}

export const ConnectState = {
    DISCONNECT: 0, // 未连接钱包(初始)
    CONNECTING: 1, // 连接钱包中
    CONNECTED: 2, // 已连接钱包，签名中
    SIGNED: 3, // 签名成功，登录中
    LOGGED_IN: 4, // 已登录
    ON_ERROR: 99, // 用于接口报错4: error session
}
