
export function fetchAll() {
  return fetch('/api/v1/news/channel/Company%20News?start=0&limit=5')
    .then(res => res.json())
    .then(data => ({ 'articles': data.news }))
    // .then(::console.log)
    ;
}
