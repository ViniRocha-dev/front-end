import { useEffect, useState } from "react";

function Populares() {
  const [mods, setMods] = useState([]);

  useEffect(() => {
    fetch(
      "https://api.modrinth.com/v2/search?query=create"
    )
      .then((resposta) => resposta.json())
      .then((dados) => {
        setMods(dados.hits);
      });
  }, []);

  return (
    <div>
      <h1>Mods Populares</h1>

      {mods.map((mod) => (
       <div
  key={mod.project_id}
  className="mod-card"
>
          <h3>{mod.title}</h3>

          <p>{mod.description}</p>

          <hr />
        </div>
      ))}
    </div>
  );
}

export default Populares;
