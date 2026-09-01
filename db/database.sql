CREATE DATABASE IF NOT EXISTS senatidb;

USE senatidb;

CREATE TABLE estudiante (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    email VARCHAR(40) DEFAULT NULL UNIQUE,
    fecha_nac DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE profesor (
    id INT NOT NULL AUTO_INCREMENT,
    nombre VARCHAR(60) NOT NULL,
    apellido VARCHAR(60) NOT NULL,
    curso VARCHAR(30) NOT NULL,
    email VARCHAR(40) DEFAULT NULL UNIQUE,
    fecha_nac DATE NOT NULL,
    PRIMARY KEY (id)
);

CREATE TABLE empresa (
    id INT NOT NULL AUTO_INCREMENT,
    ruc INT NOT NULL,
    razon_social VARCHAR(60) NOT NULL,
    ubicacion VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
);

INSERT INTO estudiante (id, nombre, apellido, email, fecha_nac) VALUES
(1, 'Carim', 'Estrada', 'carime@gmail.com', '2003-11-26'),
(2, 'Jose', 'Rivas', 'joser@gmail.com', '2005-05-16'),
(3, 'Edgar', 'Vivar', 'edgarv@gmail.com', '2004-07-23');

INSERT INTO profesor (id, nombre, apellido, curso, email, fecha_nac) VALUES
(1, 'Felipe', 'Gutierrez', 'Matematicas', 'felipeg@senati.pe', '1975-08-18'),
(2, 'Julieta', 'del Campo', 'Ingles', 'julietadc@senati.pe', '1987-01-28'),
(3, 'Fausto', 'Messi', 'Historia', 'faustom@senati.pe', '1999-12-06');

INSERT INTO empresa (id, ruc, razon_social, ubicacion) VALUES
(1, 20739481520, 'Innovaciones Andinas S.A.C', 'Avenida Los Libertadores 1420'),
(2, 20418593721, 'Comercializadora El Sol E.I.R.L.', 'Calle Las Orquídeas 123'),
(3, 20953184605, 'Logística y Transportes del Pacífico S.A.', 'Pasaje Bolognesi 345')

SELECT * FROM estudiante;
SELECT * FROM profesor;
SELECT * FROM empresa;