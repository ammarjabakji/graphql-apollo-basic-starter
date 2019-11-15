
## Mutation Example
```
mutation {
  createFriend(
    input: {
      firstName: "Ammar"
      lastName: "Jabakji"
      gender: MALE
      age: 30
      language: "Arabic"
      email: "aa@ff.com"
      contacts: [
        { firstName: "dd", lastName: "yyy" }
        { firstName: "dd", lastName: "yyy" }
      ]
    }
  ) {
    id
    firstName
    lastName
    gender
    age
    language
    contacts {
      firstName
      lastName
    }
  }
}


```

## Query Example
note that the ID has been returned from the above mutation

```
{
  getFriend(id:"9b528321822bbdd53d89"){
    id
    firstName
    lastName
    gender
    age
    language
    contacts {
      firstName
      lastName
    }
  }
}

```