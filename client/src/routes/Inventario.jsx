import React, { useState } from 'react';
import '../styles/inventario.css';

const Inventario = () => { 

    const [mesa, setMesa] = useState({
        tipo: 'mesa',
        mesas: "mesa-rectangular",
        stock: 0
    });
    const handleSetMesa = (e) => {
        setMesa(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };
    const handleInvSubmit = async (e) => {    // Se cambiara a un submit general
        e.preventDefault();
        try {
            const inv = [mesa, silla, mantel, cubreMantel];
            const res = await axios.post("http://localhost:8000/inventario", { inv });
            if (res.status === 200) {
                setMesa({ tipo: 'mesa', mesas: "mesa-rectangular", stock: 0 });
                setSilla({ tipo: 'silla', sillas: "silla-negra", stock: 0 });
                setMantel({ tipo: 'mantel', manteles: "liso", stock: 0, colorManteles: "blanco" });
                setCubreMantel({ tipo: 'cubreMantel', cubreManteles: "liso", stock: 0, colorCubreManteles: "blanco" });

                const cantMesasInput = document.getElementById("cantidad-mesas");
                const cantSillasInput = document.getElementById("cantidad-sillas");
                const cantMantelesInput = document.getElementById("cantidad-manteles");
                const cantCubreMantelesInput = document.getElementById("cantidad-cubre-manteles");

                cantMesasInput.value = "";
                cantSillasInput.value = "";
                cantMantelesInput.value = "";
                cantCubreMantelesInput.value = "";
            } else { console.log("Tristin"); }
        }
        catch (err) {
            console.log({ err: err.message });
        }
    };

    const [silla, setSilla] = useState({
        tipo: 'silla',
        sillas: "silla-negra",
        stock: 0
    });
    const handleSetSilla = (e) => {
        setSilla(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [mantel, setMantel] = useState({
        tipo: 'mantel',
        manteles: "liso",
        stock: 0,
        colorManteles: "blanco"
    });
    const handleSetMantel = (e) => {
        setMantel(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const [cubreMantel, setCubreMantel] = useState({
        tipo: 'cubreMantel',
        cubreManteles: "liso",
        stock: 0,
        colorCubreManteles: "blanco"
    });
    const handleSetCubreMantel = (e) => {
        setCubreMantel(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    /* Colores:
        blanco
        negro
        dorado
        plata
        cielo
        marino
        rojo
        naranja
        morado
    */

    const productos = ["Mesa", "Silla", "Mantel",
        "Color Mantel", "Cubre Mantel", "Color Cubre Mantel"];

    const selectsBunch = [
        <select name="mesas" id="mesas" onChange={handleSetMesa}>
            <option value="mesa-rectangular" selected>Rectangular</option>
            <option value="mesa-redonda">Redonda</option>
        </select>,
        <select name="sillas" id="sillas" onChange={handleSetSilla}>
            <option value="silla-negra" selected>Negra</option>
            <option value="silla-cromada">Cromada</option>
        </select>,
        <select name="manteles" id="manteles" onChange={handleSetMantel}>
            <option value="liso" selected>Liso</option>
            <option value="textura">Textura</option>
        </select>,
        <select name="colorManteles" id="color-manteles" onChange={handleSetMantel}>
            <option value="blanco" selected>Blanco</option>
            <option value="azul-cielo">Azul</option>
            <option value="rojo">Rojo</option>
        </select>,
        <select name="cubreManteles" id="cubre-manteles" onChange={handleSetCubreMantel}>
            <option value="liso" selected>Liso</option>
            <option value="textura">Textura</option>
        </select>,
        <select name="colorCubreManteles" id="color-cubre-manteles" onChange={handleSetCubreMantel}>
            <option value="blanco" selected>Blanco</option>
            <option value="azul-cielo">Azul</option>
            <option value="rojo">Rojo</option>
        </select>
    ];

    const inputsBunch = [
        <input type="number" id='cantidad-mesas' name='stock' min={0} step={1} onChange={handleSetMesa} />,
        <input type="number" id='cantidad-sillas' name='stock' min={1} step={1} onChange={handleSetSilla} />,
        <input type="number" id='cantidad-manteles' name='stock' min={1} step={1} onChange={handleSetMantel} />,
        null,
        <input type="number" id='cantidad-cubre-manteles' name='stock' min={1} step={1} onChange={handleSetCubreMantel} />,
        null
    ];

    return (
        <div className='inventario-container'>
            <h1>Inventario</h1>
            <div className="inv-table">
                <table>
                    <thead>
                        <tr>
                            <th>Producto</th>
                            <th>Tipo</th>
                            <th>Cantidad</th>
                        </tr>
                    </thead>
                    <tbody>
                        {Array.isArray(productos) && productos.map((item, index) => (
                            <tr key={index}>
                                <td>{item}</td>
                                <td> {selectsBunch[index]} </td>
                                <td> {inputsBunch[index]} </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <button onClick={handleInvSubmit}>Agregar Inv</button>
            </div>
            <div className="inv-bottom-container">
                <button>New Object</button>
                <textarea name="test" id="test" disabled></textarea>
            </div>
        </div>
    );
};

export default Inventario;