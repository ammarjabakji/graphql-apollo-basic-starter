## Query Example
```
{
friend{
  id
  firstName
  lastName,
  emails {
    email
  }
}
}
```
## Mutation Example
```
mutation {
  createFriend(
    input: {
      firstName: "Ammar"
      lastName: "Jabakji"
      gender: "Male"
      language: "Arabic"
      email:"aa@ff.com"
    }
  ) {
    id
    firstName
    lastName
    gender
    language
  }
}

```
