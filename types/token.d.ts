import { ITokenObject, TokenMapType } from './interface';
export type DefaultTokensByChainType = Record<number, ITokenObject[]>;
export type TokenBalancesType = Record<string, string>;
export declare class TokenStore {
    private _defaultTokensByChain;
    private _tokenBalancesByChainId;
    private _tokenMapByChainId;
    constructor(defaultTokensByChain: DefaultTokensByChainType);
    getTokenBalancesByChainId(chainId: number): TokenBalancesType;
    getTokenMapByChainId(chainId: number): TokenMapType;
    getTokenList(chainId: number): ITokenObject[];
    private getERC20Balance;
    private _updateAllTokenBalances;
    updateTokenBalancesByChainId(chainId: number, erc20TokenList?: ITokenObject[]): Promise<TokenBalancesType>;
    updateNativeTokenBalanceByChainId(chainId: number): Promise<void>;
    private _updateTokenMapData;
    updateTokenMapData(chainId: number): TokenMapType;
}
