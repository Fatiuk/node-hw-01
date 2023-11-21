# Получаем и выводим весь список контактов в виде таблицы (console.table)

![Contacts list](images/all.png)

```sh
node index.js --action list
```

# Получаем контакт по id - выводим в консоль объект контакта или null, если контакта с таким id не существует.

![Get contact by ID](images/byid.png)

```sh
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
```

# Добавляем контакт и выводим в консоль созданный контакт

![Added new contact](images/byid.png)

```sh
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

# Удаляем контакт и выводим в консоль удаленный контакт или null, если контакта с таким id не существует.

![Remove contact by ID](images/byid.png)

```sh
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
```
