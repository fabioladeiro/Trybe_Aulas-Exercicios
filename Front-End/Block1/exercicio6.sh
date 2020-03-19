#!/bin/bash

read -p "Digite o caminho para um diretório: " directory

if [ -d $directory ]
then 
    echo "O arquivo é um diretório"
elif [ -f $directory ]
then
    echo "O arquivo é comum"
else 
    echo "O arquivo é de outro tipo"
fi
