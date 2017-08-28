export const fetchAllChatrooms = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/chatrooms',
  });
};

export const fetchChatroomMessages = chatroomId => {
  return $.ajax({
    method: 'GET',
    url: `/api/chatrooms/${chatroomId}`,
    data: chatroomId,
  });
};

export const createChatroom = (chatroom) => {
  return $.ajax({
    method: 'POST',
    url: '/api/chatrooms',
    data: chatroom
  });
};

export const destroyChatroom = (chatroomId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/chatrooms/${chatroomId}`,
  });
};
