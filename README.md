# Desafio Técnico de Front-End - Assertiva Soluções

Aqui na Assertiva temos times de desenvolvimento ágeis e com
foco em fazer as coisas acontecerem. Estamos continuamente buscando
novas tecnologias que melhor atendam as necessidades de nossos produtos. Uma outra busca constante, principalmente para desenvolvedores front-end, é proporcionar uma melhor experiência de uso para nossos usuários.

O que preparamos é um teste com um pouquinho do que você encontrará no dia-a-dia da squad na Assertiva. O desafio técnico consiste em criar uma SPA para acompanhamento de desempenho de lojas, conforme protótipo e dados disponibilizados. Esse tipo de problema é bastante comum e oferece várias situações que precisamos apresentar as informações tanto em lista quanto em mapa.

## Instruções

- Faça um fork desse projeto e ao final do processo nos envie o link do seu fork.
- Utilize a branch master apenas para publicar versões funcionais seguidas de suas respectivas Tags.
- Crie e utilize uma branch 'Develop' para realizar todo o desenvolvimento do desafio.

## Desenvolvimento

- Desenvolva um Sistema de build simples para a SPA.

### Requisitos obrigatórios

- **Mapa**:​ exibir todas as lojas no mapa. As lojas com faturamento inferior ao mínimo esperado devem estar em vermelho.
- **Listagem paginada**:​ ao carregar a página, já trazer uma listagem com 10 lojas por página ordenadas pelo nome da loja, seguindo o protótipo. As lojas com faturamento inferior ao configurado no campo “Faturamento mínimo esperado” devem estar em vermelho.
- **Pesquisa**:​ Filtrar as lojas pelo nome, tanto na lista quanto no mapa, durante a digitação do texto digitado.
- **Faturamento mínimo esperado**:​ O valor default desse campo é 15.000,00. As alterações neste campo devem refletir na listagem e no mapa.

### Artefatos disponibilizados

- JSON com os dados da aplicação (uso obrigatório)
- Imagens
- Fonts

### Protótipo

Não é necessário fazer igual o protótipo. ( Surpreenda-nos! 😁)

![Protótipo](/public/prototype/prototipo.png)

### Lib's obrigatórias no desenvolvimento

- [Material-UI](https://material-ui.com/)
- [google-react-map](https://github.com/google-map-react/google-map-react)

Chave da API Google Maps:

```shell
AIzaSyC6munUy9XhZ5Z5frB4YmnrNvatlZJBytw
```

### Diferenciais

- Utilização de Pré-Processadores de CSS ([SASS](https://sass-lang.com/) ou [LESS](https://lesscss.org/))
- [ESLint](https://eslint.org/)
- [Prettier](https://prettier.io/)
