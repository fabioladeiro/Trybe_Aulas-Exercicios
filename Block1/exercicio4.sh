#!/bin/bash

file="/home/fabiola/ShellScrips15/my-shell-scripts"

if [ -e $file ]
then 
    echo "O caminho $file está habilitado"
fi
if [ -w $file ]
then 
echo "Você tem permissão para editar $file"
else
    echo "Você não foi autorizado a editar $file"
fi
