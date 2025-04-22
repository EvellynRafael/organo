import { useState } from 'react';
import Banner from './components/Banner';
import Formulario from './components/Formulario';
import Time from './components/Time';
import times from './data/db';
import Rodape from './components/Rodape';


function App() {

  const [colaboradores, setColaboradores] = useState([]);


  const aoNovoColaboradorAdicionado = (colaborador) => {
    debugger
    setColaboradores([...colaboradores, colaborador]);
};


  return (
    <div>
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={aoNovoColaboradorAdicionado} />

      {times.map(time =>
        <Time
          key={time.nome}
          nome={time.nome}
          corPrimaria={time.corPrimaria}
          imagemFundo={time.imagemFundo}
          colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
        />
      )} 

      <Rodape />
    </div>
  )
}

export default App
