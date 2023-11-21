#!/bin/bash

PS3="Selecciona una opción: "
opciones=("Crear contenedor MySQL" "Conectar al contenedor MySQL" "Listar contenedores en ejecución" "Detener contenedor MySQL" "Eliminar contenedor MySQL" "Inspeccionar contenedor MySQL" "Configurar base de datos y tabla" "Agregar producto a la tienda" "Listar productos de la tienda" "Salir")

# Variables para la base de datos
nombre_base_de_datos="tienda_camisetas"
nombre_tabla="productos"
nombre_contenedor=""

while true
do
    select opt in "${opciones[@]}"
    do
        case $opt in
            "Crear contenedor MySQL")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                read -p "Ingresa el mapeo de puertos (host:contenedor): " mapeo_puertos
                read -p "Ingresa la contraseña de root de MySQL: " contraseña_mysql

                docker run --name $nombre_contenedor -p $mapeo_puertos -e MYSQL_ROOT_PASSWORD=$contraseña_mysql mysql
                ;;
            "Conectar al contenedor MySQL")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                docker exec -it $nombre_contenedor bash
                ;;
            "Listar contenedores en ejecución")
                docker ps
                ;;
            "Detener contenedor MySQL")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                docker stop $nombre_contenedor
                ;;
            "Eliminar contenedor MySQL")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                docker rm $nombre_contenedor
                ;;
            "Inspeccionar contenedor MySQL")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                docker inspect $nombre_contenedor
                ;;
            "Configurar base de datos y tabla")
                read -p "Ingresa el nombre del contenedor: " nombre_contenedor
                read -p "Ingresa la contraseña de root de MySQL: " contraseña_mysql

                # Configurar la base de datos y la tabla
                docker exec -i $nombre_contenedor mysql -u root -p$contraseña_mysql <<EOF
                CREATE DATABASE IF NOT EXISTS $nombre_base_de_datos;
                USE $nombre_base_de_datos;
                CREATE TABLE IF NOT EXISTS $nombre_tabla (
                    id INT AUTO_INCREMENT PRIMARY KEY,
                    nombre VARCHAR(255) NOT NULL,
                    descripcion VARCHAR(255),
                    precio DECIMAL(10, 2) NOT NULL
                );
EOF
                ;;
            "Agregar producto a la tienda")
                read -p "Ingresa el nombre del producto: " nombre_producto
                read -p "Ingresa la descripción del producto: " descripcion_producto
                read -p "Ingresa el precio del producto: " precio_producto

                # Ejecutar comando SQL para insertar el producto en la base de datos
                docker exec -i $nombre_contenedor mysql -u root -p$contraseña_mysql <<EOF
                USE $nombre_base_de_datos;
                INSERT INTO $nombre_tabla (nombre, descripcion, precio) VALUES ('$nombre_producto', '$descripcion_producto', $precio_producto);
EOF
                ;;
            "Listar productos de la tienda")
                # Ejecutar comando SQL para seleccionar y mostrar los productos de la base de datos
                docker exec -i $nombre_contenedor mysql -u root -p$contraseña_mysql <<EOF
                USE $nombre_base_de_datos;
                SELECT * FROM $nombre_tabla;
EOF
                ;;
            "Salir")
                exit 0
                ;;
            *) echo "Opción no válida";;
        esac
    done
done
