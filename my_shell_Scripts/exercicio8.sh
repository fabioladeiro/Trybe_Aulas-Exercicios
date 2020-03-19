#!/bin/bash

directory=$*

for item in $directory
    do
        if [ -d $item ]
        then 
            echo "$item é um diretório"
        elif [ -f $item ]
        then
            echo "$item é comum"
        else 
            echo "$item é de outro tipo"
        fi
    done