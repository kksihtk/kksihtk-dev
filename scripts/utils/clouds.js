// Clouds

function elementCloudsCloud(isSecondCloud = false) {
    let cloudText1;

    let cloud = document.createElement('div')
    if (isSecondCloud == false){
        cloud.classList.add("first_cloud")
    } else if (isSecondCloud == true) {
        cloud.classList.add("second_cloud")
    }
    cloud.classList.add("cloud")

    let cloudImg = document.createElement('img')
    cloudImg.src = "./images/cloud-image_1.png"
    cloudImg.alt = "Cloud image"

    if (isSecondCloud == false) {
        cloudText1 = document.createElement('div')
        cloudText1.classList.add('first_cloud-text')
    } 

    let cloudText = document.createElement('div')
    cloudText.classList.add('cloud-text')
    
    let cloudTextH3 = document.createElement('h3')
    let cloudTextH3Text = document.createTextNode("Welcome!")
    let cloudTextP = document.createElement('p')
    let cloudTextPText = document.createTextNode("This is the site of a student, aspiring Fullstack developer. The site is created for personal use.")
    cloudTextH3.appendChild(cloudTextH3Text)
    cloudTextP.appendChild(cloudTextPText)

    cloudText.appendChild(cloudTextH3)
    cloudText.appendChild(cloudTextP)

    if (isSecondCloud == false) {
        cloudText1.appendChild(cloudText)
    }

    cloud.appendChild(cloudImg)

    if (isSecondCloud == false) {
        cloud.appendChild(cloudText1)
    } else {
        cloud.appendChild(cloudText)
    }

    return cloud
}

function elementClouds() {
    let clouds = document.createElement('section')
    clouds.id = "clouds"
    clouds.appendChild(elementCloudsCloud())
    clouds.appendChild(elementCloudsCloud(isSecondCloud = true))

    return clouds
}

/*
<section id="clouds">

    <div class="first_cloud cloud">
        <img src="./images/cloud-image_1.png" alt="">
        <div class="first_cloud-text">
            <div class="cloud-text">
                <h3>Welcome!</h3>
                <p>This is the site of a student, aspiring Fullstack developer. The site is created for personal use.</p>
            </div>
        </div>
    </div>

    <div class="second_cloud cloud">
        <img src="./images/cloud-image_2.png" alt="">
        <div class="cloud-text">
            <h3>Welcome!</h3>
            <p>On the site you can find a news feed of my achievements, as well as various DevBlogs.</p>
        </div>
    </div>
</section>
*/