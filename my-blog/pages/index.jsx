import React from "react";
import { useState } from "react";
import { Button } from "../components/Button/Button";
import { Text } from "../components/Text/Text";
export default function IndexPage() {
  const [state, setState] = useState(0);

  function handleClick() {
    setState(state + 1);
  }
  return (
    <main>
      <Button onClick={handleClick}>Click</Button>
      <br />
      <Text> Count of clicks</Text>
      <span>{state}</span>
    </main>
  );
}
