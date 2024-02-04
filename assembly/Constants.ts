import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Gambit Chess Club test2";
  export const SYMBOL: string = "GCC";
  export const MINT_PRICE: u64 = 9652500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 10;
  export const URI: string = "https://bafybeih5ra5wtwe2eaz2hc4mqmgvxq2msxa4aqdi3aefk22q3yp3cpmjmy.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1Fnw5M2s5uVo8K1AbYwGDMkqPGU7Wd3bLM");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1Fnw5M2s5uVo8K1AbYwGDMkqPGU7Wd3bLM");
}
