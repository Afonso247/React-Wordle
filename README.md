# React Wordle

Bem-vindo ao meu Wordle, meu primeiro projeto feito utilizando o React! Este é um guia rápido para ajudá-lo a começar a utilizá-lo. Certifique-se de seguir essas etapas para configurar e executar o projeto em sua máquina local.

## Pré-requisitos

Antes de começar, certifique-se de que você tenha o Node.js e o npm (gerenciador de pacotes do Node.js) instalados em sua máquina. Você pode baixá-los em [nodejs.org](https://nodejs.org/).

## Instalação

1. Clone este repositório em sua máquina local usando o seguinte comando:

~~~
git clone https://github.com/seu-usuario/seu-projeto.git
~~~

2. Navegue até o diretório do projeto:

~~~
cd seu-projeto
~~~

3. Instale as dependências do projeto usando o npm:

~~~
npm install
~~~

## Configurando o servidor JSON

Para que o sistema funcione normalmente, é necessário executar o servidor JSON dentro da pasta do projeto. Abra um terminal dentro da pasta e execute o seguinte comando:

~~~
json-server ./data/db.json --port 3001
~~~

Isso iniciará o servidor JSON na porta 3001.

## Iniciando o projeto

Agora que o servidor JSON está em execução, abra outro terminal, navegue até o diretório do projeto e execute o seguinte comando para iniciar o projeto:

~~~
npm run start
~~~

Isso iniciará o projeto e abrirá uma janela do seu navegador padrão, onde você poderá ver o projeto em ação.

## Acessando o projeto

Após seguir as etapas acima, você poderá acessar o projeto em seu navegador, normalmente em http://localhost:3000 (certifique-se de que o servidor JSON esteja em execução na porta 3001).

Com tudo isso feito, você tem acesso ao meu Wordle! Divirta-se jogando e, se quiser, desenvolvendo ao aplicar as suas próprias features. ;)

Se você tiver alguma dúvida ou encontrar algum problema, não hesite em abrir uma issue!
