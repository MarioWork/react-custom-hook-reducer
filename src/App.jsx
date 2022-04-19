import { useEffect, useState } from "react";
import useCalc from "./use-calc";

const App = () => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);

  const { result, sum } = useCalc();

  useEffect(() => {
    sum(n1, n2);
  }, [n1, n2, sum]);

  return (
    <>
      <input type="number" onChange={(e) => setN1(e.target.value)} />
      <input type="number" onChange={(e) => setN2(e.target.value)} />
      {result.result}
    </>
  );
};

export default App;
