-- Schema de inserción
USE ALQUILERES_TAURO;
SELECT * FROM PRODUCTOS;
ALTER TABLE productos AUTO_INCREMENT = 1;
DELETE FROM PRODUCTOS;

-- Vamos a inicializar el inventario colocando cada inventario en cero, porque sabemos de su existencia pero tenemos que contabilizarla
-- Mesas 
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario) VALUES ('mesa-rectangular', 0, 10);
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario) VALUES ('mesa-redonda', 0, 10);
-- Sillas
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario) VALUES ('silla-negra', 0, 10);
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario) VALUES ('silla-cromada', 0, 10);
-- Manteles LISOS
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'blanco');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'negro');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'dorado');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'plata');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'azul-cielo');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'azul-marino');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'rojo');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'naranja');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('manteles', 0, 10, 'morado');
-- Cubre Manteles LISOS
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'blanco');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'negro');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'dorado');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'plata');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'azul-cielo');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'azul-marino');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'rojo');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'naranja');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color) VALUES ('cubre-manteles', 0, 10, 'morado');
-- Textura
-- Manteles textura
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'blanco', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'negro', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'dorado', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'plata', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'azul-cielo', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'azul-marino', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'rojo', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'naranja', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('manteles', 0, 10, 'morado', 'textura');
-- Cubre Manteles textura
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'blanco', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'negro', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'dorado', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'plata', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'azul-cielo', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'azul-marino', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'rojo', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'naranja', 'textura');
INSERT INTO PRODUCTOS (tipo, stock, precioUnitario, color, textura) VALUES ('cubre-manteles', 0, 10, 'morado', 'textura');

UPDATE PRODUCTOS
SET textura = 'liso'
WHERE TIPO = 'CUBRE-MANTELES';

UPDATE PRODUCTOS
SET STOCK = STOCK + 2
WHERE TIPO = 'MESA-REDONDA';

UPDATE PRODUCTOS
SET STOCK = 0
WHERE TIPO = 'MESA-REDONDA';

UPDATE PRODUCTOS
SET STOCK = 0;