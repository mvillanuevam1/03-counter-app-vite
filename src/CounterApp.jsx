import { useState } from 'react'
import PropTypes from "prop-types";



export const CounterApp = (  {value}  ) => {


    const [ counter, setCounter ] = useState( value );


    const handleAdd = () => {
        setCounter( counter + 1 )
    }

    const handleSub = () => {
        setCounter( counter - 1 ) 
    }

    const handleReset = () => {
        setCounter( value ) 
    }

    return (
        <>
            <h1>CounterApp</h1>
            <button onClick={ handleAdd } >+1</button>
            <button onClick={ handleSub } >-1</button>
            <button aria-label="btn-reset" onClick={ handleReset } >Reset</button>
            <h2> { counter } </h2>
        </>
    );

}



CounterApp.propTypes = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 'No hay un valor inicial'
}

