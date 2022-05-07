import { Button, sample } from "ui";

export default function Web() {
  return (
    <div>
      <h1>Web</h1>
      <Button />
      <span>{JSON.stringify(sample)}</span>
    </div>
  );
}
