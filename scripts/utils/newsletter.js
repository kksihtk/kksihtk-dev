// Newsletter

let EngLangNewsletterHeaderText = "Subscribe to the newsletter to be the first to know about everything"
let EngLangNewsletterFormButtonText = "Sudbscribe"

function elementNewsletter() {
    let newsletter = document.createElement('section')
    newsletter.id = "newsletter"

    let newsletterHeader = document.createElement('div')
    newsletterHeader.classList.add('newsletter-header')
    let newsletterHeaderH3 = document.createElement('h3')
    let newsletterHeaderH3Text = document.createTextNode(`${EngLangNewsletterHeaderText}`)
    newsletterHeaderH3.appendChild(newsletterHeaderH3Text)
    newsletterHeader.appendChild(newsletterHeaderH3)

    let newsletterFormDiv = document.createElement('div')
    newsletterFormDiv.classList.add('newsletter-form')
    let newsletterForm = document.createElement('form')
    newsletterForm.action = "input"
    newsletterForm.method="post"

    let newsletterFormInput = document.createElement('input')
    newsletterFormInput.type = "email"
    newsletterFormInput.name = "sss"
    newsletterFormInput.id = "newsletter-form-input"
    newsletterFormInput.placeholder = "youreemail@mail.com"

    let newsletterFormButton = document.createElement('button')
    newsletterFormButton.type = "submit"
    let newsletterFormButtonText = document.createTextNode(`${EngLangNewsletterFormButtonText}`)
    newsletterFormButton.appendChild(newsletterFormButtonText)

    newsletterForm.appendChild(newsletterFormInput)
    newsletterForm.appendChild(newsletterFormButton)


    newsletterFormDiv.appendChild(newsletterForm)

    newsletter.appendChild(newsletterHeader)
    newsletter.appendChild(newsletterFormDiv)

    return newsletter
}

{/* 
<section id="newsletter">

    <div class="newsletter-header">
        <h3>Subscribe to the newsletter to be the first to know about everything</h3>
    </div>

    <div class="newsletter-form">
        <form action="input" method="post">
            <input type="email" name="sss" id="newsletter-form-input" placeholder="youreemail@mail.com">
            <button type="submit">Subscribe</button>
        </form>
    </div>

</section> 
*/}