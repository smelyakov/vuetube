export const handleJSON = async (response: Response) => {
  const contentType = response.headers.get('content-type')

  if (contentType && contentType.includes('application/json')) {
    const json = await response.json()
    return response.ok ? json : Promise.reject(json)
  }

  return Promise.reject(new Error('Oops, we haven`t got JSON!'))
}

export default { handleJSON }
