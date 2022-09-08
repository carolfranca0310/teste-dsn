import React, { useState, useEffect } from "react"
import { apiConexao } from "../../utils/apiconexao.jsx"

export function Produtos(){
    const [prod, setP] = useState([])

    const item = async() => {
        const response = await apiConexao.get()
        setP([...prod, ...response?.prod.products])
        console.log(response?.prod.products)
    }

    useEffect(() => {
        item()
    }, [])


    return (
        <div className="main">
            <div>
                <image/>
            <strong><p>a</p></strong>
            <p>a</p>
            <s>a</s>
            <p>a</p>
            <p>a</p>
            <button>a</button>
            </div>
        </div>
    )
}