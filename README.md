# Board de Tarefas

Este é um projeto de um simples "Board de Tarefas" (Task Manager) desenvolvido com HTML, CSS e JavaScript puro. Ele permite aos usuários adicionar, visualizar e marcar tarefas como concluídas, com uma interface limpa e responsiva.

## Funcionalidades

*   **Visualização de Tarefas**: Carrega automaticamente uma lista de tarefas pré-definidas na renderização inicial.
*   **Adicionar Novas Tarefas**: Formulário intuitivo para adicionar novas tarefas com nome e etiqueta (tag).
*   **Marcar como Concluída**: Botão "Concluir" para marcar tarefas como finalizadas.
*   **Feedback Visual**:
    *   O botão "Concluir" é substituído por um ícone de check verde quando a tarefa é concluída.
    *   O nome da tarefa concluída é riscado (strikethrough).
*   **Contador de Tarefas Concluídas**: Um contador na parte inferior da tela que é atualizado em tempo real.
*   **Design Responsivo**: A interface se adapta a diferentes tamanhos de tela, garantindo uma boa experiência tanto em dispositivos móveis quanto em desktops.
*   **Semântica HTML5**: Utiliza tags semânticas como `<header>`, `<main>` e `<footer>` para uma estrutura de página acessível e bem organizada.
*   **Unidades `rem`**: Todas as unidades de medida no CSS são baseadas em `rem` para melhor escalabilidade e acessibilidade.
*   **Fonte Personalizada**: Utiliza a fonte "Rubik" do Google Fonts para uma tipografia moderna.

## Tecnologias Utilizadas

*   **HTML5**: Estrutura semântica da página.
*   **CSS3**: Estilização e responsividade, com uso de variáveis CSS e unidades `rem`.
*   **JavaScript (Vanilla JS)**: Lógica de manipulação do DOM, gerenciamento de estado das tarefas e interatividade.
*   **ES Modules**: Organização do código JavaScript em módulos para melhor manutenção.

## Estrutura do Projeto

O projeto segue uma estrutura de pastas organizada para separar as preocupações:


├── index.html<br>
├── public/<br>
│   └── images/<br>
│       └── check.png  (Ícone de check para tarefas concluídas)<br>
└── src/<br>
    ├── css/<br>
    │   └── style.css  (Estilos globais da aplicação)<br>
    └── js/<br>
        ├── main.js  (Lógica principal da aplicação e inicialização)<br>
        └── components/<br>
            └── task-item.js  (Módulo para criar elementos de tarefa individuais)<br>


## Como Rodar o Projeto

Para visualizar e interagir com o projeto, siga estes passos simples:

1.  **Clone o repositório** (se aplicável) ou baixe os arquivos do projeto.
2.  **Abra o arquivo `index.html`** em seu navegador web preferido.

Ou se preferir, acesse o link abaixo: 

1.  <a href="https://rid194982gerenciadordetarefas.netlify.app">RID194982_Gerenciador-de-Tarefas<a>
