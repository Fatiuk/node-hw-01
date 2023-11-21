# Get and display the entire list of contacts in a table format (console.table)

![Contacts list](/images/all.jpg)

```sh
node index.js --action list
```

# Retrieve a contact by ID - display the contact object in the console or null if a contact with that ID does not exist.

![Get contact by ID](/images/byid.jpg)

```sh
node index.js --action get --id 05olLMgyVQdWRwgKfg5J6
```

# Add a new contact and display the created contact in the console.

![Added new contact](/images/byid.jpg)

```sh
node index.js --action add --name Mango --email mango@gmail.com --phone 322-22-22
```

# Remove a contact and display the deleted contact in the console or null if a contact with that ID does not exist.

![Remove contact by ID](/images/byid.jpg)

```sh
node index.js --action remove --id qdggE76Jtbfd9eWJHrssH
```
