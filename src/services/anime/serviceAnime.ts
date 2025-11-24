export const getAnimes = async (page: number = 1) => {
  const raw = await fetch(`https://api.jikan.moe/v4/anime?page=${page}`)
  return await raw.json()
}