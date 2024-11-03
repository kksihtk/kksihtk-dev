//Navigation

function elementNav(
    currentPage = "general"
) {
    let headerNav = document.createElement('nav')
    headerNav.id = "nav"

    let headerNavUl = document.createElement('ul')
    let headerNavLiGeneral = document.createElement('li')
    let headerNavLiNews = document.createElement('li')
    let headerNavLiProducts = document.createElement('li')



    let headerNavLiGeneralA = document.createElement('a')
    headerNavLiGeneralA.href = "#GENERAL"
    if (currentPage == "general") {
        headerNavLiGeneralA.classList.add('a_current');
    }
    let headerNavLiGeneralAText = document.createTextNode('GENERAL')
    headerNavLiGeneralA.appendChild(headerNavLiGeneralAText)


    let headerNavLiNewsA = document.createElement('a')
    headerNavLiNewsA.href = "#NEWS"
    if (currentPage == "news") {
        headerNavLiNewsA.classList.add('a_current');
    }
    let headerNavLiNewsAText = document.createTextNode('NEWS')
    headerNavLiNewsA.appendChild(headerNavLiNewsAText)


    let headerNavLiProductsA = document.createElement('a')
    headerNavLiProductsA.href = "#PRODUCTS"
    if (currentPage == "products") {
        headerNavLiProductsA.classList.add('a_current');
    }
    let headerNavLiProductsAText = document.createTextNode('PRODUCTS')
    headerNavLiProductsA.appendChild(headerNavLiProductsAText)



    headerNavLiGeneral.appendChild(headerNavLiGeneralA)
    headerNavLiNews.appendChild(headerNavLiNewsA)
    headerNavLiProducts.appendChild(headerNavLiProductsA)

    headerNavUl.appendChild(headerNavLiGeneral)
    headerNavUl.appendChild(headerNavLiNews)
    headerNavUl.appendChild(headerNavLiProducts)

    headerNav.appendChild(headerNavUl)

    return headerNav
}