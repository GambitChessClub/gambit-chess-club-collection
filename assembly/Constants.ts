import { Base58 } from "@koinos/sdk-as";

export namespace Constants {
  export const NAME: string = "Gambit Chess Club";
  export const SYMBOL: string = "GCC";
  export const MINT_PRICE: u64 = 9652500000;
  export const MINT_FEE: bool = true;
  export const MAX_SUPPLY: u64 = 150;
  export const URI: string = "https://bafybeibknkktyd2yvcla3m6ldgyivupsd6gtrfo3x2l42ufh2tht47fcxm.ipfs.nftstorage.link/";
  export const OWNER: Uint8Array = Base58.decode("1E6EKDGSeXsZKhX4DPTNxY8FWvCQnTBbU6");

  // token mint
  export const TOKEN_PAY: Uint8Array = Base58.decode("1FaSvLjQJsCJKq5ybmGsMMQs8RQYyVv8ju");
  export const ADDRESS_PAY: Uint8Array = Base58.decode("1E6EKDGSeXsZKhX4DPTNxY8FWvCQnTBbU6");
}
