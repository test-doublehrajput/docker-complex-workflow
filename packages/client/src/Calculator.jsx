import axios from "axios";
import { useEffect, useState } from "react";

/**
 * @type {import("react").FC<{}>}
 */
const Calculator = () => {
  const [state, setState] = useState({
    seenIndexes: [],
    values: {},
    index: "",
  });

  const fetchValues = async () => axios.get("/api/values/current").then((res) => res.data);
  const fetchIndexes = async () => axios.get("/api/values/all").then((res) => res.data);

  useEffect(() => {
    const setValues = async () => {
      try {
        const values = await fetchValues();
        const seenIndexes = await fetchIndexes();
        setState((prev) => ({ ...prev, values, seenIndexes }));
      } catch (error) {
        console.warn(error.response);
      }
    };

    setValues();
  }, []);

  /**
   * @param {SubmitEvent} e
   */
  const submitHandler = async (e) => {
    e.preventDefault();
    await axios.post("/api/values", { index: state.index });
    setState((prev) => ({ ...prev, index: "" }));
  };

  /**
   * @param {import("react").ChangeEvent<HTMLInputElement>} e
   */
  const changeHandler = (e) => {
    setState((prev) => ({ ...prev, index: e.target.value }));
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>Enter your index:</label>
        <input value={state.index} onChange={changeHandler} />
        <button type="submit">Submit</button>
      </form>
      <h3>Indexes I have seen:</h3>

      {state.seenIndexes.map(({ number }) => number).join(", ")}

      <h3>Calculated Indexes:</h3>

      {Object.values(state.values).map((key) => (
        <div key={key}>
          For index {key} calculated values is {state.values[key]}
        </div>
      ))}
    </div>
  );
};

export default Calculator;
