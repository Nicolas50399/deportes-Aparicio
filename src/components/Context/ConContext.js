import { createContext, useContext, useState } from "react";

//PASO 1: Creo el contexto
export const ChismeContext = createContext();

//PASO 2: Disponibilizo
const ChismeProvider = ({ children }) => {
  const [chisme, setChisme] = useState("No hay chisme todavia");

  const contarChisme = (nuevoChisme) => setChisme(nuevoChisme);

  return (
    <ChismeContext.Provider value={{ chisme, contarChisme }}>
      {children}
    </ChismeContext.Provider>
  );
};

//Mi analogo a App.js
export const ConContext = () => {
  return (
    <ChismeProvider>
      <AbuelaContainer />
    </ChismeProvider>
  );
};

///Paso 4: USO el contexto
const AbuelaContainer = () => {
  const { contarChisme } = useContext(ChismeContext);

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        padding: "1em",
      }}
    >
      <button onClick={() => contarChisme("La abuela hizo milanesas")}>
        Contar chisme
      </button>
      <Hija />
    </div>
  );
};

const Hija = () => {
  return (
    <div>
      <h3>Mensaje que recibio la nieta</h3>
      <Nieta />
    </div>
  );
};

const Nieta = () => {
  const { chisme } = useContext(ChismeContext);
  return <h4>{chisme}</h4>;
};