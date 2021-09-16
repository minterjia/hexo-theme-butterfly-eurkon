hexo.extend.helper.register('catalog_list', function (type) {
  html = ``
  const theme = hexo.theme.config
  hexo.locals.get(type).map(function (item) {
    html += `
    <div class="catalog-list-item" id="${item.name}">
      <a href="/${type}/${item.name}/">${theme.emoji[item.name] + [item.name]}<sup>${item.length}</sup></a>
    </div>
    `
  })
  return html
})