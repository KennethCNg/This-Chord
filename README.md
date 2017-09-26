# This-Chord

[Live link][heroku]

[heroku]: http://this-chord.herokuapp.com

This-Chord is a single page web application inspired by Discord, the free voice and text chat app designed with gamers in mind. This-Chord's backend is built on Ruby on Rails and frontend on React/Redux with the following functionalities:


  * Real-time chat functionality utilizing Pusher's API bidirectional TCP connection
  * Self-implemented authorization leveraging BCrypt to hash passwords and Base64 to generate session token
  * Creation of deletion of public channels open for anybody and everybody to join and talk to one another. Direct messages can also be made to ensure some conversations are kept private.

## Features

### User Authentication

![screenshot](./app/assets/images/auth.gif)

On first entering This-Chord, you will be prompted to either Login, Create a New Account, or sign in as Guest. The authentication utilizes a Protected Route that ensures users who attempt to access the inners of This-Chord are re-routed to the Login page.


#### Signup

On creation of an account, The username and password is taken in via the session form and sent to the backend. The password is then hashed using the BCrypt gem and saved as the password digest.

#### Login and Logout

Data is taken in via the session form and received in the backend where the username is checked via the database, and the password is hashed and checked against the password digest.

If the user is found in the database and the password is correct, a session token is generated using Base64. On Logout, the user's session token is set to null, and the database resets the session token.

#### Channel Creation

![screenshot](./app/assets/images/create_channel.gif)

Creating a channel is simple! Simply click the white + and you will be prompted to create a channel of your choosing.

A channel is owned by an administrator. Only the administrator may delete a chatroom. This is done by click the white X next to the channel name.

#### Direct Messages Creation

![screenshot](./app/assets/images/create_dm.gif)

Creating a direct message is just as easy! You can navigate to the direct messages via the blue top left icon. Then similar to creating a channel, click the white +. Simply choose the users you would like to start a direct message with.

The backend treats chatrooms and direct messages as the same except a chatroom has a privacy column that stores a 'false' boolean whereas a direct message stores 'true'.

### Get Started

1. Install dependencies by running `npm install` followed by `bundle install`
2. This-Chord uses PostgreSQL. Start your database by running `bundle exec rake db:setup`.
3. Start your server by running `bundle exec rails server`


### Coming Soon To a This-Chord Near You

1. Servers. These hold a collection of channels. Servers have many channels, and channels have many messages.
2. Emojis!
3. Changing avatars
