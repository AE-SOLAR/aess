https://devshop.ae-solar.com/api/v1/auth/signup```

В качестве data передается объект:
```JSON
{
  "username": "Janusch",
  "password": "123123123",
  "email": "janusch@ae-solar.com"
}```

---

*Авторизация пользователя*
```POST
https://devshop.ae-solar.com/api/v1/auth/signin```

В качестве data передается объект:
```JSON
{
  "username": "Janusch",
  "password": "123123123!"
}```

В случае успешной авторизации в ответ получите объект:
```JSON
{
  "username": "Janusch",
  "email": "janusch@ae-solar.com",
  "roles": [
    "ROLE_ADMIN"
  ],
  "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVSJ9.eyJpZPI6IjAxOTBjNGEzLTgzNGItNzY2ZS1iNTIzLTZiMjE0NjUwZDM3YiIsImlhdCI6MTcyMTI4NTk3NSwiZXhwIjoxNzIyMTQ5OTc1fQ.AYEwkPmsMGjOSMIaRYxNw48_rrDOx6IhwNmzjPbv37I"
}```

"accessToken" - токен, который необходимо передавать в заголовке запроса для авторизации. Почитайте что такое JWT токен и как его передавать правильно в заголовке запроса.

---

*Список панелей*
```GET
https://devshop.ae-solar.com/api/v1/panels```

*В качестве фильтров можно указывать следующие параметры, как один, так и несколько:*
- series
- model
- cell
- cover
- design

Например: 

- Все Comet
```GET
https://devshop.ae-solar.com/api/v1/panels?series=comet```

- Comet 144BDE
```GET
https://devshop.ae-solar.com/api/v1/panels?series=comet&model=144```

В ответ будете получать массив объектов панелей. Тут его не буду полностью расписывать, запросите и посмотрите какие там есть поля. 