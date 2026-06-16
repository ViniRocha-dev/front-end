import { useState, useEffect } from "react";

function Cadastro() {

  const [nome, setNome] = useState("");
  const [versao, setVersao] = useState("");
  const [categoria, setCategoria] = useState("");
  const [busca, setBusca] = useState("");
  const [indiceEdicao, setIndiceEdicao] = useState(null);
 const [mods, setMods] = useState(() => {
  const modsSalvos = localStorage.getItem("mods");

  return modsSalvos ? JSON.parse(modsSalvos) : [];
});

  useEffect(() => {
    const modsSalvos =
      localStorage.getItem("mods");

    if (modsSalvos) {
      setMods(JSON.parse(modsSalvos));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "mods",
      JSON.stringify(mods)
    );
  }, [mods]);

  function cadastrarMod(event) {
    event.preventDefault();

const novoMod = {
  nome,
  versao,
  categoria,
};

if (indiceEdicao !== null) {
  const novaLista = [...mods];

  novaLista[indiceEdicao] = novoMod;

  setMods(novaLista);

  setIndiceEdicao(null);
} else {
  setMods([...mods, novoMod]);
}

    setNome("");
    setVersao("");
    setCategoria("");
  }
  function excluirMod(index) {
  const novaLista = mods.filter(
    (_, i) => i !== index
  );

  setMods(novaLista);
}
function editarMod(index) {
  setNome(mods[index].nome);
  setVersao(mods[index].versao);
  setCategoria(mods[index].categoria);

  setIndiceEdicao(index);
}
const modsFiltrados = mods.filter((mod) =>
  mod.nome.toLowerCase().includes(
    busca.toLowerCase()
  )
);
  return (
    <div>
      <h1>Cadastro de Mods</h1>

      <form onSubmit={cadastrarMod}>
        <div>
          <label>Nome do Mod:</label>
          <br />
          <input
            type="text"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Versão Minecraft:</label>
          <br />
          <input
            type="text"
            value={versao}
            onChange={(e) => setVersao(e.target.value)}
          />
        </div>

        <br />

        <div>
          <label>Categoria:</label>
          <br />
          <input
            type="text"
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          />
        </div>

        <br />

       <button type="submit">
  {indiceEdicao !== null
    ? "Salvar Alterações"
    : "Cadastrar"}
</button>
      </form>

      <hr />
<input
  type="text"
  placeholder="Pesquisar mod..."
  value={busca}
  onChange={(e) => setBusca(e.target.value)}
/>

<br />
<br />
      <h2>Mods Cadastrados</h2>

      {modsFiltrados.map((mod, index) => (
  <div key={index} className="mod-card">
    <h3>{mod.nome}</h3>

    <p>Versão: {mod.versao}</p>

    <p>Categoria: {mod.categoria}</p>
<button
  onClick={() => editarMod(index)}
>
  Editar
</button>

{" "}

    <button
      onClick={() => excluirMod(index)}
    >
      Excluir
    </button>

    <hr />
  </div>
))}
    </div>
  );
}

export default Cadastro;