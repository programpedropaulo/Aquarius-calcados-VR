<?php
    $host = "localhost";
    $user = "root";
    $pass = "";
    $db = "aquarius";
    //try -> Tenta executar o código dentro dele
    try{
    $pdo = new PDO("mysql:host=$host;dbname=$db",$user,$pass);

    //PDO::ATTR_ERRMODE -> Define o modo de tratamento de erro para lançar exceções
    //PDO::ERRMODE_EXCEPTION -> Modo mais seguro para lidar com erros (obrigatório!)

    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    //catch -> Captura qualquer erro de conexão/query e mostra a mensagem
    }catch(PDOException $e) {
        echo "erro na conexão: ". $e->getMessage();
    }

?>