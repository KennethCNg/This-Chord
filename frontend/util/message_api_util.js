export const fetchMessages = () => {
  return $.ajax({
    method: 'GET',
    url: 'api/messages',
  });
};

export const createMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: 'api/messages',
    data: message
  });
};

export const destroyMessage = (id) => {
  return $.ajax({
    method: 'DELETE',
    url: `api/messages/${id}`,
  });
};
