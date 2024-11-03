//Not Found

function elementNotFound() {
    let notFound = document.createElement('section')
    notFound.id = "NotFound"

    let notFoundContainer = document.createElement('div')
    notFoundContainer.classList.add('notFoundContainer')

    let notFoundContainerH1 = document.createElement('h1')
    let notFoundContainerH1Text = document.createTextNode(';(')
    notFoundContainerH1.appendChild(notFoundContainerH1Text)
    notFoundContainer.appendChild(notFoundContainerH1)

    let notFoundContainerH2 = document.createElement('h2')
    let notFoundContainerH2Text = document.createTextNode('There is no such page here, the resource may have been moved temporarily or permanently')
    notFoundContainerH2.appendChild(notFoundContainerH2Text)
    notFoundContainer.appendChild(notFoundContainerH2)

    notFound.appendChild(notFoundContainer)

    return notFound
}

{/* 
<section id="NotFound">
    <div class="notFoundContainer">
        <h1>;(</h1>
        <h2>There is no such page here, the resource may have been moved temporarily or permanently</h2>
    </div>
</section>
*/}