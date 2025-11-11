# 👨‍💻 Portfólio Pessoal - Devborges

## Visão Geral

Este é o código-fonte do meu portfólio pessoal, desenvolvido com **HTML5, CSS3 e JavaScript**, utilizando a biblioteca **jQuery** para manipulação do DOM e a biblioteca **Typed.js** para o efeito de digitação nas seções de introdução (`#home` e `#about`).

O objetivo deste projeto é apresentar minhas habilidades, serviços e informações de contato de forma profissional e responsiva.

## ✨ Funcionalidades Principais

O projeto inclui as seguintes seções e interatividades:

- **Navegação Fixa e Dinâmica (`.navbar`):** O menu de navegação é fixo (sticky) e muda de estilo ao rolar a página para mais de 20px.
- **Botão "Voltar ao Topo" (`.scroll-up-btn`):** Um botão que aparece ao rolar a página (a partir de 500px) e permite retornar ao topo com um clique.
- **Efeito de Digitação (`Typed.js`):** Efeitos de texto dinâmico nas seções de `Início` e `Sobre` para destacar suas especialidades.
- **Seções de Conteúdo:**
  - **Início (`#home`):** Apresentação principal.
  - **Sobre (`#about`):** Informações detalhadas sobre o profissional.
  - **Serviços (`#services`):** Cards para descrever os serviços oferecidos.
  - **Especialidades (`#skills`):** Barras de progresso para exibir o nível de proficiência em tecnologias (HTML, CSS, JAVASCRIPT, TYPESCRIPT, NODE JS).
  - **Contato (`#contact`):** Formulário de contato e informações essenciais.
- **Design Responsivo:** O layout é ajustado para telas menores (baseado nas _media queries_ do seu CSS).

## 🛠️ Tecnologias Utilizadas

- **HTML5:** Estrutura semântica do projeto.
- **CSS3:** Estilização e responsividade (incluindo o uso de variáveis CSS para temas).
- **JavaScript (Vanilla e jQuery):** Interatividade e lógica do site.
- **[ion-icons](https://ionic.io/ionicons/):** Conjunto de ícones para as seções.
- **[Typed.js](https://github.com/mattboldt/typed.js/):** Biblioteca para o efeito de digitação.
- **[jQuery](https://jquery.com/):** Biblioteca para manipulação simplificada do DOM e eventos.

## 📁 Estrutura do Projeto

. ├── index.html ├── style.css ├── script.js ├── imagens/ │ ├── banner.jpg │ └── borges1.jpg └── README.md

## ⚙️ Como Executar Localmente

Siga estas instruções para obter uma cópia funcional do projeto em sua máquina local.

### Pré-requisitos

Você só precisa de um navegador web moderno (como Chrome, Firefox ou Edge).

### Passos de Instalação

1.  **Clone o Repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/seu-repositorio.git](https://github.com/seu-usuario/seu-repositorio.git)
    ```
2.  **Navegue até o Diretório:**
    ```bash
    cd seu-repositorio
    ```
3.  **Abra o Arquivo HTML:**
    Abra o arquivo `index.html` em seu navegador de preferência.

    **Alternativamente:** Você pode usar a extensão "Live Server" no VS Code para iniciar um servidor local e visualizar o projeto.

## 🎨 Personalização e Temas

O projeto utiliza variáveis CSS para facilitar a troca de cores primárias.

No arquivo `style.css`, as seguintes classes no `<body>` definem o tema principal (a variável `--bg--primary`):

- `body.corBlue` (Padrão): `#5012e0` (Azul/Roxo)
- `body.corRed`: `#ac0f0f` (Vermelho)
- `body.corOrange`: `#f1a486` (Laranja)

Para mudar o tema:

1.  Abra o arquivo `index.html`.
2.  Localize a tag `<body>`:
    ```html
    <body class="corBlue"></body>
    ```
3.  Substitua a classe `corBlue` por `corRed` ou `corOrange`.

## 🤝 Contribuições

Este é um portfólio pessoal, mas sugestões e _pull requests_ são bem-vindos! Se você encontrar um bug ou tiver uma ideia de melhoria, sinta-se à vontade para abrir uma _issue_ ou enviar uma PR.

## ✒️ Autor

**Paulo Borges**

- **LinkedIn:** [https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/](https://www.linkedin.com/in/paulo-borges-de-almeida-b543b3242/)
- **E-mail:** devborges50@gmail.com

## 📜 Licença

Este projeto está licenciado sob a Licença MIT.
Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

_Este README foi gerado com base no código-fonte do portfólio de Paulo Borges._
