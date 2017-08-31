export const requestCreateDM = (dm) => {
  return $.ajax({
    method: 'POST',
    url: '/api/memberships',
    data: dm
  });
};
