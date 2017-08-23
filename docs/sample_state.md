## Sample State Shape

```JS
{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Test1',
        chatroom_ids: [1, 2]
        }
    },
     messages: {
      1: {
        id: 1,
        body: "testing",
        author_id: 1,
        chatroom_id: 1
        }
    },
     chatrooms: {
      1: {
        id: 1,
        name: "chatroom1",
        member_id: [1, 2, 3],
        }
      },
      errors: {
        login: ["Incorrect username/password combination"],
        signup: ["Username/password cannot be blank"],
        messageForm: ["Message body cannot be blank"]
        }
   },
   session:{
     currentUser: {
       id: 1,
       username: "Test1"
     },
     errors: []
   }
};
```
