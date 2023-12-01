# Desafio 01

Desafio referente ao módulo: Fundamentos do Node.js

## Introdução

Faaala Dev,

Sejam todos muito bem-vindos ao primeiro desafio da trilha de Node.js do Ignite.

Nesse desafio você reforçará de forma prática os **conceitos** que aprendemos nesse módulo.

Como se trata de um desafio, ele necessita de alguns conhecimentos além dos abordados nesse módulo, então é importante que tenha autonomia para conseguir pesquisar essas coisas caso não saiba como resolver. Por isso, lembre-se, t**enha calma** e **acredite no seu processo.**

O aprendizado daqui é muito importante e com certeza você conseguirá sair com muito conhecimento bacana 💜

## Sobre o desafio

Nesse desafio você desenvolverá uma API para realizar o CRUD de suas *tasks* (tarefas).

A API deve conter as seguintes funcionalidades:

- Criação de uma task 🟢 
- Listagem de todas as tasks 🟢
- Atualização de uma task pelo `id` 🟡 
- Remover uma task pelo `id` 🟢
- Marcar pelo `id` uma task como completa
- E o verdadeiro desafio: Importação de tasks em massa por um arquivo CSV

### Rotas e regras de negócio

Antes das rotas, vamos entender qual a estrutura (propriedades) que uma task deve ter:

- `id` - Identificador único de cada task 
- `title` - Título da task
- `description` - Descrição detalhada da task
- `completed_at` - Data de quando a task foi concluída. O valor inicial deve ser `null`
- `created_at` - Data de quando a task foi criada.
- `updated_at` - Deve ser sempre alterado para a data de quando a task foi atualizada.

Rotas:

- `POST - /tasks` - 🟢 Concluido
    
    🟢  Deve ser possível criar uma task no banco de dados, enviando os campos `title` e `description` por meio do `body` da requisição.
    
    🟢  Ao criar uma task, os campos: `id`, `created_at`, `updated_at` e `completed_at` devem ser preenchidos automaticamente, conforme a orientação das propriedades acima.
    
- `GET - /tasks`
    
    🟢  Deve ser possível listar todas as tasks salvas no banco de dados.
    
    🟢 Também deve ser possível realizar uma busca, filtrando as tasks pelo `title` e `description`
    
- `PUT - /tasks/:id`
    
    Deve ser possível atualizar uma task pelo `id`.
    
    No `body` da requisição, deve receber somente o `title` e/ou `description` para serem atualizados.
    
    Se for enviado somente o `title`, significa que o `description` não pode ser atualizado e vice-versa.
    
    Antes de realizar a atualização, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `DELETE - /tasks/:id`
    
    Deve ser possível remover uma task pelo `id`.
    
    Antes de realizar a remoção, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    
- `PATCH - /tasks/:id/complete`
    
    Deve ser possível marcar a task como completa ou não. Isso significa que se a task estiver concluída, deve voltar ao seu estado “normal”.
    
    Antes da alteração, deve ser feito uma validação se o `id` pertence a uma task salva no banco de dados.
    

### E a importação do CSV?

Normalmente em uma API, a importação de um CSV acontece enviando o arquivo pela rota, por meio de outro formato, chamado `multipart/form-data`.

Como ainda não vimos isso em aula, a importação será feita de outra forma. Acesse a página abaixo para a explicação:

[Criação via CSV com Stream](https://www.notion.so/Cria-o-via-CSV-com-Stream-21ba6d279991473792787d9265212181?pvs=21)

## Indo além

Algumas sugestões do que pode ser implementado:

- Validar se as propriedades `title` e `description` das rotas `POST` e `PUT` estão presentes no `body` da requisição.
- Nas rotas que recebem o `/:id`, além de validar se o `id` existe no banco de dados, retornar a requisição com uma mensagem informando que o registro não existe.

## Entrega

Após concluir o desafio, você deve enviar a URL do seu código no GitHub para a plataforma. 

Além disso, que tal fazer um post no LinkedIn compartilhando o seu aprendizado e contando como foi a experiência?
É uma excelente forma de demonstrar seus conhecimentos e atrair novas oportunidades!

Feito com 💜 por Rocketseat 👋

## Repositório de consulta

Antes de acessar o repositório com o desafio concluído, recomendamos fortemente que tente realizar o desafio.

Caso tenha dúvidas/dificuldades técnicas, temos o fórum para te ajudar.

[GitHub - rocketseat-education/challenge-ignite-nodejs-01-fundamentos-nodejs: Desafio do módulo Fundamentos do Node.js](https://github.com/rocketseat-education/challenge-ignite-nodejs-01-fundamentos-nodejs)
