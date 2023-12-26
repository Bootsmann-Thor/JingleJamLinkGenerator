let titles = document.body.innerHTML.match(/ [\w ]+<br>\n                                        <small/g)
.map(function (title) {return title.substring(0,title.length-52).trim()})
let studios = document.body.innerHTML.match(/<small style="line-height:10px;color:#414146">[\w][\w\s()\.?!-]+<\/small>/g)//.slice(0,-2)
.map(function (studio) {return studio.substring(46,studio.length-8)})
let keys = document.body.innerHTML.match(/(?:(?:[A-Z0-9]{5}-){2}[A-Z0-9]{5})/g)
.map(function (key) {return 'https://store.steampowered.com/account/registerkey?key='+key})

output = []

for (let i = 0; i < studios.length; i++) {
    output.push(titles[i], studios[i], keys[i])
}

download(output.join('\n'), 'jinglejam.txt', 'plain/txt')
