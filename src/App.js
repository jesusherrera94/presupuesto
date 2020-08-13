import React, {useState, useEffect} from 'react';
import Pregunta from './componets/pregunta';
import Formulario from './componets/Formulario';
import Listado from './componets/Listado';
import ControlPresupuesto from './componets/ControlPresupuesto';


function App() {
  //definir el state
  const [presupuesto, guardarPresupuesto] = useState(0);
  const [restante, guardarRestante] = useState(0);
  const [mostrarPregunta, actualizarPregunta] = useState(true);
  const [gastos, guardarGastos] = useState([]);
  const [gasto, guardarGasto] = useState({});
  const [crearGasto, guardarCrearGasto] = useState(false)
  //useEfect que actualiza el restante
  useEffect(()=>{
    if(crearGasto){
    //agrega el nuevo presupuesto
      guardarGastos([
      ...gastos,
        gasto
    ])

    //resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    guardarRestante(presupuestoRestante);

    //resetear a false
    guardarCrearGasto(false)
  }

  },[gasto,crearGasto,gastos,restante])

  return (
    <div className="container">
      <header>
        <h1>Gasto Semanal</h1>
        <div className="contenido-principal contenido">
          {mostrarPregunta?
                  (<Pregunta
                           guardarPresupuesto={guardarPresupuesto}
                           guardarRestante = {guardarRestante}
                           actualizarPregunta={actualizarPregunta}
                    />):(<div className="row">
                            <div className="one-half column">
                                <Formulario 
                                guardarGasto = {guardarGasto}
                                guardarCrearGasto = {guardarCrearGasto}
                                />
                              </div>
                              <div className="one-half column">
                                <Listado
                                  gastos={gastos}
                                />
                                <ControlPresupuesto
                                  presupuesto={presupuesto}
                                  restante={restante}
                                />
                              </div>
                          </div>)
                          }
        </div>
      </header>
    </div>
  );
}

export default App;
