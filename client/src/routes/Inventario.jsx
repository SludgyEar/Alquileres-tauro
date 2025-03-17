import React, { useState } from 'react';
import '../styles/inventario.css';

const Inventario = () => {
    const [inv, setInv] = useState({});
    const [cantidades, setCantidades] = useState({});
    const handleSetInv = (e) => {
        setInv(prev => ({ ...prev, [e.target.name]: e.target.value }));
    };

    return (
        <div className='inventario-container'>
            <div className="left-panel-inv">
                <form className='inv-form'>
                    <label htmlFor="mesa-inv">Tipo de Mesa:</label>
                    <div className="input-wrapper">
                        <select id="mesa-inv" name='mesa' >
                            <option selected>Tipo de mesa</option>
                            <option value="mesa-rectangular">Rectangular</option>
                            <option value="mesa-redonda">Redonda</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="mesa" name='mesa-cantidad' />
                    </div>

                    <label className="inv-label" htmlFor="silla">Tipo de Silla:</label>
                    <div className="input-wrapper">
                        <select className="sillas-select" id="silla" name='silla ' >
                            <option selected>Tipo Silla</option>
                            <option value="silla-negra">Silla Negra</option>
                            <option value="silla-cromada">Silla Cromada</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="silla" name='silla-cantidad' />
                    </div>

                    <label htmlFor="mantel">Tipo de Mantel:</label>
                    <div className="input-wrapper">
                        <select className="manteles-select" name="mantel" id="mantel" >
                            <option selected>Tipo mantel</option>
                            <option value="liso">Liso</option>
                            <option value="textura">Textura</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="mantel" name='mantel-cantidad' />
                    </div>

                    <label htmlFor="colorMantel">Color de Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="colorMantel" id="colorMantel" >
                            <option selected>Color</option>
                            <option value="blanco">Blanco</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                        </select>
                        {/* <input type="text" className='cantidad' htmlFor="colorMantel" name='colorMantel-cantidad' /> */}
                    </div>

                    <label htmlFor="colorMantel">Cubre Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="cubreMante" id="cubreMantel" >
                            <option selected>Tipo</option>
                            <option value="liso">Liso</option>
                            <option value="detalle">Detalle</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="cubreMantel" name='cubreMantel-cantidad' />
                    </div>

                    <label htmlFor="colorMantel">Color de Cubre Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="colorMantel" id="colorMantel" >
                            <option selected>Color</option>
                            <option value="blanco">Blanco</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                        </select>
                        {/* <input type="text" className='cantidad' htmlFor="colorMantel" name='colorMantel-cantidad' /> */}
                    </div>

                    <div className="input-wrapper">
                        <button id='cargar-inv' type='submit'>Cargar</button>
                        <button id="reset-inv" type='reset'>Limpiar</button>
                    </div>

                </form>
            </div>
            <div className="right-panel-inv">
                <div className="sh-resumen">
                    <textarea name="resumen-inv" readOnly />
                    <div className='total-wrapper'>
                        <h2 id='total'>Total: $</h2>
                        <label htmlFor="total"></label>
                    </div>
                </div>
                <div className="input-wrapper">
                    <button id='cargar-inv' type='submit' >Cargar</button>
                    <button id="reset-inv" type='reset' >Limpiar</button>
                </div>
            </div>
        </div>
    );
};

export default Inventario;