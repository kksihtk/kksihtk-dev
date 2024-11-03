//Header selector

function elementSelect() {
    let headerSelector = document.createElement('div')
    headerSelector.classList.add('selector')

    let headerSelectorSelect = document.createElement('select')
    headerSelectorSelect.classList.add('lang-selector')
    headerSelectorSelect.id = "lang-selector"

    let headerSelectorSelectOptionENG = document.createElement('option')
    headerSelectorSelectOptionENG.value = 'ENG'
    let headerSelectorSelectOptionENGText = document.createTextNode('ENG')
    headerSelectorSelectOptionENG.appendChild(headerSelectorSelectOptionENGText)
    headerSelectorSelect.appendChild(headerSelectorSelectOptionENG)

    let headerSelectorSelectOptionRU = document.createElement('option')
    headerSelectorSelectOptionRU.value = 'RU'
    let headerSelectorSelectOptionRUText = document.createTextNode('RU')
    headerSelectorSelectOptionRU.appendChild(headerSelectorSelectOptionRUText)
    headerSelectorSelect.appendChild(headerSelectorSelectOptionRU)

    let headerSelectorSelectOptionKZ = document.createElement('option')
    headerSelectorSelectOptionKZ.value = 'KZ'
    let headerSelectorSelectOptionKZText = document.createTextNode('KZ')
    headerSelectorSelectOptionKZ.appendChild(headerSelectorSelectOptionKZText)
    headerSelectorSelect.appendChild(headerSelectorSelectOptionKZ)


    headerSelector.appendChild(headerSelectorSelect)

    return headerSelector
}