/**
 * 1000000 sun = 1 XLT
 */
export const ONE_XLT = 1000000;

export const IS_MAINNET = process.env.NET !== 'testnet';
export const IS_TESTNET = process.env.NET === 'testnet';
export const IS_DESKTOP = process.env.DESKTOP === 'true';

export const BLOCK_REWARD = 32;
export const EV_MAX_COUNT = 27;
export const WITNESS_CREATE_COST = 9999;
export const CIRCULATING_SUPPLY = 100000000000;
export const ASSET_ISSUE_COST = 1024 * ONE_XLT;

export const PUBLIC_URL = process.env.PUBLIC_URL || window.location.origin;
export const API_URL = process.env.API_URL;
