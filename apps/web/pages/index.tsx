import { Button, sample, TLinkType } from "ui";

const type: TLinkType = "address";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />

      <h2>Sample</h2>
      <span>{JSON.stringify(sample)}</span>

      <h2>type</h2>
      <span>{type}</span>
    </div>
  );
}
