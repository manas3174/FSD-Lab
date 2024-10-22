import React from 'react'
import { useState } from 'react'

const Calculator = () => {
    const [display, setDisplay] = useState('0'); 
    const handleSetDisplay = (value)=>{
        if(display === '0'){
            setDisplay(value)
        }
        else setDisplay((prev) => prev + value)
    } 

    const handleClearValues = () =>{
        setDisplay((prev) => '')
    }

    const handleEval = () => {
        try {
            const result = eval(display)
            setDisplay((String(result)))
        } catch (error) {
            setDisplay("error")
        }
    }

    const deleteValue = () => {
        if(display !== 0) setDisplay(display.slice(0, -1))
    }

 
  return (
    <>
        <div className="calculator">
            <div className="display">{display || 0}</div>
            <div className="buttons">
                <button class="darkgrey" onClick={() => handleClearValues()}>AC</button>
                <button class="darkgrey" onClick={() => deleteValue('DEL')}>DEL</button>
                <button class="darkgrey" onClick={() => handleSetDisplay('%')}>MOD</button>
                <button class="orange" onClick={() => handleSetDisplay('/')}>÷</button>
                <button class="grey" onClick={() => handleSetDisplay('1')}>1</button>
                <button class="grey" onClick={() => handleSetDisplay('2')}>2</button>
                <button class="grey" onClick={() => handleSetDisplay('3')}>3</button>
                <button class="orange" onClick={() => handleSetDisplay('+')}>+</button>
                <button class="grey" onClick={() => handleSetDisplay('4')}>4</button>
                <button class="grey" onClick={() => handleSetDisplay('5')}>5</button>
                <button class="grey" onClick={() => handleSetDisplay('6')}>6</button>
                <button class="orange" onClick={() => handleSetDisplay('-')}>−</button>
                <button class="grey" onClick={() => handleSetDisplay('7')}>7</button>
                <button class="grey" onClick={() => handleSetDisplay('8')}>8</button>
                <button class="grey" onClick={() => handleSetDisplay('9')}>9</button>
                <button class="orange" onClick={() => handleSetDisplay('*')}>x</button>
                <button class="grey" onClick={() => handleSetDisplay('0')}>0</button>
                <button class="grey" onClick={() => handleSetDisplay('.')}>.</button>
                <button class="grey" onClick={() => handleSetDisplay('00')}>00</button>
                <button class="orange" onClick={() => handleEval()}>=</button>
            </div>
        </div>
    </>
  )
}

export default Calculator