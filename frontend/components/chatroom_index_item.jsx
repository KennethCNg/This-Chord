import React from 'react';
import { Link } from 'react-router-dom';


const ChatroomIndexItem = ({ chatroom }) => (
  <li>
    <Link to={`/chatrooms/${chatroom.id}`}>
      <span>{chatroom.name}</span>
    </Link>
  </li>
);

export default ChatroomIndexItem;
