changedEmail = document.querySelector('img[alt="Tiltify Logo"]').parentElement.parentElement.parentElement.parentElement.parentElement
.parentElement.parentElement.parentElement.parentElement.parentElement
.parentElement.parentElement.parentElement.parentElement.parentElement
.parentElement.outerHTML //>_> parentElements[16] pls it's all i'm asking for
.replace(/((?:[A-Z0-9]{5}-){2}[A-Z0-9]{5})/g,'<a href="https://store.steampowered.com/account/registerkey?key=$1">$1</a>')

download(changedEmail, 'jinglejam.html', 'text/html')
