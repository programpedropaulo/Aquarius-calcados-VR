<?php 
function listar_produto(){
    include 'conexao.php';

$produto = $pdo->prepare("SELECT * FROM `produto`");
$produto->execute();

echo "<h1>Lista de Produtos</h1>";

while ($mostrar = $produto->fetch(PDO::FETCH_ASSOC)) {
    echo "<div style='margin-bottom: 30px'>";
    $path = htmlspecialchars($mostrar["path"]);
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

function listar_produto_masculino(){
    include 'conexao.php';

$produto = $pdo->prepare("SELECT * FROM `produto` where categoria = 'masculino'");
$produto->execute();

echo "<h1>Lista de Produtos masculino</h1>";

while ($mostrar = $produto->fetch(PDO::FETCH_ASSOC)) {
    echo "<div style='margin-bottom: 30px'>";
    $path = htmlspecialchars($mostrar["path"]);
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

function listar_produto_feminino(){
    include 'conexao.php';

$produto = $pdo->prepare("SELECT * FROM `produto` where categoria = 'feminino' ");
$produto->execute();

echo "<h1>Lista de Produtos feminino</h1>";

while ($mostrar = $produto->fetch(PDO::FETCH_ASSOC)) {
    echo "<div style='margin-bottom: 30px'>";
    $path = htmlspecialchars($mostrar["path"]);
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

?>