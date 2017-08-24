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
        channel_id: 1
      }
    },
     channels: {
      1: {
        id: 1,
        name: "channel1",
        member_id: [1, 2, 3],
      }
      2: {
        id: 2,
        name: "channel2",
        member_id: [1, 2, 3],
      }
    }
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
     dropdown: {
       ...
     }
   }
};
```
