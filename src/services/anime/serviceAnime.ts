export const getAnimeSeasons = async (page: number = 1) => {
  const raw = await fetch(`https://api.jikan.moe/v4/seasons/now?page=${page}`)
  return await raw.json()
}
export const getAnimeById = async (mal_id: number) => {
  const raw = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/full`)
  return await raw.json()
}

export const getStreamingById = async (mal_id: number) => {
  const raw = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/streaming`)
  return await raw.json()
}