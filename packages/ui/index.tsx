import * as React from "react";
export * from "./Button";

type TLinkType = "address" | "tx";
export type { TLinkType };

import erc20 from "./contracts/ERC20.json";

export default {
  contracts: {
    erc20: {
      abi: erc20.abi,
    },
  },
};
