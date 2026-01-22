import { env } from "bun";
import { generateAddress } from "./services/address-generator";

const ltcXpub = env.XPUB_LTC;
if (!ltcXpub) throw new Error("XPUB_LTC is not defined");

const ltcAddress = generateAddress(ltcXpub, "ltc", 0);
console.log(ltcAddress);

const btcXpub = env.XPUB_BTC;
if (!btcXpub) throw new Error("XPUB_BTC is not defined");

const btcAddress = generateAddress(btcXpub, "btc", 0);
console.log(btcAddress);

const dogeXpub = env.XPUB_DOGE;
if (!dogeXpub) throw new Error("XPUB_DOGE is not defined");

const dogeAddress = generateAddress(dogeXpub, "doge", 0);
console.log(dogeAddress);
