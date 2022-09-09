import React, { useState, useEffect } from "react"
import { apiConexao } from "../../utils/apiconexao.jsx"
import './Produtos.css'
export function Produtos(){
    const [data, setData] = useState([])
    const [firtsLoad,setFirstLoad] = useState(true)

    const item = async() => {
        const response = await apiConexao.get()
        setData([...data, ...response?.data.products])
        console.log(response?.data.products)
    }

    useEffect(() => {
        item()
    }, [])

    const loadProducts = () =>{
        
    }


    return (
        
        <div className="main">
           {data.map((produto) =>{
                return(
                    <section className="principal">
                        <div className="card">
                            <div className="cartao">
                                <div className="produtos-card">
                                    <img src={produto.image}/>
                                </div>
                                <div className="produtos-card">
                                    <strong><p>{produto.name}</p></strong>
                                    <p>{produto.description}</p>
                                </div>
                                <div className="produtos-card">
                                    <s id="precoAnterios">De R${produto.oldPrice}</s>
                                    <p id="precoAtual">Por R${produto.price}</p>
                                    <button>Comprar</button>
                                </div>
                            </div>
                        </div>
                        
                    </section>
                )  
            })
        }
        <div className="box-btn">
            <button onClick={item}>Ver mais</button>
        </div>
        </div>
    )
}