<?php

//var_dump(); -> É uma função que mostra detalhes completos de qualquer variável: tipo, valor e tamanho.
//var_dump($_FILES);
    function cadastrar_produto(){
    include 'conexao.php';
    global $segurança;
    if ($segurança) return;
     $segurança = true;

    if (isset($_POST['enviar']) && isset($_FILES['imagem'])) {
        $arquivo = $_FILES['imagem'];
        //caso de um error retorna a mensagem e fecha 
        if($arquivo['error'])
            die("falha ao enviar o arquivo");
        //verifica que o tamanho do arquivo e se a imagem for maior que 2mb o programa fecha
        if($arquivo['size'] > 2097152)
            die("arquivo muito grande!! Max:2MB");
        //pasta onde as imagens serão armazenadas
        $pasta = __DIR__ . '/../imagens/';
        $nome_do_arquivo = $arquivo['name'];
        $novo_nome_do_arquivo = uniqid();
        //strtolower -> deixa tudo minusculo
        //PATHINFO_EXTENSION -> verifica a extensao do arquivo
        $extensao = strtolower(pathinfo($nome_do_arquivo,PATHINFO_EXTENSION));

        //verifica caso a extensao seja diferente de jpg, png ou pdf, o programa fecha e retorna uma mensagem
        if($extensao != "jpg" && $extensao != "png" && $extensao != "pdf")
            die("tipo de arquivo nao aceito");

        echo "arquivo foi enviado";
        $arquivo_final = $novo_nome_do_arquivo . "." . $extensao;
        $path = $pasta . $arquivo_final;
        $imagem_aprove = move_uploaded_file($arquivo["tmp_name"], $path);
        if(!$imagem_aprove){
            die("<p>Falha ao enviar o arquivo</p>");
        }
        //dados do formulario
        $nome_do_produto = $_POST['nome_do_produto'];
        $descricao = $_POST['descricao'];
        $preco = $_POST['preco'];
        $estoque = $_POST['estoque'];
        $categoria = $_POST['categoria'];
        $produto_criado = date('Y-m-d H:i:s');

    $produto = $pdo->prepare("INSERT INTO produto (path, nome_do_produto, descricao, preco, estoque, categoria, produto_criado) VALUES (?, ?, ?, ?, ?, ?, ?)");
    $produto->execute([$path, $nome_do_produto, $descricao, $preco, $estoque, $categoria, $produto_criado]);
    echo "<br />";
    echo "produto criado";
    }
}
if (isset($_POST['enviar'])) {
    cadastrar_produto();
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> criação de produto </title>
</head>

<body>
    <form method="POST" enctype="multipart/form-data" action="">
        nome do produto:
        <input type="text" name="nome_do_produto" required />
        descrição:
        <input type="text" name="descricao" required/>
        preço:
        <input type="number" name="preco" required/>
        estoque:
        <input type="number" name="estoque" required/>
        categoria:
        <input type="text" name="categoria" required/>

        <p><label for="">Selecione uma imagem</label>
        <input name="imagem" type="file"></p>
        <button type="submit" name="enviar">criar produto</button>

    </form>

</body>

</html>