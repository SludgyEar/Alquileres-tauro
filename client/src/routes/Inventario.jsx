import React, { useState } from 'react';
import '../styles/inventario.css';

const Inventario = () => { 

    const [mesa, setMesa] = useState({});
    const handleSetTipoMesa = (e) => {
        setMesa(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetCantidadMesa = (e) => {
        setMesa(prev => ({ prev, [e.target.name]: e.target.value }));
    };

    const [silla, setSilla] = useState({});
    const handleSetTipoSilla = (e) => {
        setSilla(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetCantidadSilla = (e) => {
        setSilla(prev => ({ prev, [e.target.name]: e.target.value }));
    };

    const [mantel, setMantel] = useState({});
    const handleSetTipoMantel = (e) => {
        setMantel(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetCantidadMantel = (e) => {
        setMantel(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetColorMantel = (e) => {
        setMantel(prev => ({ prev, [e.target.name]: e.target.value }));
    };

    const [cubre, setCubre] = useState({});
    const handleSetTipoCubre = (e) => {
        setCubre(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetCantidadCubre = (e) => {
        setCubre(prev => ({ prev, [e.target.name]: e.target.value }));
    };
    const handleSetColorCubre = (e) => {
        setCubre(prev => ({ prev, [e.target.name]: e.target}));
    };

    const handleResumeInv = (e) => {    // Función que agrupa el contenido de tres arreglos: inv, piezas y color{color mantel, color cubre mantel}
        e.preventDefault();
        try {
            // inv es un objeto con los valores seleccionados: mesa, silla, mantel, colorMantel
            // piezas es un objeto con las cantidades de cada producto
            // Debe de colocar el contenido del inv a ingresar en el textArea
            let textArea = document.getElementById('resumen-inv');
            textArea.value = "Productos: \n";
            textArea.value += `Tipo de Mesa: ${mesa['mesa']} \n`;
            textArea.value += `Cantidad de Mesas: ${mesa['mesa-cantidad']} \n`;
            textArea.value += `Tipo de Silla: ${silla['silla']} \n`;
            textArea.value += `Cantidad de Sillas: ${silla['silla-cantidad']} \n`;
            textArea.value += `Tipo de Mantel: ${mantel['mantel']} \n`;
            textArea.value += `Cantidad de Manteles: ${mantel['mantel-cantidad']} \n`;
            textArea.value += `Color de Mantel: ${mantel['color mantel']} \n`;
            textArea.value += `Tipo de Cubre Mantel: ${cubre['cubre mantel']} \n`;
            textArea.value += `Cantidad de Cubre Manteles: ${cubre['cubreMantel-cantidad']} \n`;
            textArea.value += `Color de Cubre Mantel: ${cubre['color cubre mantel']} \n`;

            for(const key in mesa){
                textArea.value += `${key}: ${mesa[key]} \n`;
            }

        } catch (err) { }
    };

    const cleanTextArea = () =>{
        let textArea = document.getElementById('resumen-inv');
        textArea.value = '';
    };

    const handleCargarInv = async (e) => {
        e.preventDefault();
        try{
            
        }catch(err){}
    };

    return (
        <div className='inventario-container'>
            <div className="left-panel-inv">
                <form className='inv-form' onSubmit={handleResumeInv}>
                    <label htmlFor="mesa-inv">Tipo de Mesa:</label>
                    <div className="input-wrapper">
                        <select id="mesa-inv" name='mesa' onChange={handleSetTipoMesa}>
                            <option selected>Tipo de mesa</option>
                            <option value="mesa-rectangular">Rectangular</option>
                            <option value="mesa-redonda">Redonda</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="mesa" name='mesa-cantidad' onChange={handleSetCantidadMesa}/>
                    </div>

                    <label className="inv-label" htmlFor="silla">Tipo de Silla:</label>
                    <div className="input-wrapper">
                        <select className="sillas-select" id="silla" name='silla' onChange={handleSetTipoSilla} >
                            <option selected>Tipo Silla</option>
                            <option value="silla-negra">Silla Negra</option>
                            <option value="silla-cromada">Silla Cromada</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="silla" name='silla-cantidad' onChange={handleSetCantidadSilla} />
                    </div>

                    <label htmlFor="mantel">Tipo de Mantel:</label>
                    <div className="input-wrapper">
                        <select className="manteles-select" name="mantel" id="mantel" onChange={handleSetTipoMantel}>
                            <option selected>Tipo mantel</option>
                            <option value="liso">Liso</option>
                            <option value="textura">Textura</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="mantel" name='mantel-cantidad' onChange={handleSetCantidadMantel} />
                    </div>

                    <label htmlFor="colorMantel">Color de Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="color mantel" id="colorMantel" onChange={handleSetColorMantel}>
                            <option selected>Color</option>
                            <option value="blanco">Blanco</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                        </select>
                        {/* <input type="text" className='cantidad' htmlFor="colorMantel" name='colorMantel-cantidad' /> */}
                    </div>

                    <label htmlFor="colorMantel">Cubre Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="cubre mantel" id="cubreMantel" onChange={handleSetTipoCubre}>
                            <option selected>Tipo</option>
                            <option value="liso">Liso</option>
                            <option value="detalle">Detalle</option>
                        </select>
                        <input type="text" className='cantidad' htmlFor="cubreMantel" name='cubreMantel-cantidad' onChange={handleSetCantidadCubre} />
                    </div>

                    <label htmlFor="colorCubreMantel">Color de Cubre Mantel:</label>
                    <div className="input-wrapper">
                        <select className="color-mantel-select" name="color cubre mantel" id="colorCubreMantel" onChange={handleSetColorCubre}>
                            <option selected>Color</option>
                            <option value="blanco">Blanco</option>
                            <option value="rojo">Rojo</option>
                            <option value="azul">Azul</option>
                        </select>
                        {/* <input type="text" className='cantidad' htmlFor="colorMantel" name='colorMantel-cantidad' /> */}
                    </div>

                    <div className="input-wrapper">
                        <button id='cargar-inv' type='submit'>Cargar</button>
                        <button id="reset-inv" type='reset' onClick={() => {
                            setMesa({});
                            setSilla({});
                            setMantel({});
                            setCubre({});
                        }}>Limpiar</button>
                    </div>

                </form>
            </div>
            <div className="right-panel-inv">
                <div className="sh-resumen">
                    <textarea name="resumen-inv" id='resumen-inv' readOnly />
                </div>
                <div className="input-wrapper">
                    <button id='cargar-inv' type='submit' >Cargar</button>
                    <button id="reset-inv" type='reset' onClick={cleanTextArea}>Limpiar</button>
                </div>
            </div>
        </div>
    );
};

export default Inventario;