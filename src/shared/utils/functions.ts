export const changeAppLanguage = (lng: string) => {
  localStorage.setItem('i18nextLng', lng)
}
export const smoothScroll = (e: any, path: string) => {
  let scroll = document.getElementById(path)
  e.preventDefault()
  scroll && scroll.scrollIntoView({ behavior: 'smooth', block: 'start' })
}
