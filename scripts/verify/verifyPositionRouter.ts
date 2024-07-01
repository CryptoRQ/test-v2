import "dotenv/config";
import {networks} from "../networks";
import {hardhatArguments} from "hardhat";

const document = require(`../../deployments/${process.env.CHAIN_ID}.json`);

module.exports = [
    networks[hardhatArguments.network as keyof typeof networks].usd,
    `${document.deployments.Router}`,
    `${document.deployments.MarketManager}`,
    networks[hardhatArguments.network as keyof typeof networks].minPositionRouterExecutionFee,
];
