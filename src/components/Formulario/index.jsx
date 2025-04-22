import { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css';


const Formulario = (props) => {

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');	

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log("Dados do colaborador:", nome, cargo, imagem, time);
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        });
    };

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome de Jogador" 
                    placeholder="Digite seu player name"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true}  
                    label="Rank" 
                    placeholder="Digite seu rank"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)} 
                />
                <CampoTexto 
                    obrigatorio={true}  
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)} 
                />
                <ListaSuspensa 
                    obrigatorio={true}  
                    label="Time" 
                    itens={props.times} 
                    aoAlterado={valor => setTime(valor)}
                />
                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    )
}

export default Formulario;