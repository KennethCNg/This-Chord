## Component Hierarchy

#### Q: What views are required?
#### A: This clone will have three main pages:
  1) login/sign-up page
  2) home page/main channel page
  3) direct messaging page

#### Q: How can these views be broken down into React components? Think boxes-in-boxes.
#### A: Please refer to the uploaded PNG for a better representation.

  Login/sign-up page

  * App

    * navbar

    * login/signup form

    * guest login button

    * cancel button to redirect back to previous page

  Home/ Channel Page

  * App

    * channels Index

      * channel-item

    * Direct-message Index

      * Direct-message-item

    * chat box

      * message-box

    * log-out button

    * user search bar

  New Channel Page

  * App

    * new channel form

    * log-out button

    * cancel button to redirect back to previous page

 Direct Messaging Page

  * App

    * channels Index

      * channel-item

    * Direct-message Index

      * Direct-message-item

    * chat box

    * message-box

    * log-out button

    * user search bar

#### Q: Which components can be reused in different components?
#### A: The channels index, friends index, and respective items will both be reused.

#### Q: What data does each component need from our redux state?
#### A: The login page will require a username and password. The sign-up page will require a username, password, and email. These will require a connection to the store. The home page and direct messaging page will require the current user's ID, a channel ID, a message ID.. The channel index and friends index will be connected to the store, but their respective items can receive data via the props.
