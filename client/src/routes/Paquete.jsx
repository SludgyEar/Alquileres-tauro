import React, { useState } from 'react';
import '../styles/paquete.css'

const Paquete = () => {

    const [pack, setPack] = useState({
        mesa: "mesa-rectangular",
        silla: "silla-negra",
        mantel: "liso",
        colorMantel: "blanco"
    });
    const handleSetPack = (e) => {
        setPack(prev=>({...prev, [e.target.name]: e.target.value}));
    };
    const handleResumePack = (e) => {
        e.preventDefault();
        try{
            // pack es un objeto con los valores seleccionados: mesa, silla, mantel, colorMantel
            // Debe de colocar el contenido del paquete en el textArea
            let textArea = document.getElementById('paquete-listado');
            textArea.value += "Paquete: \n";
            for(const product in pack){
                textArea.value += `- ${product}: ${pack[product]} \n`;
            }
        }catch(err){}
    };

    return (
            <div className="alquiler-container">
                <div className="alquiler-grid">
                    <div className="left-panel">
                        <div className="categoria-grid">
                            <form  className='form' onSubmit={handleResumePack}>
                            <label htmlFor="mesa">Tipo de Mesa:</label>
                            <select className="mesas-select" id="mesa" name='mesa' onChange={handleSetPack}>
                                <option selected>Tipo de mesa</option>
                                <option value="mesa-rectangular">Rectangular</option>
                                <option value="mesa-redonda">Redonda</option>
                            </select>

                            <label htmlFor="silla">Tipo de Silla:</label>
                            <select className="sillas-select" id="silla" name='silla' onChange={handleSetPack}>
                                <option selected>Tipo Silla</option>
                                <option value="silla-negra">Silla Negra</option>
                                <option value="silla-cromada">Silla Cromada</option>
                            </select>

                            <label htmlFor="mantel">Tipo de Mantel:</label>
                            <select className="manteles-select" name="mantel" id="mantel" onChange={handleSetPack}>
                                <option selected>Tipo mantel</option>
                                <option value="liso">Liso</option>
                                <option value="textura">Textura</option>
                            </select>

                            <label htmlFor="colorMantel">Color de Mantel:</label>
                            <select className="color-mantel-select" name="colorMantel" id="color-mantel" onChange={handleSetPack}>
                                <option selected>Color Mantel</option>
                                <option value="blanco">Blanco</option>
                                <option value="rojo">Rojo</option>
                                <option value="azul">Azul</option>
                            </select>

                            <button className='extra-btn'>Agregar Mobiliario Extra</button>
                            <button  className="paquete-btn" type='submit'>Agregar Paquete</button>
                            <button  className="reset-btn" type='reset' onClick={() => {
                                setPack({ mesa: "", silla: "", mantel: "", colorMantel: ""});
                            }}>Limpiar</button>
                            </form>
                        </div>
                    </div>

                    <div className="right-panel">
                        <div className="paquetes-seleccionados">
                            <div className='paquete-card'>
                                <textarea name="paquete-listado" id="paquete-listado" readOnly />
                                <h2>Total: $ 2000</h2>
                            </div>
                            <div className='btns-container'>
                                <button className="btn-confirmar">Confirmar</button>
                                <button className="btn-cancelar">Cancelar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

export default Paquete;