-- Esquema de creación.
CREATE DATABASE alquileres_tauro;
USE alquileres_tauro;
-- Crear la tabla Clientes
CREATE TABLE Clientes (
    idCliente INT AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(60) NOT NULL,
    direccion VARCHAR(120) NOT NULL,
    telefono VARCHAR(10) NOT NULL,
    email VARCHAR(25),
    RFC VARCHAR(13) NOT NULL
);

-- Crear la tabla Alquileres de mobiliario
CREATE TABLE Alquileres (
    idAlquiler INT AUTO_INCREMENT PRIMARY KEY,
    idCliente INT,
    fechaInicio TIMESTAMP NOT NULL DEFAULT NOW(),
    fechaFin DATE,
    total NUMERIC(10, 2),
    FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente)
);

-- Crear la tabla de Renta de salones
CREATE TABLE Rentas(
	idRenta int auto_increment primary key,
    idCliente int,
    idSalon int,
    fechaInicio timestamp not null default now(),
    fechaFin date,
    total numeric(10,2),
    FOREIGN KEY (idCliente) REFERENCES Clientes(idCliente),
    Foreign key (idSalon) references Salones(idSalon)
);

-- Crear la tabla de Salones
Create table Salones(
	idSalon int auto_increment primary key,
    direccion varchar(125) not null,
    capacidad varchar(3) not null,
    precioHora numeric(10,2) not null,
    descripcion varchar(150)
);

-- Crear la tabla Productos
CREATE TABLE Productos (
    idProducto INT AUTO_INCREMENT PRIMARY KEY,
    tipo ENUM('silla', 'mesa', 'salon', 'manteles') NOT NULL,	-- Alterada
    stock INT NOT NULL,
    precioUnitario NUMERIC(10, 2) NOT NULL
);

-- Crear la tabla DetalleAlquileres
CREATE TABLE DetalleAlquileres (
    idDetalle INT AUTO_INCREMENT PRIMARY KEY,
    idAlquiler INT,
    idProducto INT,
    cantidad INT NOT NULL,
    precioUnitario NUMERIC(10, 2) NOT NULL,
    total NUMERIC(10, 2),
    FOREIGN KEY (idAlquiler) REFERENCES Alquileres(idAlquiler),
    FOREIGN KEY (idProducto) REFERENCES Productos(idProducto)
);

CREATE TABLE USUARIOS(
	idUsr SMALLINT PRIMARY KEY AUTO_INCREMENT,
    nombreUsr VARCHAR(25) NOT NULL,
    passwdUsr VARCHAR(64) NOT NULL
);
Select * from Usuarios;

-- Trigger que inserta la contraseña encriptada
DELIMITER //
CREATE TRIGGER encrypt_password
BEFORE INSERT ON USUARIOS
FOR EACH ROW
BEGIN
    SET NEW.passwdUsr = SHA2(NEW.passwdUsr, 256);
END;
//
DELIMITER ;
