import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';
const Formulario = ({agregarNuevoGasto}) => {
    const [nombre, guardarNombre] = useState('');
    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    const agregarGasto = e =>{
        e.preventDefault();
        //validaciones
        if(cantidad <1|| isNaN(cantidad)||nombre.trim()===''){
            guardarError(true);
            return;
        }

        //guardar el gasto
        const gasto = {
            nombre,
            cantidad,
            id:shortid.generate()
        }

        //añadir a la listas de gastos
        agregarNuevoGasto(gasto);
        //resetar nombre
        guardarNombre('');
        guardarCantidad(0)
    }

    return ( <form 
                   onSubmit={agregarGasto} 
             >
                <h2>Agrega tus gastos aquí</h2>
                {error?<Error mensaje="Ambos campos son obligatorios o presupuesto incorrectos" /> :null}
                <label>Nombre del gasto</label>
                <input 
                    type="text"
                    className="u-full-width"
                    value = {nombre}
                    onChange={e=>guardarNombre(e.target.value)}
                    placeholder="Pago x"
                />
                <label>Cantidad del gasto</label>
                <input 
                    type="number"
                    className="u-full-width"
                    min="0"
                    value={cantidad}
                    onChange={e=>guardarCantidad(parseInt(e.target.value,10))}
                    placeholder="100"

                />
                <input 
                    type="submit"
                    className="button-primary u-full-width"
                    value="Añadir gasto"
                />
            </form> );
}
 
export default Formulario;