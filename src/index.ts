import { env } from "bun";
import { generateAddress } from "./services/address-generator";

const ltcXpub = env.XPUB_LTC;
if (!ltcXpub) throw new Error("XPUB_LTC is not defined");

const ltcAddress = generateAddress(ltcXpub, "ltc", 0);
console.log(ltcAddress);
