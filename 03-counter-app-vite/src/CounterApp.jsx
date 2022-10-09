

import { useState } from 'react';
//Importamos los PropTypes para que funcione todo
import { PropTypes } from "prop-types";

//Exportamos CounterApp, todo lo que esté dentro del return será mostrado o devuelto al cliente.
//Para usar algo devuelto del componente padre hay que desestructurarlo.
export const CounterApp = ({ value }) => {

    const [ counter, setCounter ] = useState( value )

    const handleAdd = () => {
        
        setCounter( counter + 1 )
        // setCounter( (c) => c + 1 )

    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>

            <button onClick={ handleAdd } >
                +1
            </button>

        </>

    )

}

//Asignamos de que tipo es cada variable y si es o no obligatoria.
CounterApp.propTypes = {
    value : PropTypes.number
}

//Asignamos valor por defecto.
CounterApp.defaultProps = {

    value : 'Sin valor asignado'

}