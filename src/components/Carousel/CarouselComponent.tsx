import React from 'react'
import Carousel from 'react-elastic-carousel'           // Não esqueça de instalar a Dependencia
import sacola from '../../assets/imagens/sacola.png';
/*
    Para fazer importações de imagens Locais, vc deve ir no arquivo react-app-env.d.ts, que está na Raíz do Projeto
    e add o seguinte código:
    declare module '*.png'
    declare module '*.jpg'
    Esses códigos "tipam" e liberam o uso de imgs quando usamos Typescript
*/

// import arcane from '../../assets/images/arcane.jpg'  // Importação de imagens Locais

import './CarouselComponent.css'

function CarouselComponent() {
    var items = [
        { img: "https://imgur.com/c02vBYk.png"  },
        { img: "https://imgur.com/GlGQ1q1.png" },
        { img: "https://imgur.com/vcxu8ne.png" },
        { img: "https://imgur.com/ebICWWq.png" }
        // { img: { sacola } } // 
    ]

    return (
        <Carousel isRTL={false}>
            {
                items.map(item => (
                    <>
                        <img src={item.img} alt="Item" />
                    </>
                ))
            }
        </Carousel>
    )
}

/*  Estruturas de Funções Padrões
    function (nome){
        return (
            <h1>Olá + nome</h1>
        )
    }
    Estruturas de Arrow Functions
    
    (nome) => ( <h1>Olá + nome</h1> )
*/

export default CarouselComponent