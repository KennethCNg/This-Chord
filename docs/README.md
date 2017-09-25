# This-Chord

[Heroku link][heroku]

[Trello link][trello]

[heroku]: http://this-chord.herokuapp.com/#/
[trello]: https://trello.com/b/SZSSTUUY/discord-clone

## MVP (Minimum Viable Product)

This-Chord is a web application inspired by Discord, the free voice and text chat app designed with gamers in mind. This-Chord's backend is built on Ruby on Rails and frontend on React/Redux with the following functionalities:

- [ ] Channels
- [ ] Direct messaging
- [ ] Multi-person direct messaging

## Features and Implementation

### Channels

On login, the user is brought to the first channel available. If there are no channels to join, the form to create a channel is brought up instead. Channels are made by clicking on the "+" in the CHANNELS column. Channels are open for all users to chat. However, only the administrator of the channel is able to delete the channel. On creation of a channel, the backend stores a reference to the creator/administrator. Every channel has a list on the right side of the page of the members. The channel header and message box renders to have the same name as the channel for conformity.

### Messages

Messages are made by typing into the input box. On creation, a reference to the author is saved in the backend allowing only the author to delete his/her own message. This is done by clicking on the "X" on the far right of every comment.

### Direct Messaging and Multi-person Direct Messaging

Maneuvering to direct messaging and multi-person direct messaging is done via the blue icon on the top left corner of the screen. Similar to channels, enter the direct message page will bring you to the first direct message available, else render the form to create a direct message. Because direct messages are private, only the message group of that respective person will appear. On creation of a direct message, the channel name is made up of the members of the messaging group. The backend saves direct messaging as a channel, but with a column titled "private" and boolean of true. This is how direct messages and channels are differentiated.

To return to the channel page, click on the gray icon below the blue one you clicked on earlier to enter direct messaging.



## Design Docs
* [View Wireframes][wireframes]
* [React Components][components]
* [API endpoints][api-endpoints]
* [DB schema][schema]
* [Sample State][sample-state]

[wireframes]: docs/wireframes
[components]: docs/components
[sample-state]: docs/sample_state.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup (Models, Controllers, Database, Routes) and Front End User Authentication (1 Day)

**Objective:** Functioning rails project with front-end Authentication

### Phase 2: Login Page/Signup Page (1 Day)

**Objective:** Sessions can be created via the login page and signup page. Users can be created via the signup page.

### Phase 3: Working Chatroom (2 Days)

**Objective:** Implement working Chatrooms

### Phase 4: Working Multi-person Direct Messages page && Messages (1 Day)

**Objective:** Implement DM

### Phase 5: Implement Websockets (1 Day)

**Objective:** Add the live function to chatrooms and DM's


### Bonus Features (TBD)

- [ ] Live Chat
- [ ] Landing Page
- [ ] Friends
- [ ] Photo Upload functionality
