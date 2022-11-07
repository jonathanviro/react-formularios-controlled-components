import { useState } from 'react'

const App = () => { 
  const [valor, setearValue] = useState({
      normal: '',
      areaTexto: '',
      select: '',
      check: false,
      estadoRadio: '',
  });

  const handleChange = (e) => {
    //forma 1 para que los valores del objeto literal no se pierdan
    // setearValue({ ...valor, [e.target.name]: e.target.value })

    //forma 2: pasar el estado que continie useState
    setearValue((estado) => ({
        ...estado,
      [e.target.name]: e.target.type === 'checkbox'
        ? e.target.checked
        : e.target.value
    }));

  }

  console.log(valor)

  return (
      <div>
          {valor.length < 5 ? <span>Longitud minima de 5</span> : null}
          <input type="text" name="normal" value={valor.normal} onChange={handleChange} />
          
          <textarea name="areaTexto" value={valor.areaTexto} onChange={handleChange} />
          
          <select name="select" value={valor.select} onChange={handleChange}>
              <option value=""> --Seleccione-- </option>
              <option value="chanchofeliz">Chancho Feliz</option>
              <option value="chanchitofeliz">Chanchito Feliz</option>
              <option value="chanchitotriste">Chanchito Triste</option>
          </select>
          
          <input type="checkbox" name="check" checked={valor.check} onChange={handleChange}/>
      
            
          {/* <div onChange={handleChange} >
            <label>Chancho</label>
            <input type="radio" name="estadoRadio" value="feliz"/>Feliz
            <input type="radio" name="estadoRadio" value="triste"/>Triste
            <input type="radio" name="estadoRadio" value="enojado"/>enojado
          </div> */}

          <div>
            <label>Chancho</label>
            <input onChange={handleChange} type="radio" name="estadoRadio" value="feliz" checked={ valor.estadoRadio === 'feliz'} />Feliz
            <input onChange={handleChange} type="radio" name="estadoRadio" value="triste" checked={ valor.estadoRadio === 'triste'} />Triste
            <input onChange={handleChange} type="radio" name="estadoRadio" value="enojado" checked={ valor.estadoRadio === 'enojado'} />enojado
          </div>
      
    </div>
  );
}

export default App