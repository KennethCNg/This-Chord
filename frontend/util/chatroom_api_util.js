export const fetchAllChatrooms = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/chatrooms',
  });
};

export const createChatroom = (chatroom) => {
  return $.ajax({
    method: 'POST',
    url: '/api/chatrooms',
    data: chatroom
  });
};

export const destroyChatroom = (chatroomid) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/chatroom/${chatroomid}`,
  });
};
