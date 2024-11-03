// Back Article

function elementBackArticle(
    date = "1 january 1970",
    ButtonLinkText = "Details>>",
    ButtonLink = "#",
    Header2Text = "article",
    HeaderText = "Article",
    imagePath = "./images/Nan.png"
    ) {
    let article = document.createElement('article')
    article.id = "back_article"
    article.style.backgroundImage = `url(${imagePath})`

    let articleHeader = document.createElement('span')
    let articleHeaderText = document.createTextNode(`${HeaderText}`)
    articleHeader.appendChild(articleHeaderText)

    let articleHeader2 = document.createElement('h2')
    let articleHeader2Text = document.createTextNode(`${Header2Text}`)
    articleHeader2.appendChild(articleHeader2Text)

    let articleButton = document.createElement('div')
    articleButton.classList.add('button')
    let articleButtonLink = document.createElement('a')
    articleButtonLink.href = `${ButtonLink}`
    let articleButtonLinkText = document.createTextNode(`${ButtonLinkText}`)
    articleButtonLink.appendChild(articleButtonLinkText)
    articleButton.appendChild(articleButtonLink)

    let articleDate = document.createElement('span')
    let articleDateText = document.createTextNode(`${date}`)
    articleDate.appendChild(articleDateText)

    article.appendChild(articleHeader)
    article.appendChild(articleHeader2)
    article.appendChild(articleButton)
    article.appendChild(articleDate)

    return article
}



/* 
<article id="back_article" style="background-image: url(./images/lastarticle.png);">
    <span>Last news</span>
    <h2>Extensions, for whom?</h2>
    <div class="button"><a href="#">Details>></a></div>
    <span>1 january 2024</span>
</article> 
*/