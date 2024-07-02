# CarroAPI 
> <p align="center">Este é o projeto CarroAPI, uma API Restful para gerenciamento de carros e marcas. Este projeto foi construído usando Java (SpringBoot), Typescript (Angular) e utiliza MySQL como banco de dados.</p>
![Crud básico utilizando Java spring boot e Angular 17](https://i.ibb.co/55dCbym/Captura-de-tela-2024-07-01-174327.png)

## Tecnologias Utilizadas
### Backend
- Java 17
- Spring Boot
- Spring Data JPA
- Spring Security
- MySQL
- Docker

 #### Frontend
- TypeScript
- Angular 17
- Bootstrap
- Angular Material
  
## Requisitos

- JDK 14 ou superior
- Docker

## Instalação
### 1. Clonar o repositório
 - 1.1:  Caminhe para o diretório raíz desejável e clone o reposositório
```bash

git clone git@github.com:gustavojustino/carroapi.git

```

- 1.2: Vá para o diretório do projeto
```bash
cd <diretorio_do_projeto>
```

## Inicializar backend
### 2. Crie o arquivo .env
- 2.1: Crie um arquivo .env na raiz do projeto com as seguintes variáveis:
```env
# Database  Mysql Docker
MYSQL_DATABASE=crud-carros
MYSQL_ROOT_PASSWORD=sua_senha_root
```
- 2.2: Vá para o diretório _crud-spring-boot_ e crie um arquivo .env
```env
# Database MYSQL application.yaml
DB_URL=jdbc:mysql://localhost:3306/crud-carros
DB_USERNAME=seu_usuario
DB_PASSWORD=sua_senha

# Secret Key 
SECRET_KEY=UMA_CHAVE_SECRETA_PARA_API_AQUI

```

### 3. Certifique-se que _'compose.yaml'_ está na raíz do projeto e tenha a estrutura:
```yaml
services:
  mysql:
    image: mysql:latest
    restart: always
    environment:
      MYSQL_DATABASE: ${MYSQL_DATABASE}
      MYSQL_ROOT_PASSWORD: ${MYSQL_ROOT_PASSWORD}
    ports:
      - "3306:3306"
    expose:
      - "3306"
    networks:
      rede_local:

networks:
  rede_local:
```

### 4. Suba o container na raíz do projeto:
```bash
docker-compose up
```

### 5. Execute o Spring Boot
```bash
./mvnw spring-boot:run
```

## Inicializar frontend
### 1. Certifique-se de ter o Angular CLI instalado globalmente. Se não tiver, instale usando o npm:
```bash
npm install -g @angular/cli
```

### 2. No diretório _crud-angular_, instale as dependências do projeto Angular:
```bash
cd <crud-angular>
npm install
```

### 3. Executar o Frontend
- 3.1 No diretório crud-angular, execute o comando abaixo para iniciar o servidor de desenvolvimento do Angular:
```bash
ng serve
```

> <p align=center>Acesse (http://localhost:4200) em seu navegador para ver o frontend em ação.</p>

> [!TIP]
> Por padrão, ao inicializar o backend é gerado o script data.sql que contém a inserção de 2 perfis: <br>
> login -> admin:admin <br>
> login -> user:user


> [!NOTE]
> Projeto em desenvolvimento...
