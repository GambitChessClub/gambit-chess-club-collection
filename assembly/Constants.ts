import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Gambit Chess Club";
  export const SYMBOL: string = "GCC";
  export const MINT_PRICE: u64 = 9652500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 150;
  export const URI: string = "https://bafybeihcpj6v6ykgif2z6ukjss5gkasmzt7haztd3zdpy5iy7pirgcv3ee.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1E6EKDGSeXsZKhX4DPTNxY8FWvCQnTBbU6");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("15DJN4a8SgrbGhhGksSBASiSYjGnMU8dGL");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1E6EKDGSeXsZKhX4DPTNxY8FWvCQnTBbU6");
}
