# Plataforma Jest

Você pode escolher recursos específicos do Jest e usá-los como pacotes independentes. Aqui está uma lista dos pacotes disponíveis:

- **getChangedFilesForRoots:** retorna uma promessa que resolve um objeto com os arquivos e repositórios alterados.
- **findRepos:** retorna uma promessa que resolve um conjunto de repositórios contidos no caminho especificado.

[Para mais informações leia o README-me.](https://github.com/jestjs/jest/blob/main/packages/jest-changed-files/README.md)

### Exemplo

<code>
const {getChangedFilesForRoots} = require('jest-changed-files');

// imprime o conjunto de arquivos modificados desde o último commit no repositório atual
getChangedFilesForRoots(['./'], {
lastCommit: true,
}).then(result => console.log(result.changedFiles));
</code>

## Resumo

O [jest-changed-files](https://jestjs.io/pt-BR/docs/jest-platform) é a API da ferramenta JEST, a mesma que é executada no terminal de testes para verificação dos testes e execução dos mesmos.

É util para criar aplicações independentes ou integrar em sistemas externos que precisam utilizar as funcionalidades da ferramenta JEST internamente.

[Mais informações: ](https://jestjs.io/pt-BR/docs/jest-platform)
