import values from 'lodash/values';

export const selectMessages = (state) => {
  return (
    values(state.entities.messages)
  );
};

export const selectChatrooms = (state) => {
  return (
    values(state.entities.chatrooms)
  );
};
