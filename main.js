

axios
    .get(`https://api.chucknorris.io/jokes/categories`)
    .then(response => {
        const jokesCategories = response.data
        const allCategories = []

        console.log(response);

        jokesCategories.forEach(categorie => {

            let categoriesList = document.createElement('div')
            document.querySelector('body').appendChild(categoriesList)
            categoriesList.innerHTML = `                
                <a href="#" class='categories'>${categorie}</a>                
                ` //me muestra el nombre de las categorias en los links
            allCategories.push(categorie)
            console.log(categorie);
        })

        const toClick = document.querySelectorAll('.categories')

        let categoriesList = document.createElement('div')

        toClick.forEach(click => {
            click.onclick = () => {
                axios
                    .get(`https://api.chucknorris.io/jokes/random?category=${click.innerText}`)
                    .then(response => {
                        //let categoriesList = document.createElement('div') //aqui no se me borran por cada click

                        document.querySelector('body').appendChild(categoriesList)
                        const Joke = response.data.value
                        categoriesList.innerHTML = `JOKE: <p id="jokeP">${Joke}<p>`
                    })

                console.log(categoriesList.innerHTML);
            }
        })


    })