
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
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/conexao.php';
        include_once '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/cadastro_de_produto.php';
        cadastrar_produto();
    }

    if(isset($_POST['listar'])){
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/conexao.php';
        include_once '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/listar.produtos.php';
        listar_produto();
    }
    if(isset($_POST['listar_m'])){
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/conexao.php';
        include_once '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/listar.produtos.php';
        listar_produto_masculino();
    }
    if(isset($_POST['listar_f'])){
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/conexao.php';
        include_once '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/listar.produtos.php';
        listar_produto_feminino();
    }
    if(isset($_POST['busca'])){
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/conexao.php';
        include '../cadastro_de_produtos/banco_de_dados_aquarius/codigos/sistema_de_busca.php';
        procura();
    }

?>