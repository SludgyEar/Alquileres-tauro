-- Esquema de alteración.
USE ALQUILERES_TAURO;
-- Cambiando el tipo de mesas que hay, cuadradas y rectángulares.
ALTER TABLE Productos
MODIFY COLUMN tipo ENUM('silla-negra', 'silla-cromada', 'mesa-rectangular', 'mesa-redonda', 'manteles', 'cubre-manteles') NOT NULL;
-- Agregando el color que pueden tomar los manteles y cubremanteles
ALTER TABLE Productos
ADD color varchar(30) default null;

ALTER TABLE USUARIOS
ADD adminUsr varchar(1) check(adminUsr in ('0','1'));
Select * from usuarios;