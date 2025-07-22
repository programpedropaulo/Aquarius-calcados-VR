
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> criação de produto </title>
    </head>

    <body>
    <form method="post" action="">
         <button type="submit" name="enviar">cadastrar_produto</button>
         <button type="submit" name="listar">listar_produto</button>
         <button type="submit" name="listar_m">listar_produtos_masculinos</button>
         <button type="submit" name="listar_f">listar_produtos_feminino</button>
         <button type="submit" name="busca">procurar_produto</button>
    </form>
    </body>

</html>

<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);



    if(isset($_POST['enviar'])){
        include 'conexao.php';
        include 'cadastro_de_produto.php';
        cadastrar_produto();
    }

    if(isset($_POST['listar'])){
        include 'conexao.php';
        include 'listar.produtos.php';
        listar_produto();
    }
    if(isset($_POST['listar_m'])){
        include 'conexao.php';
        include 'listar.produtos.php';
        listar_produto_masculino();
    }
    if(isset($_POST['listar_f'])){
        include 'conexao.php';
        include 'listar.produtos.php';
        listar_produto_feminino();
    }
    if(isset($_POST['busca'])){
        include 'conexao.php';
        include 'sistema_de_busca.php';
        procura();
    }









?>