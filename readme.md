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
 {  getOneFriend(id:"5dd7f5b9f5a44c30dc0dd73e"){
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

## Update Example

```
mutation {
  updateFriend(
    input: {
      id: "5dd7f8543dab2b31765987fc"
      firstName: "Mudar"
      age: 29
      language: "Arabic"
    }
  ) {
    firstName
    lastName
    gender
    age
  }
}
```

## Delete Example

```
mutation {
  deleteFriend(id:"PUT ID HERE")
}
```
