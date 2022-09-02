import React, { useState } from 'react'
import "./Calculator.css"

const Calculator = () => {
  const [result,setResult] = useState("")
  const handleClick = (e) => {
    setResult(result.concat(e.target.name))
  }

  const calc = () => {
   
    try{
      setResult(eval(result).toString())
    } catch(error){
      setResult("Синтаксическая ошибка")
    }
  }
  const clear = () => {
    setResult("")
  }
  return (
    <div className="app_calculator">
      <h1 className="title">React app calculator</h1>
        <div className='calculator'>
          <div className="display">{result}</div>
          <div className="keyboard">
              <button onClick={handleClick} name='+'>+</button>
              <button onClick={handleClick} name='-'>-</button>
              <button onClick={handleClick} name='*'>*</button>
              <button onClick={handleClick} name='/'>/</button>
              <button onClick={handleClick} name='9'>9</button>
              <button onClick={handleClick} name='8'>8</button>
              <button onClick={handleClick} name='7'>7</button>
              <button onClick={handleClick} name='6'>6</button>
              <button onClick={handleClick} name='5'>5</button>
              <button onClick={handleClick} name='4'>4</button>
              <button onClick={handleClick} name='3'>3</button>
              <button onClick={handleClick} name='2'>2</button>
              <button onClick={handleClick} name='1'>1</button>
              <button onClick={handleClick} name='0'>0</button>
              <button onClick={calc} id="res" name='='>=</button>
              <button onClick={clear} id="clear">C</button>
          </div>
      </div>
    </div>
  )
}

export default Calculator