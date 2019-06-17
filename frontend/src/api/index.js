const api = "http://localhost:3001"

const headers = {
  'Authorization': 'udacity'
}

export function getInitialData () {
  return Promise.all([
    _getCategories(),
    _getPosts(),
  ]).then(([categories, posts]) => ({
    categories,
    posts
  }))
}

export function deletePost (id) {
  return fetch(`${api}/posts/${id}`,
    {
      headers,
      method: 'DELETE'
    })
}

function _getCategories () {
  return fetch(`${api}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

function _getPosts () {
  return fetch(`${api}/posts`, { headers })
    .then(res => res.json())
}
