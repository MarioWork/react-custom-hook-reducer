import useCalc from "./use-calc";

const App = () => {
  const result = useCalc(5, 5, "-");
  console.log(result);
};

export default App;
