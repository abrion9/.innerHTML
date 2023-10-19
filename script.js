// Capturando os elementos pelo ID
const titulo = document.getElementById('titulo');
const listaNaoOrdenada = document.querySelector('ul');
const link = document.getElementById('link');
const listaOrdenada = document.getElementById('lista-ordenada');

// Adicionando conteúdo aos elementos
titulo.innerText = 'Título do Documento';
link.innerText = 'Clique para visitar o site da Prozeducação';

// Adicionando itens à lista não ordenada usando innerHTML
listaNaoOrdenada.innerHTML = `
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3</li>
`;

// Adicionando itens à lista ordenada usando innerHTML
listaOrdenada.innerHTML = `
    <li><a href="https://site1.com">Link 1</a></li>
    <li><a href="https://site2.com">Link 2</a></li>
    <li><a href="https://site3.com">Link 3</a></li>
`;
