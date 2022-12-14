import React from 'react'
import Pizza from '../Componentes/Pizza'
import pizzas from '../MenuPizzas'
export default function PantallaInicio() {
    return (
        <div>
            <div className='row'>
                {pizzas.map(pizza=>{
                    return <div className='col-md-4'>
                        <div>
                            <Pizza pizza={pizza}/>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}
