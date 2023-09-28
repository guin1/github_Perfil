import { useState } from "react";

import Perfil from "./components/Perfil";
// import Formulario from "./components/Formulario";
import Reposlist from "./components/Reposlist";

function App() {
  const [setFormularioVisivel, setFormularioEstaVisivel] = useState(true);
  const [nomeUsuario, setNomeUsuario] = useState('');

   return (
    <>
    <input type="text" onBlur={(e) => setNomeUsuario(e.target.value)} />

     {nomeUsuario.length > 4 && (
       <>
        <Perfil nomeUsuario={nomeUsuario} />
        <Reposlist nomeUsuario={nomeUsuario} />
       
       </>
     )}

    {setFormularioEstaVisivel && (
      <Formulario />
    )}

     <button onClick={() => setFormularioEstaVisivel(!setFormularioEstaVisivel)} type="toggle"></button>
    </>
  )
}

export default App
