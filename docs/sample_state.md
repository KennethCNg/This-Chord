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
     servers: {
      1: {
        id: 1,
        name: "server1",
        channel_id: [1, 2, 3],
        }
      }
      channels: {
        1: {
          id: 1,
          name: "channel1",
          user_id: [1, 2, 3],
        }
        1: {
          id: 1,
          name: "channel1",
          user_id: [1, 2, 3],
        }
        2: {
          id: 2,
          name: "channel2",
          user_id: [1, 2, 3],
        }
        1: {
          id: 1,
          name: "channel3",
          user_id: [1, 2, 3],
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
