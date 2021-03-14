<h1> Projeto estágio back-end Nave </h1> 
<h2> Descrição do projeto </h2>
<p> Projeto realizado para o teste de admissão da vaga de estágio em Back-end da empresa nave.</p>
<p> </p>

<p align="center">
 <a href="#status">Status do projeto</a> •
 <a href="#objetivo">Objetivo</a> •
 <a href="#features">Features</a> • 
 <a href="#prerequisitos">Pré-requisitos</a> • 
 <a href="#rodando">Rodando o servidor</a> • 
 <a href="#tecnologias">Tecnologias</a> • 
 <a href="#logica">Exercicios de lógica</a> •
 <a href="#postman">Documentação Postman</a> •
 <a href="#autor">Autor</a>
</p>

<h2 id='status'>Status do projeto</h2>
<p>Finalizado.</p>

<h2>Objetivo</h2>
<p>O objetivo principal deste projeto é a admissão para a vaga de estágio em Back-end na empresa Nave.</p>
<h3>Objetivos especificos</h3>
<p>O objetivo especifico deste projeto é a implementação de uma API de um sistema que consiste
em um banco de dados dos navers possuindo informações como: nomes, datas de nascimento, cargo, tempo de empresa e projeto que participou. 
A implementação desta API deve seguir o padrão RESTful e as respostas da API devem ser em formato JSON.</p>


<h2 id='features'>Features</h2>
<ul>
<li>[x] Navers
<ul>
<li>[x] Rota para listagem dos Navers./li>
<li>[x] Rota para detalhar informações de um único naver através de seu identificador</li>
<li>[x] Rota de Criação de Naver</li>
</ul>
</li>

<li>[x] Projects
<ul>
<li>[x] Rota para listagem dos Projetos</li>
<li>[x] Rota para detalhar um projeto</li>
<li>[x] Rota de Criação de Projeto</li>
</ul>
</li>
</li>
</ul>

<h2 id='prerequisitos'>Pré-requisitos</h2>
<p> Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
<a href="www.github.com">Git,</a> <a href="https://nodejs.org/en/">Nodejs</a> e o <a href="https://www.mysql.com/">MySQL.</a>
</p>

<p>Além disto é bom ter um editor para trabalhar com o código. Este projeto foi utilizado o editor 
<a href="https://code.visualstudio.com/">VScode</a>.</p>

<h2 id='rodando'>Rodando o servidor</h2>

~~~bash
# Clonar o repositório
$ git clone https://github.com/wellkamp/projeto-nave.git

# Acesse a pasta do projeto no terminal/cmd
$ cd projeto-nave

# Acessar a pasta API
$ cd api

# Acessar a pasta config
$ cd config

# Acessar o arquivo JSON para configuração do banco
config.json

# Retornar para pasta api
$ cd ..

# Instalar as dependências do projeto
$ npm install

# Rodar as migrações
$ npx sequelize-cli db:migrate

# É possivel popular o banco com alguns registros
$ npx sequelize-cli db:seed:all

# Executar a aplicação
$ npm start

~~~


<h2>Tecnologias</h2>
<p>As seguintes Tecnologias foram usadas:</p>
<ul>
<li><a href="https://pt.wikipedia.org/wiki/JavaScript">Javascript;</a></li>
<li><a href="https://nodejs.org/en/">NodeJS;</a></li>
<li><a href="https://sequelize.org/master/">Sequelize;</a></li>
<li><a href="https://www.postman.com/">Postman;</a></li>
<li><a href="https://www.mysql.com/">MySQL.</a></li>
</ul>

<h2 id='logica'>Exercicios de lógica</h2>
<p>É possivel acessar os exercicios de lógica através deste link: <a href="https://codesandbox.io/s/exercicios-estagio-nave-fk1q7">Codesandbox</a>.<p>

<h2 id='postman'>Documentação da API no Postman</h2>
<p>É possivel acessar a documentação através deste link: https://www.getpostman.com/collections/d69a16b62c94c9f4f954 </p>

<h2>Autor</h2>
<p>
 <img style="border-radius: 50%;" src="https://github.com/wellkamp.png " width="100px;" alt=""/>
 <br />
 <sub><b>Wellington Porto</b></sub></p>

[![Linkedin Badge](https://img.shields.io/badge/-Wellington-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/wellington-weikamp-porto-8a00b295/)](https://www.linkedin.com/in/wellington-weikamp-porto-8a00b295/) 
[![Gmail Badge](https://img.shields.io/badge/-wellkamp@gmail.com-c14438?style=flat-square&logo=Gmail&logoColor=white&link=mailto:wellkamp@gmail.com)](mailto:wellkamp@gmail.com)
