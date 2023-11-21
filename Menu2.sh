#!/bin/bash

PS3="Selecciona una opción: "
opciones=("Crear contenedor MySQL" "Conectar al contenedor MySQL" "Listar contenedores en ejecución" "Detener contenedor MySQL" "Eliminar contenedor MySQL" "Inspeccionar contenedor MySQL" "Salir")

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
        "Salir")
            break
            ;;
        *) echo "Opción no válida";;
    esac
done



