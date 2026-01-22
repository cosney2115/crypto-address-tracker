import * as bitcoin from "bitcoinjs-lib";
import { BIP32Factory } from "bip32";
import * as ecc from "tiny-secp256k1";
import { networks } from "../utils/networks";

const bip32 = BIP32Factory(ecc);

export const generateAddress = (
  xpub: string,
  coin: CoinType,
  index: number,
  change: boolean = false,
): string => {
  const network = networks[coin];
  const node = bip32.fromBase58(xpub, bitcoin.networks.bitcoin);
  const branch = change ? 1 : 0;
  const child = node.derive(branch).derive(index);

  const { address } = bitcoin.payments.p2pkh({
    pubkey: Buffer.from(child.publicKey),
    network: network,
  });
  if (!address) throw new Error("Address not generated");

  return address;
};
