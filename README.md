# Servidor Express

- Para rodar a aplicação, existe a opção de rodar o comando abaixo, diretamente no terminal:
  ```npx ts-node-dev ./src``` 

- Ou podemos utilizar o comando simplificado já configurado no arquivo package.json, como:
 ```npm run dev```

## Aplicativos e Extensões

- Utilizei da extensão **thunder client**, encontrada no aplicativo do vscode, para melhor visualização e execução das funções.


## Pacotes utilizados

- ```npm i jsonwebtoken```

- ```npm i @types/jsonwebtoken -D``` para que entre como dependência de dev
  
- ```npm i typeorm```
  
- ```npm i dotenv```
  
- ```npm i express```
-  ```npm install bcrypt```
-   migration nao funciona com typeorm versao 3.12
-   tem que rodar ```npm i typeorm@0.3.10```
-   ```npm run migration:run```
-   ```npm run migration:revert```
-   ```npm run migration:generate```