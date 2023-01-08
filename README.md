<h1 align="center">
  Pj.Cash - API - https://receba.onrender.com
</h1>

## TECNOLOGIAS

- [Node.js](https://nodejs.org/en/)
- [TypeScript](https://www.typescriptlang.org/)
- [Express](https://expressjs.com/)
- [TypeORM](https://typeorm.io/)
- [JWT](https://jwt.io/)
- [Bcrypt](https://pypi.org/project/bcrypt/)
- [Postgres](https://www.postgresql.org/)

<h1 align="center">
  Rotas Usuários
</h1>

<h2 align="center">
  Cadastrar Usuário
</h2>

`POST https://receba.onrender.com/users - FORMATO DA REQUISIÇÃO`

### Todas as chaves são obrigatórias

- username: deve ser do tipo string.
- password: deve ser do tipo string.

### Retornos esperados

<i>STATUS <b>201</b> CREATED</i>

```json
{
  "username": "joao",
  "accounts": {
    "id": "3180659a-4527-4636-bbda-1e0513e413f8",
    "balance": 100
  },
  "id": "ce805479-7261-4a5b-b406-9116eb498df8"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "User Already Exist"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "Minimum 3 characters"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "deve conter ao menos 1 letra maiúscula"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "deve conter ao menos 8 dígitos"
}
```

<h2 align="center">
  Login
</h2>

`POST https://receba.onrender.com/login - FORMATO DA REQUISIÇÃO`

- username: deve ser do tipo string.
- password: deve ser do tipo string.

### Retornos esperados

<i>STATUS <b>200</b> CREATED</i>

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImpvYW8iLCJpYXQiOjE2Njg5ODA5NzQsImV4cCI6MTY2OTA2NzM3NCwic3ViIjoiMzdmNDgxZTgtOTdiMy00OGE3LTgwMjMtMWMyNDQ3ZTU3ZjBjIn0.foMtw4SQYB_aRgMP6faZTPFAMQ5pPgy1D29RtIGyxB0"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "Invalid password or email"
}
```

### Rotas que necessitam de autenticação

`GET https://receba.onrender.com/users/profile - FORMATO DA REQUISIÇÃO`

<i>Mostra nome do usuário logado.</i>

### Retornos esperados

<i>STATUS <b>200</b> OK</i>

```json
"joao"
```

<i>STATUS <b>401</b> UNAUTHORIZED</i>

```json
{
  "message": "Unauthorized"
}
```

`GET https://receba.onrender.com/users/balance - FORMATO DA REQUISIÇÃO`

<i>Mostra saldo do usuário logado.</i>

### Retornos esperados

<i>STATUS <b>200</b> OK</i>

```json
100
```

<i>STATUS <b>401</b> UNAUTHORIZED</i>

```json
{
  "message": "Unauthorized"
}
```

<h1 align="center">
  Rota de Transferência
</h1>

`POST https://receba.onrender.com/tranfers/{username} - FORMATO DA REQUISIÇÃO`

### Chave obrigatória

- value: deve ser do tipo number.
- deve-se informar o nome do usuário que receberá a transferência.

### Retornos esperados

<i>STATUS <b>201</b> CREATED</i>

```json
{
  "value": 10,
  "createdAt": "20/11/2022",
  "debitedAccount": {
    "id": "9e04727d-4048-457c-ba1e-7bd3cc1f7563",
    "balance": 75
  },
  "creditedAccount": {
    "id": "09e34b5c-6de8-4183-ae95-fe4ad4e2a4e4",
    "balance": 130
  },
  "id": "6a537722-438c-4ed1-b83e-c3d6fce42889"
}
```

<i>STATUS <b>403</b> FORBIDDEN</i>

```json
{
  "message": "Cannot send to yourself"
}
```

<i>STATUS <b>400</b> BAD REQUEST</i>

```json
{
  "message": "Insufficient funds"
}
```

<h1 align="center">
  Rotas de Histórico de Transferência
</h1>

`GET https://receba.onrender.com/tranfers/history - FORMATO DA REQUISIÇÃO`

<i>Mostra histórico de cash-in e cash-outs do usuário logado.</i>

<i>STATUS <b>200</b> OK</i>

```json
{
  "debited": [
    {
      "id": "a8295ae0-8123-4b55-ac8c-0f7c44dcdf98",
      "value": 40,
      "createdAt": "20/11/2022"
    },
    {
      "id": "6a537722-438c-4ed1-b83e-c3d6fce42889",
      "value": 10,
      "createdAt": "20/11/2022"
    }
  ],
  "credited": [
    {
      "id": "adc0ef08-4616-401a-bf7d-985d8e353498",
      "value": 25,
      "createdAt": "20/11/2022"
    }
  ]
}
```

`GET https://receba.onrender.com/tranfers/cashIn - FORMATO DA REQUISIÇÃO`

<i>Mostra histórico de cash-in.</i>

<i>STATUS <b>200</b> OK</i>

```json
[
  {
    "id": "adc0ef08-4616-401a-bf7d-985d8e353498",
    "value": 25,
    "createdAt": "20/11/2022"
  }
]
```

`GET https://receba.onrender.com/tranfers/cashOut - FORMATO DA REQUISIÇÃO`

<i>Mostra histórico de cash-outs.</i>

<i>STATUS <b>200</b> OK</i>

```json
[
  {
    "id": "a8295ae0-8123-4b55-ac8c-0f7c44dcdf98",
    "value": 40,
    "createdAt": "20/11/2022"
  },
  {
    "id": "6a537722-438c-4ed1-b83e-c3d6fce42889",
    "value": 10,
    "createdAt": "20/11/2022"
  }
]
```
