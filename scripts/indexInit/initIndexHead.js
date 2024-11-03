//Initializate head GENERAL (index)

let EngLangTitle = "GENERAL"

let metaCharset = document.createElement('meta')
metaCharset.charset = "UTF-8"

let metaView = document.createElement('meta')
metaView.name = "viewport"
metaView.content = "width=device-width, initial-scale=1.0"

let title = document.createElement('title')
let titleText = document.createTextNode(`${EngLangTitle}`)
title.appendChild(titleText)

let linkGoogleFont = document.createElement('link')
linkGoogleFont.rel = "stylesheet"; linkGoogleFont.type = "text/css"
linkGoogleFont.href = "./styles/googleFontsPreloaded/Jura/jura.css"


//    STYLES


let linkStyle = document.createElement('link')
linkStyle.rel = "stylesheet"
linkStyle.href = "./styles/style.css"

let linkStyleHeader = document.createElement('link')
linkStyleHeader.rel = "stylesheet"
linkStyleHeader.href = "./styles/utils/header.css"

let linkStyleBackArticle = document.createElement('link')
linkStyleBackArticle.rel = "stylesheet"
linkStyleBackArticle.href = "./styles/utils/backArticle.css"

let linkStyleClouds = document.createElement('link')
linkStyleClouds.rel = "stylesheet"
linkStyleClouds.href = "./styles/utils/clouds.css"

let linkStyleNewsletter = document.createElement('link')
linkStyleNewsletter.rel = "stylesheet"
linkStyleNewsletter.href = "./styles/utils/newsletter.css"

let linkStyleFooter = document.createElement('link')
linkStyleFooter.rel = "stylesheet"
linkStyleFooter.href = "./styles/utils/footer.css"


//    Appending


document.head.appendChild(metaCharset)
document.head.appendChild(metaView)
document.head.appendChild(title)
document.head.appendChild(linkGoogleFont)

document.head.appendChild(linkStyle)
document.head.appendChild(linkStyleHeader)
document.head.appendChild(linkStyleBackArticle)
document.head.appendChild(linkStyleClouds)
document.head.appendChild(linkStyleNewsletter)
document.head.appendChild(linkStyleFooter)



// <meta charset="UTF-8">
// <meta name="viewport" content="width=device-width, initial-scale=1.0">
// <title>GENERAL</title>
// <link rel="stylesheet" type="text/css" href="./styles/googleFontsPreloaded/Jura/jura.css" />
// <link rel="stylesheet" href="./styles/style.css">
// <link rel="stylesheet" href="./styles/utils/header.css">