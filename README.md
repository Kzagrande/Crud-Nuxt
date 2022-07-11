

※ Projeto1 - Crud com NuxtJs(#id01)


##  Projeto - Crud completo Com Nuxtjs Consumindo Api's<a name="id01"></a>


[Meu codigo](https://github.com/Kzagrande/Crud-Nuxt)


## Objetivo: Desenvolver um CRUD em Nuxtjs ou Vue que consuma duas apis públicas e utilize todos os métodos
de requisição para ambas.

  🚄 Qual a boa SP ?
    - A ideia por trás do projeto era simular um site onde os usuários pudessem ter acesso rápido e prático a todo evento
    que estivesse acontecendo no dia na cidade de São Paulo e que fosse próximo a um metrô.
    - Por utilizar uma API pública que tem seu conteúdo fixo e não permite alterações o site é apenas uma simulação 
    contendo a lógica e um molde do que seria usado caso fosse real.
    - Utilizei o Nuxtjs pois é uma solução muito prática feita em cima de Vue.Js para o desenvolvimento do Front-End.
    - Resolvi utilizar o Buefy para construção de componentes externos, pois era uma solução que eu não tinha conhecimento 
    e gostaria de aprender.
    
   <br>
   <br>
   <br>
   <br>
    
   ※ HEADER
    
   ![Header](https://user-images.githubusercontent.com/91704291/178335794-090f5cb5-6737-4c9f-9772-1bd301b6f63c.PNG)
    
    * O Header da página é um componente com uma barra de navegação simples que utiliza a tag nuxtlink que possibilita 
    fazer a navegação entre páginas sem precisar que a página recarregue novamente.
    
   <br>
   <br>
   <br>
   <br>
   
   ※INDEX
    
   ![Carousel](https://user-images.githubusercontent.com/91704291/178336428-d9bf9184-2980-4650-a146-9e07b9eba492.PNG)
    
    * A página Index tem um componente dentro dela que renderiza um carrosel responsável por trazer todas as fotos
    da API Photos e possibilitar por meio dos botões atualizar e deletar esta foto.
    * Quando o botão Atualizar Foto é clicado o mesmo por meio de um methodo já trás todas as informações referente objeto.
    
    * Antes do Carrosel a página conta com um botão "Criar nova Foto" que permite criar um novo objeto no JSON.
   ![PhotoForm](https://user-images.githubusercontent.com/91704291/178337046-2cb9e137-c9b7-45a6-8e21-3867fc37ee72.PNG)
    
   <br>
   <br>
   <br>
   <br>
   
   ※POSTS
   
    * A página Posts consome a API posts e traz por meio de uma tabela o título do post, o ID, o User ID e o body para cara linha.
    * Na ideia principal do site,está página simula um histórico de todos lugares que estão abertos no dia e a avaliação e observações dos usuários.
    * Foi aplicada a mesma lógica da página de fotos, então é possível criar, deletar, atualizar e excluir um post
   ![posts](https://user-images.githubusercontent.com/91704291/178341338-08c4f7b8-33d7-47bd-878f-15d9c9d62f09.png)

   
   
     * Antes da lista de posts a página conta com um botão "Criar novo Post" que permite criar um novo objeto no JSON.
   ![PostForm](https://user-images.githubusercontent.com/91704291/178339466-f7829274-4c28-4811-8241-d2621d733aec.PNG)

    ※ FOOTER
    
   
  ![footer](https://user-images.githubusercontent.com/91704291/178339733-a4df3084-d686-466b-9603-a7777123560d.PNG)

    
    * O Footer da página é um componente simples que trás dois links.
    
   <br>
   <br>
 

##### o que tem no conteúdo do projeto  ?

* Conceito de Store
* Como fazer requisições com AXIOS
* Como tratar o conteúdo no Front-End para apresentar na página
* Map State
* Filter
* Componentização
* Buefy 
* Consumo de APIS

⚠⚠ Por ser uma API estática e engessada apenas o método GET comunica diretamente com o site, os demais estão mockados ⚠⚠
  <br>
   <br>
   <br>
   <br>

🎬🎬VÍDEO DO PROJETO 🎬🎬

https://user-images.githubusercontent.com/91704291/178333777-a398a110-81d7-4aaa-887d-d1323bf5e0bf.mp4

