import { useState } from 'react'
import './App.css';


function App() {
  const [value, setValue] = useState('')
  return (
    <>
      <div className='title'>
        <h1 className='heading'>Calculator</h1>
      </div>
      <div className="calculator">
        <form action="">
          <div className="input-field">
          <input type="text" value={value}></input>
          </div>
          <div className="input-btn">
            <input className="c-btn" type="button" value="C" onClick={e => setValue('')}></input>
            <input className="plus-btn" type="button" value="*" onClick={e => setValue(value + e.target.value)}></input>
            <input className="plus-btn" type="button" value="/" onClick={e => setValue(value + e.target.value)}></input>
            <input className="delete-btn" type="button" value="Del" onClick={e => setValue(value.slice(0 , -1))}></input>
          </div>
          <div className="input-btn">
            <input type="button" value="7" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="8" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="9" onClick={e => setValue(value + e.target.value)}></input>
            <input className="plus-btn" type="button" value="-" onClick={e => setValue(value + e.target.value)}></input>
          </div>
          <div className="input-btn">
            <input type="button" value="4" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="5" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="6" onClick={e => setValue(value + e.target.value)}></input>
            <input className="plus-btn" type="button" value="+" onClick={e => setValue(value + e.target.value)}></input>
          </div>
          <div className="input-btn">
            <input type="button" value="1" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="2" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="3" onClick={e => setValue(value + e.target.value)}></input>
            <input className="plus-btn" type="button" value="." onClick={e => setValue(value + e.target.value)}></input>
          </div>
          <div className="input-btn">
            <input type="button" value="00" onClick={e => setValue(value + e.target.value)}></input>
            <input type="button" value="0" onClick={e => setValue(value + e.target.value)}></input>
            <input className="equal-btn" type="button" value="=" onClick={e => setValue(eval(value))}></input>
            
          </div>
        </form>
      </div>
    </>
  );
}

export default App;
