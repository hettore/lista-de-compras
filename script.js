var $lista = document.querySelector('ul');
var $produto = document.querySelector('#produto');
var $botao = document.querySelector('#btn');  
                    
var $deletar = document.querySelector('#del');
var del = $deletar;

                   

$botao.addEventListener('click', addProduto);

function addProduto(){

var item = '<li>' + $produto.value + '</li>';
$lista.innerHTML += item;
$produto.value = ''  ;
$produto.focus();
}

del.addEventListener('click', delProduto);

function delProduto(){
$lista.innerHTML = " ";
} 


$produto.addEventListener('keyup', function(e){
    console.log(e.keyCode);
    if (e.keyCode === 13){
    addProduto()
    }
})

                