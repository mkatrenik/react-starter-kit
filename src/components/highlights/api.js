
export function fetchHighlights({ channel } = {}) {
  return fetch('/api/v1/news/channel/Company%20News/highlights?on_home_page=true&channel=' + channel)
    .then(res => res.json())
    .then(data => ({ 'articles_highlights': data.news_highlights }))
    // .then(::console.log)
    ;
}
