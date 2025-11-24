export const getAnimes = async () => {
  const raw = await fetch('https://api.jikan.moe/v4/seasons/upcoming')
  return await raw.json()
}