import React, { useState } from "react";
import Pokemon from "./components/pokemon";

function App() {
  const [pId, setPid] = useState(1);

  const textOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPid(Number(e.target.value));
  };
  return (
    <div className="App">
      <input
        type="number"
        name="pokemonId"
        id="pokemonId"
        value={pId}
        onChange={textOnchange}
      />
      <Pokemon pokemonId={pId} />
    </div>
  );
}

export default App;
