import React, {useState} from 'react';
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

  //agregar un nuevo gasto
  const agregarNuevoGasto = gasto =>{
    guardarGastos([
      ...gastos,
        gasto
    ])
  }

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
                                agregarNuevoGasto = {agregarNuevoGasto}
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
