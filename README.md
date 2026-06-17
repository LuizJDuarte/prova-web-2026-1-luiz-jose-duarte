# 🎓 Avaliação 1: Programação Web - Unidade 1

**Professor:** Thiago Marques | **Universidade Estadual da Paraíba (UEPB)** |
**Duração:** 2 horas | **Valor:** 8,0 pontos

---

## ⚠️ Instruções Iniciais (Leia com Atenção)

1.  **Configuração do Repositório:**
    * Acesse o link do template fornecido no quadro.
    * Clique no botão verde **"Use this template"** > **"Create a new repository"**.
    * Nomeie o repositório como: `prova-web-2026-1-SEUNOMECOMPLETO` (Ex: `prova-web-2026-1-thiago-marques`).
    * **IMPORTANTE:** Defina a visibilidade como **🔒 PRIVATE** (Privado).
    * Após criar, vá em **Settings > Collaborators > Add people** e adicione o usuário do professor: `thiagomarques-uepb`.

2.  **Ambiente de Desenvolvimento:**
    * No seu novo repositório, clique no botão verde **< > Code**.
    * Vá na aba **Codespaces**.
    * Clique em **Create codespace on main**.
    * **Aguarde!** O terminal abrirá e instalará as dependências automaticamente (`npm install`). Isso leva cerca de 2 minutos.
    * Quando o terminal parar, digite: `npm run dev`.

3.  **Entrega:**
    * A entrega será validada pelo **último commit** feito antes do horário limite.
    * Não esqueça de fazer o `git add .`, `git commit -m "COMENTARIO"` e `git push` das suas alterações.
    * Copie a URL do seu repositório (Ex: github.com/joao/prova-web-joao).
    * Envie este link pela tarefa no **SUAP**.

---

## 📝 Parte 1: Teoria e Conceitos (1,0 Pontos)

*Abra o arquivo chamado `RESPOSTAS.md` na raiz do projeto e responda às questões abaixo:*

**Questão 1 (0,33 pts):**
No React, por que utilizamos o hook useState para armazenar dados que mudam na interface em vez de utilizarmos variáveis comuns do JavaScript (ex: let contador = 0)? Explique o que acontece com a tela quando atualizamos um estado e quando atualizamos uma variável comum.

**Questão 2 (0,33 pts):**
Um dos pilares do React é a componentização. Explique o que é um Componente e qual é a função das props (propriedades) dentro dessa arquitetura. Cite uma vantagem prática de dividir uma aplicação web em múltiplos componentes em vez de construir tudo em um único arquivo.

**Questão 3 (0,33 pts):**
Ao trabalhar com Next.js, é muito comum utilizarmos a abordagem de CSS Modules (ex: page.module.css). Explique qual é a principal diferença entre utilizar um CSS Module e importar um arquivo de CSS Global padrão. Qual problema crítico em projetos grandes o CSS Module resolve?

---

## 🛠️ Parte 2: Calculadora de IMC (3,0 Pontos)

**Instruções:**
Observe que dentro da pasta `public` do seu projeto, existe uma pasta chamada `calculadora-imc` e dentro dela, existem três arquivos: `index.html`, `style.css` e `main.js`, você deverá utilizar esses arquivos para responder a questão a seguir.

**Enunciado da Questão:**
Crie uma aplicação simples usando apenas HTML, CSS e JavaScript puro para calcular o Índice de Massa Corporal (IMC) de um usuário.

**Requisitos:**

1.  **HTML (`index.html`) (1,25 pts):**
    * A interface deve ter dois campos de input numéricos (Peso em kg e Altura em metros), um botão "Calcular IMC" e um elemento de texto para exibir o resultado. Os arquivos CSS e JS devem ser importados corretamente.

2.  **CSS (`style.css`) (0,5 pts):**
    * A aplicação (o formulário/calculadora) deve estar centralizada vertical e horizontalmente na tela utilizando Flexbox no elemento `body`. O botão deve ter uma cor de fundo que mude suavemente ao passar o mouse (`:hover`).

3.  **JavaScript (`main.js`) (1,25 pts):**
    * Ao clicar no botão, o sistema deve validar se os campos de peso e altura estão vazios ou zerados. Se estiverem, exiba um `alert` pedindo para preencher os dados e **interrompa a execução**.
    * Calcule o IMC utilizando a fórmula: `peso / (altura * altura)`.
    * Atualize o texto do resultado na tela com o valor numérico do IMC.
    * Adicione a seguinte lógica condicional e exiba na tela junto ao número: Se o IMC for menor que 18.5, mostre "Abaixo do peso". Se for entre 18.5 e 24.9, mostre "Peso Ideal". Se for 25 ou maior, mostre "Acima do peso".

---

## 🚀 Parte 3: Next.js - Loja de Jogos Geek (4,0 Pontos)

**Enunciado da Questão:**
Crie uma página em Next.js para exibir o catálogo de uma loja de jogos e controlar a quantidade de itens adicionados ao carrinho de compras do cliente. As imagens de capa dos jogos já estão salvas na pasta public do seu projeto.

**Arquivos de Trabalho:**
* `src/app/page.js` (Lógica principal)
* `src/app/page.module.css` (Estilos)
* `src/components/Navbar.js` (Novo componente)

**Cenário:**
Copie e cole a seguinte lista de dados dentro do seu arquivo `page.js` (antes da função principal):

```javascript
const jogos = [
  { id: 1, titulo: "The Legend of Zelda", preco: 250, emEstoque: true, imagem: "/zelda.jpg" },
  { id: 2, titulo: "Hollow Knight", preco: 45, emEstoque: true, imagem: "/hollow.jpg" },
  { id: 3, titulo: "Elden Ring", preco: 300, emEstoque: false, imagem: "/elden.jpg" },
  { id: 4, titulo: "Stardew Valley", preco: 25, emEstoque: true, imagem: "/stardew.jpg" },
];
```

**Requisitos da Implementação:**

1.  **Componente Estático (0,5 pt):**
    * Crie um componente chamado `<Navbar />` simples, contendo o nome da loja (Ex: "GeekStore") e o importe no topo da sua página principal.
    
2.  **Estilização com CSS Modules (0,5 pts):**
    * **Não use estilos inline** para o layout principal da vitrine.
    * Utilize o arquivo `page.module.css` para criar um layout em grade (usando `display: flex` com `wrap`) para exibir os jogos lado a lado.
    * Crie classes no arquivo `page.module.css` para estilizar a **estante de jogos** (container) e o **jogo**.
    * Importe o CSS na página e aplique as classes corretas nos containers e nos jogos.

3.  **Renderização de Listas (1,0 pts):**
    * Utilize a função `.map()` para percorrer a lista de `jogos` e renderizar um card para cada um. O card deve exibir a imagem do jogo, o `titulo` e o `preco` formatado (Ex: R$ 45,00).
  
4.  **Renderização Condicional (1,0 pts):**
    * Se o jogo estiver em estoque, renderize um botão azul escrito "Comprar". Se estiver sem estoque (emEstoque: false), renderize um parágrafo com o texto "Fora de Estoque" e omita o botão de compra.
5.  **Gerenciamento de Estado (1,0 pts):**
    * Utilize o hook `useState` para criar um estado chamado `itensNoCarrinho`. Ao clicar no botão "Comprar" de qualquer jogo disponível, incremente em 1 (um) a quantidade de itens no carrinho. Esse número total deve ser exibido na tela, preferencialmente logo abaixo da Navbar. Crie um segundo estado `valorDoCarrinho` para armazenar o valor total dos itens adicionados, esse valor deve ser exibido ao lado do total de itens (Ex: "R$ 45,00").
---
**Boa Prova!**