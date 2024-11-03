//Footer

let EngLangCopyrightText = "In the same way, the new model of organizational activity requires determining and clarifying the corresponding conditions of activation. One should not, however, forget that the current structure of the organization plays an important role in the formation of new proposals. The task of the organization, especially the beginning of everyday work on the formation of a position allows us to evaluate the significance of new proposals."

function elementFooter() {
    let footer = document.createElement('footer')
    footer.id = "footer"

    let footerLogo = document.createElement('div')
    footerLogo.classList.add('footer-logo')
    let footerLogoSpan = document.createElement('span')
    let footerLogoSpanText = document.createTextNode('kksihtk')
    footerLogoSpan.appendChild(footerLogoSpanText)
    footerLogo.appendChild(footerLogoSpan)

    let footerNav = elementNav()
    
    let footerCopyright = document.createElement('p')
    let footerCopyrightText = document.createTextNode(`${EngLangCopyrightText}`)
    footerCopyright.appendChild(footerCopyrightText)

    footer.appendChild(footerLogo)
    footer.appendChild(footerNav)
    footer.appendChild(footerCopyright)

    return footer
}



{/* 
<footer id="footer">
    <div class="footer-logo"><span>kksihtk</span></div>
    <nav id="nav">
        <ul>
            <li><a href="#GENERAL" class="a_current">GENERAL</a></li>
            <li><a href="#NEWS" class="">NEWS</a></li>
            <li><a href="#PRODUCTS" class="">PRODUCTS</a></li>
        </ul>
    </nav>
    <p>Равным образом новая модель организационной деятельности требуют определения и уточнения соответствующий условий активизации. Не следует, однако забывать, что сложившаяся структура организации играет важную роль в формировании новых предложений. Задача организации, в особенности же начало повседневной работы по формированию позиции позволяет оценить значение новых предложений.</p>
</footer> 
*/}