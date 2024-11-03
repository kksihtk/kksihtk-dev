// Header

function elementHeader(
    logoText = "kksihtk",
    currentPage = "general"
    ) {
    let sectionHeader = document.createElement('header')
    sectionHeader.id = "header"

    let headerLogo = document.createElement('div')
    headerLogo.classList.add('logo')
    let headerLogoSpan = document.createElement('span')
    let headerLogoSpanText = document.createTextNode(logoText)
    headerLogoSpan.appendChild(headerLogoSpanText)

    headerLogo.appendChild(headerLogoSpan)

    headerNav = elementNav("general")

    headerSelector = elementSelect()

    sectionHeader.appendChild(headerLogo)
    sectionHeader.appendChild(headerNav)
    sectionHeader.appendChild(headerSelector)



    return sectionHeader
}

// document.getElementById('page').appendChild(elementHeader())