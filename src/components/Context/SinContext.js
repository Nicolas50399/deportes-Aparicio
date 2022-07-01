import { useState } from "react";

export const AbuelaContainer = () => {
  const [chisme, setChisme] = useState("no hay chisme");
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1em",
      }}
    >
      <button onClick={() => setChisme("la abuela hizo milanesas")}>
        Contar chisme
      </button>
      <Hija chisme={chisme} />
    </div>
  );
};

const Hija = (props) => {
  return (
    <div>
      <h2>Mensaje que recibio la nieta</h2>
      <Nieta {...props} />
    </div>
  );
};

const Nieta = ({ chisme }) => <h4>{chisme}</h4>;