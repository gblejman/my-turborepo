import { default as hardat, Button, TLinkType } from "ui";

const type: TLinkType = "address";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />

      <h2>type</h2>
      <span>{type}</span>

      <h2>erc20 abi</h2>
      <span>{JSON.stringify(hardat.contracts.erc20.abi)}</span>
    </div>
  );
}
