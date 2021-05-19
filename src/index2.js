const setToDOM = (image) => {
    const pictureOfDog = document.createElement('img')
     pictureOfDog.src = image

     const breedName = /\/breeds\/(.*?)\//gm.exec(image)
     pictureOfDog.alt = breedName[1].replace("-"," ") || "random dog"

     document.getElementById('dog').append(pictureOfDog)
 }

const setAsOption = (breed) =>{
    const input = document.createElement('input')
    const label = document.createElement('label')
    const breeds = document.getElementById('dogs')

    input.type = 'checkbox'
    input.className = 'checkbox'
    input.value = breed
    input.key = breed

    label.innerText = breed.charAt(0).toUpperCase() + breed.slice(1)
    label.className = "breedsLabel"
    label.append(input)

    breeds.append(label)
}



(() =>{
    Promise.all([
        fetch('https://dog.ceo/api/breeds/image/random/10'),
        fetch('https://dog.ceo/api/breeds/list/all')
    ])
    .then(async([images,breeds]) =>{
        return {
            images: await images.json(),
            breeds: await breeds.json()
        }
    })
    .then(response =>{ 
        //create and set images to DOM
        images.message.map(image => setToDOM(image))
        //create and set input options to DOM
        for(const breed in breeds.message) setAsOption(breed)
        console.log(response)
    })
})()
