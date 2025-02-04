# API de Reservas de Eventos

## Descrição do Projeto

API de gerenciamento de *reservas de eventos* em um salão de festas. Com as funções de adicionar, consultar, alterar e excluir reservas.

## Instalação

Para rodar o projeto:

1. **Instale as dependências:**
   ```sh
   npm init -y
   npm install express
   ```

2. **Inicie o servidor:**
   ```sh
   node server.js
   ```

O servidor roda na porta `3000`.

### Rotas:

- **Listar Reservas** (`GET /reservations`): Retorna todas as reservas.
- **Buscar Reserva por ID** (`GET /reservations/:id`): Retorna uma reserva específicada pelo ID.
- **Adicionar Nova Reserva** (`POST /reservations`): Cadastra uma nova reserva.
- **Atualizar Reserva Existente** (`PUT /reservations/:id`): Atualiza uma reserva existente.
- **Excluir Reserva** (`DELETE /reservations/:id`): Remove uma reserva.

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
   - Resposta:
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

2. **Cadastrar nova reserva:**
   - Requisição: `POST http://localhost:3000/reservations`
     ```json
     {
       "clientName": "Mary Smith",
       "eventDate": "2025-07-15",
       "eventType": "Birthday"
     }
     ```
   - Resposta:
     ```json
     {
       "id": 3,
       "clientName": "Mary Smith",
       "eventDate": "2025-07-15",
       "eventType": "Birthday"
     }
     ```

3. **Atualizar reserva existente:**
   - Requisição: `PUT http://localhost:3000/reservations/1`
     ```json
     {
       "clientName": "John Doe",
       "eventDate": "2025-06-20",
       "eventType": "Wedding Renewal"
     }
     ```
   - Resposta:
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
   - Resposta:
     ```json
     {
       "message": "Reservation successfully removed"
     }
     ```

