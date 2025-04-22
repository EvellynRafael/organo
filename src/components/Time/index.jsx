import React from 'react'
import Colaborador from '../Colaborador';
import './Time.css';


const Time = (props) => {

    const styles = { 
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${props.imagemFundo})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',    
        backgroundColor: props.corSecundaria,
        borderColor: props.corPrimaria,
    }
    
    return (
         <section className='time' style={styles}>
            <h3 style={{ borderColor: props.corPrimaria, color:props.corPrimaria }}>{props.nome}</h3>
            <div className='colaboradores'>
                {props.colaboradores.map( colaborador => 
                <Colaborador 
                corDeFundo={props.corPrimaria}
                key={colaborador.nome}
                nome={colaborador.nome} 
                cargo={colaborador.cargo} 
                imagem={colaborador.imagem}
                /> )}
            </div>
        </section> 
       
    )
}

export default Time;