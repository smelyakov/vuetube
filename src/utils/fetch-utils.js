export const handleJSON = (response) => {
  const contentType = response.headers.get('content-type')

  if (contentType && contentType.includes('application/json')) {
    return response.json().then((json) => {
      return response.ok ? json : Promise.reject(json)
    })
  }

  return Promise.reject(new Error('Oops, we haven`t got JSON!'))
}

export default { handleJSON }
