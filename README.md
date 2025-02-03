# API de Reservas de Eventos

## Descrição do Projeto

Esta é uma API RESTful para gerenciamento de *reservas de eventos* em um salão de festas. Permite adicionar, consultar, alterar e excluir reservas, utilizando um banco de dados em memória (um array de objetos). A API facilita o controle de eventos como casamentos, aniversários e confraternizações.

## Instalação

Para rodar o projeto localmente, siga os passos abaixo:

1. **Instale as dependências:**
   ```sh
   npm init -y
   npm install express
   ```

2. **Inicie o servidor:**
   ```sh
   node server.js
   ```

O servidor iniciará na porta `3000` por padrão.

## Uso

Para testar a API, você pode utilizar ferramentas como Postman ou Insomnia.

### Rotas da API

- **Listar Reservas** (`GET /reservations`): Retorna todas as reservas.
- **Buscar Reserva por ID** (`GET /reservations/:id`): Retorna uma reserva específica pelo ID.
- **Adicionar Nova Reserva** (`POST /reservations`): Cria uma nova reserva.
- **Atualizar Reserva Existente** (`PUT /reservations/:id`): Atualiza uma reserva existente.
- **Excluir Reserva** (`DELETE /reservations/:id`): Remove uma reserva da lista.

### Exemplo de Requisição

**Adicionar Nova Reserva (`POST /reservations`)**:
```json
{
  "clientName": "Alice Johnson",
  "eventDate": "2025-08-10",
  "eventType": "Conference"
}
```

### Testando a API

1. **Listar todas as reservas:**
   - Requisição: `GET http://localhost:3000/reservations`
   - Resposta esperada:
     ```json
     [
       {
         "id": 1,
         "clientName": "John Doe",
         "eventDate": "2025-02-15",
         "eventType": "Wedding"
       },
       {
         "id": 2,
         "clientName": "Jane Smith",
         "eventDate": "2025-02-20",
         "eventType": "Birthday"
       }
     ]
     ```

2. **Adicionar uma nova reserva:**
   - Requisição: `POST http://localhost:3000/reservations`
   - Corpo da requisição:
     ```json
     {
       "clientName": "Mary Smith",
       "eventDate": "2025-07-15",
       "eventType": "Birthday"
     }
     ```
   - Resposta esperada:
     ```json
     {
       "id": 3,
       "clientName": "Mary Smith",
       "eventDate": "2025-07-15",
       "eventType": "Birthday"
     }
     ```

3. **Atualizar uma reserva existente:**
   - Requisição: `PUT http://localhost:3000/reservations/1`
   - Corpo da requisição:
     ```json
     {
       "clientName": "John Doe",
       "eventDate": "2025-06-20",
       "eventType": "Wedding Renewal"
     }
     ```
   - Resposta esperada:
     ```json
     {
       "id": 1,
       "clientName": "John Doe",
       "eventDate": "2025-06-20",
       "eventType": "Wedding Renewal"
     }
     ```

4. **Excluir uma reserva:**
   - Requisição: `DELETE http://localhost:3000/reservations/1`
   - Resposta esperada:
     ```json
     {
       "message": "Reservation successfully removed"
     }
     ```

