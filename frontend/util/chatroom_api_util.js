export const fetchAllChatrooms = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/messages',
  });
};

export const createChatroom = (chatroom) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: chatroom
  });
};

export const destroyChatroom = (chatroomid) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/chatroom/${chatroomid}`,
  });
};
