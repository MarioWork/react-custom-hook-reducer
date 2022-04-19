import useCalc from "./use-calc";
import { OPERATIONS } from "./operations-type";

const App = () => {
  const { result, operation, changeN1, changeN2, changeOperation } = useCalc();

  return (
    <>
      <input type="number" onChange={(e) => changeN1(e.target.value)} />
      <input type="number" onChange={(e) => changeN2(e.target.value)} />
      <select
        value={operation}
        onChange={(e) => changeOperation(e.target.value)}
      >
        <option value={OPERATIONS.SUM}>Add</option>
        <option value={OPERATIONS.SUBTRACT}>Subtract</option>
      </select>
      result = {result}
    </>
  );
};

export default App;
