'use client';
import Navbar from '../components/Navbar.js';
import Image from 'next/image';
import {useState} from 'react';
import styles from './page.module.css';

// Array fornecido no enunciado
const jogos = [
  { id: 1, titulo: "The Legend of Zelda", preco: 250, emEstoque: true, imagem: "/zelda.jpg" },
  { id: 2, titulo: "Hollow Knight", preco: 45, emEstoque: true, imagem: "/hollow.jpg" },
  { id: 3, titulo: "Elden Ring", preco: 300, emEstoque: false, imagem: "/elden.jpg" },
  { id: 4, titulo: "Stardew Valley", preco: 25, emEstoque: true, imagem: "/stardew.jpg" },
];

export default function LojaDeJogosGeek() {

  const [carrinho , setCarrinho] = useState(0);

  return (
    <div>
      <Navbar />
      <h2>{`Itens no carrinho: ${carrinho}`}</h2>
      <main className={styles.main}>
        {jogos.map((jogo)=>(
          <div key={jogo.id} className={styles.jogo}>
            <h3>{jogo.titulo}</h3>
            <p>R$ {jogo.preco},00</p>
            <img src={jogo.imagem} alt={`Capa do jogo ${jogo.titulo}`}></img>
            {jogo.emEstoque == true ?
            (<button onClick={()=>setCarrinho(carrinho+1)}>Comprar</button>) 
            :
            (<p className={styles.textoEstoque}>Fora de estoque</p>)
            }
          </div>
        ))
        }
      </main>
    </div>
  );
}
