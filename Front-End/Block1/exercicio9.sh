#!/bin/bash

directory=$1

        if [ -d "$directory" ]
        then 
            file=`ls -l $directory | wc -l`
            echo "O $directory tem $file arquivos."
        else
            echo "$directory não é um diretório."
        fi
 #testando commit 