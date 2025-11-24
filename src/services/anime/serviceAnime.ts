export const getAnimes = async (page: number = 1) => {
  const raw = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
  return await raw.json()
}
export const getAnimeDetail = async (mal_id: number) => {
  const raw = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
  return await raw.json()
}