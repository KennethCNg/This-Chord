# Schema Information

## users
column name     | data type | details
----------------|-----------|-----------------------
id              | integer   | not null, primary key
username        | string    | not null, indexed, unique
password_digest | string    | not null
session_token   | string    | not null, indexed, unique

## messages
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
body        | text      | not null
author_id   | integer   | not null, foreign key (references users), indexed
chatroom_id | integer   | not null, foreign key (references chatrooms), indexed

## chatrooms
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
name        | string    | not null
private     | boolean   | not null
admin_id    | integer   | not null, foreign key (references users), indexed

## memberships
column name | data type | details
------------|-----------|-----------------------
id          | integer   | not null, primary key
member_id     | integer   | not null, foreign key (references users), indexed
channel_id      | integer   | not null, foreign key (references channels), indexed
