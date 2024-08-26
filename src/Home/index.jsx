import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ListarProdutos from '../Components/ListarProdutos';

export default function Home() {
  const [listaObjetos, setListaObjetos] = useState([
    {
      id: 1,
      nome: "vestido feminino azul royal",
      image: "https://cdn.awsli.com.br/600x700/2233/2233931/produto/243430635/design-sem-nome---2023-11-27t170856-671-eaf7g2dprw.jpg",
      tipo: 'feminino',
      categoria: ['feminino, vestido'],
      preco: 100
    },
    {
      id: 2,
      nome: "vestido feminino princesa branco",
      image: "https://http2.mlstatic.com/D_NQ_NP_966910-MLB72164647189_102023-O.webp",
      tipo: 'feminino',
      categoria: ['feminino, vestido'],
      preco: 125
    },
    {
      id: 3,
      nome: "vestido feminino plus size preto",
      image: "https://down-br.img.susercontent.com/file/bf6cebc9a56af2af265971d4e27acd1d",
      tipo: 'feminino',
      categoria: ['feminino, vestido'],
      preco: 150
    },
    {
      id: 4,
      nome: "vestido feminino pink brilhante",
      image: "https://cdn.awsli.com.br/800x800/2032/2032729/produto/203743984/whatsapp-image-2023-02-16-at-09-57-30-ilnkyz.jpg",
      tipo: 'feminino',
      categoria: ['feminino, vestido'],
      preco: 250
    },
    {
      id: 5,
      nome: "vestido feminino verde",
      image: "https://acdn.mitiendanube.com/stores/003/275/653/products/fotos_arrumadadas-dropi-b5218d298f2b93b60716968632902904-1024-1024.jpg",
      tipo: 'feminino',
      categoria: ['feminino, vestido'],
      preco: 80
    },
  ]);

  return (
    <div>
      <Header />
      <ListarProdutos listaObjetos={listaObjetos} />
      <Footer />
    </div>
  );
}