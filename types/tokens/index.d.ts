import { ITokenObject } from "../interface";
declare const DefaultERC20Tokens: {
    [chainId: number]: ITokenObject[];
};
declare const ChainNativeTokenByChainId: {
    [chainId: number]: ITokenObject;
};
declare const WETHByChainId: {
    [chainId: number]: ITokenObject;
};
declare const getOpenSwapToken: (chainId: number) => ITokenObject;
declare const DefaultTokens: {
    [chainId: number]: ITokenObject[];
};
declare const ToUSDPriceFeedAddressesMap: {
    [chainId: number]: {
        [token: string]: string;
    };
};
declare const tokenPriceAMMReference: {
    [chainId: number]: {
        [token: string]: string;
    };
};
export { DefaultERC20Tokens, ChainNativeTokenByChainId, WETHByChainId, DefaultTokens, ToUSDPriceFeedAddressesMap, tokenPriceAMMReference, getOpenSwapToken };
