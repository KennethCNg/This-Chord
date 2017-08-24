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
   },
   session: {
     currentUser: {
       id: 1,
       username: "Test1"
     },
   }
   ui: {
     errors: {
       ...
     },
     modals: {
       ...
     }
   }
};
```
