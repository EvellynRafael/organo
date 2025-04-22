import React, { useState } from 'react'
import './CampoTexto.css'

const CampoTexto = (props) => {

    const placeholderModificado = `${props.placeholder}...` //templatestrings

    const aoDigitado = (event) => {
        props.aoAlterado(event.target.value);
    }

    return(
        <div className='campo-texto'>
            <label>
                {props.label}
            </label>
            <input 
            value={props.valor} 
            onChange={aoDigitado} 
            required={props.obrigatorio} 
            placeholder={placeholderModificado}  />
        </div>
    )
}

export default CampoTexto