import React, { useState } from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import ListarProdutos from '../Components/ListarProdutos';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import "../globals.css";




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
      <Carousel
                infiniteLoop
                useKeyboardArrows
                autoPlay
                showArrows={true}
                showStatus={false}
                showThumbs={false}
                dynamicHeight
              >
                  <div>
                      <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/2a9d1ee8-32fd-4a82-aa8f-058b65195358___7e44e3968174df4d4ba45387753bb8d4.png" alt="Slide 1"  style={{ 
                      height: '270px'}}/>
                  </div>

                  <div>
                      <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/e32a0027-7845-4f71-a9d5-c33e1fa37377___217c47cbd2f1726604b4a85da4603310.png" alt="Slide 2"  style={{ 
                      height: '270px'}}/>
                  </div>

                  <div>
                      <img src="https://cea.vtexassets.com/assets/vtex.file-manager-graphql/images/803a5318-357b-42f3-8e8c-b89d9187e9b7___ba28b293eee0c5c1465d09b7875a3082.png" alt="Slide 2"  style={{ 
                      height: '270px'}}/>
                  </div>
      
            </Carousel>
      <ListarProdutos listaObjetos={listaObjetos} />
      <Footer />
    </div>
  );
}