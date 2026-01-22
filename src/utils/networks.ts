import * as bitcoin from 'bitcoinjs-lib';
// @ts-ignore
import coininfo from 'coininfo';

export const networks = {
  btc: bitcoin.networks.bitcoin,
  ltc: coininfo.litecoin.main.toBitcoinJS(),
  doge: coininfo.dogecoin.main.toBitcoinJS()
};