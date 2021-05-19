    const setToDOM = (image) => {
       const pictureOfDog = document.createElement('img')
        pictureOfDog.src = image

        const breedName = /\/breeds\/(.*?)\//gm.exec(image)
        pictureOfDog.alt = breedName[1].replace("-"," ") || "random dog"

        document.getElementById('dog').append(pictureOfDog)
    }
    //making a single fetch
    (() =>{
        fetch('https://dog.ceo/api/breeds/image/random/10')
            .then(res => res.json())
            .then(result => result.message.map(image => setToDOM(image)))
            
        })()

    //making multiple fetches
    

