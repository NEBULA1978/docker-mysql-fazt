#!/bin/bash

PS3="Select an option: "
options=("Create MySQL Container" "Connect to MySQL Container" "Stop MySQL Container" "Exit")

select opt in "${options[@]}"
do
    case $opt in
        "Create MySQL Container")
            read -p "Enter container name: " container_name
            read -p "Enter port to map (host:container): " port_mapping
            read -p "Enter MySQL root password: " mysql_password

            docker run --name $container_name -p $port_mapping -e MYSQL_ROOT_PASSWORD=$mysql_password mysql
            ;;
        "Connect to MySQL Container")
            read -p "Enter container name: " container_name
            docker exec -it $container_name bash
            ;;
        "Stop MySQL Container")
            read -p "Enter container name: " container_name
            docker stop $container_name
            ;;
        "Exit")
            break
            ;;
        *) echo "Invalid option";;
    esac
done
