import {Environment} from "../Web3/Environment";

export const Jump2OpenSee = () => {
    let url = 'https://opensea.io/collection/no-to-ai-nft'
    window.open(url);
}

export const Jump2Twitter = () =>
    window.open("https://twitter.com/No_to_AI");

export const Jump2Contract = () => {
    let url = Environment.etherscanAddress + 'address/' + Environment.NoToAI_ContractAddress;
    window.open(url);
}

export const Jump2EtherScan = (transHash) => {
    let url = Environment.etherscanAddress + 'tx/' + transHash
    window.open(url, '_blank');
};
