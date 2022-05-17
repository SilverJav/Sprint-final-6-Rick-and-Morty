const URL = 'https://rickandmortyapi.com/api/character'

export const getApiRick = async (value)=>{
    const request = await fetch(URL)
    const response = request.json
    return response
}