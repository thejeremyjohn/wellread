const signup = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/users',
    data: { user }
  });
};

const login = (user) => {
  return $.ajax({
    method: 'GET',
    url: '/api/session',
    data: { user }
  });
};

const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/session',
  });
};
