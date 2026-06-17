### Questão 1 (0,33 pts): No React, por que utilizamos o hook useState para armazenar dados que mudam na interface em vez de utilizarmos variáveis comuns do JavaScript (ex: let contador = 0)? Explique o que acontece com a tela quando atualizamos um estado e quando atualizamos uma variável comum. 

R: Utilizamos o useState para armazenar dados que queremos atualizar durante a execução da página, sendo assim, quando estamos utilizando o useState atualizamos o estado váriavel em tempo de execução, não precisamos ficar consultando e pesquisando a váriavel para exibir. 

A diferença, é que quando estamos usando o estado, se clicarmos em um botão ou escrevermos algo, a ação ocorre automaticamente sem a página precisar recarregar para mostrar o novo valor, já uma váriavel comum, teríamos que evitar que a página fosse atualizada e re-enviar o elemento todas as vezes que clicassemos para adicionar um novo valor, re-gerando aquele elemento muitas vezes, e tendo um alto custo computacional. 


### Questão 2 (0,33 pts): Um dos pilares do React é a componentização. Explique o que é um Componente e qual é a função das props (propriedades) dentro dessa arquitetura. Cite uma vantagem prática de dividir uma aplicação web em múltiplos componentes em vez de construir tudo em um único arquivo.

R: A vantagem de utilizar os componentes é a reutilização de código e a melhor renderização de elementos no front end, pois os componentes são 'modelos' que fazemos para re-utilizar no front end, ex: quero inserir um post card em várias páginas do meu site, mas não quero ficar tendo que criar ele em várias páginas usando o mesmo código, então posso evitar esse re-trabalho criando um componente postcard, que padroniza o visual daquele elemento, e sempre que eu precisar dele, eu cito o componente no arquivo/página em quero re-utilizá-lo. 


### Questão 3 (0,33 pts): Ao trabalhar com Next.js, é muito comum utilizarmos a abordagem de CSS Modules (ex: page.module.css). Explique qual é a principal diferença entre utilizar um CSS Module e importar um arquivo de CSS Global padrão. Qual problema crítico em projetos grandes o CSS Module resolve?

R: O CSS module como o próprio nome diz, moduraliza as configurações .css, então eu posso personalizar o .css daquele meu componente em específico, sem ter que mudar uma configuração global de todos os elementos ou componentes do meu projeto. Dessa, forma, em projetos grande isso facilita a manutenção do código e personalização dos componentes. 

Ex: quero mudar o visual de um painel visual específico, eu posso ir lá e mudar no css module dele e não preciso 