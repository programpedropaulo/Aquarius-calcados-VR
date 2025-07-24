
    <!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> sistema de busca</title>
</head>

<body>
    <form method="POST" enctype="multipart/form-data" action="">
        busca: 
        <input type="text" name="busca" required />
        <button type="submit" name="enviar">pesquisar</button>
    </form>

</body>

</html>

<?php 

function procura(){
    //so deixar o codigo rodar uma vez
    global $uma_volta;
    if ($uma_volta) return;
     $uma_volta = true;
    include 'conexao.php';
    if (isset($_POST['busca'])) {
        if (!empty($_POST['busca'])) {
        $busca = $_POST['busca'];

        $produto = $pdo->prepare("SELECT * FROM `produto` WHERE nome_do_produto LIKE ?");
        $produto->execute(["%$busca%"]);

    if ($produto->rowCount() > 0) {
    echo "<h1>Produtos encontrados:</h1>";

    while ($mostrar = $produto->fetch(PDO::FETCH_ASSOC)) {
        echo "<div style='margin-bottom: 30px'>";
        $path = htmlspecialchars($mostrar["path"] ?? "sem-imagem.jpg");
        echo "<img src='$path' width='200'><br>";
        echo "Nome do produto: " . htmlspecialchars($mostrar['nome_do_produto']) . "<br>";
        echo "Descrição: " . htmlspecialchars($mostrar['descricao']) . "<br>";
        echo "Preço: R$" . htmlspecialchars($mostrar['preco']) . "<br>";
        echo "Estoque: " . htmlspecialchars($mostrar['estoque']) . "<br>";
        echo "Categoria: " . htmlspecialchars($mostrar['categoria']) . "<br>";
        echo "Horário de criação: " . htmlspecialchars($mostrar['produto_criado']) . "<br>";
        echo "</div>";
    }
    }
    else{
        echo "<h1> nenhum produto encontrado com esse nome </h1>";
    }
    }
    }
}
 if (isset($_POST['busca'])) {
    procura();
 }
?>
