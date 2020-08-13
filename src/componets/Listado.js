import React from 'react';
import Gasto from './Gasto';

const Listado = ({gastos}) => {
    return ( <div className="gastos-realizados">
                <h2>Listado de gastos</h2>
                {gastos.map(gasto=>(<div>
                                    <Gasto
                                         key={gasto.id}
                                         gasto={gasto}
                                    />
                            </div>))
                }
            </div> );
}
 
export default Listado;