-- Esquema de alteración.
USE ALQUILERES_TAURO;
-- Cambiando el tipo de mesas que hay, cuadradas y rectángulares.
ALTER TABLE Productos
MODIFY COLUMN tipo ENUM('silla-negra', 'silla-cromada', 'mesa-rectangular', 'mesa-redonda', 'manteles') NOT NULL;

