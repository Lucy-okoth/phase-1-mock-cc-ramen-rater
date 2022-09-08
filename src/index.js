// write your code here
document.addEventListener('DOMContentLoaded', () => {

    let menu = document.querySelector('#ramen-menu');
    
    //Fetch ramen from API
    document.addEventListener('DOMContentLoaded', getRamen());
    
    function getRamen() {
        fetch('http://localhost:3000/ramens')
        .then(res => res.json())
        .then(data => appendRamen(data))
    }
    
    function appendRamen(ramen) {
        for (i=0; i < ramen.length; i++) {
            let ramenObj = {
                id: ramen[i].id,
                name: ramen[i].name,
                restaurant: ramen[i].restaurant,
                image: ramen[i].image,
                rating: ramen[i].rating,
                comment: ramen[i].comment
            }
            let img = document.createElement('img');
            img.setAttribute('src', ramenObj.image);
            menu.appendChild(img);
    //Setup click img to add info to page
            img.addEventListener('click', function() {
                let imgDetail = document.querySelector('.detail-image');
                imgDetail.setAttribute('src', ramenObj.image);
                let nameDetail = document.querySelector('.name');
                nameDetail.textContent = ramenObj.name;
                let restaurantDetail = document.querySelector('.restaurant');
                restaurantDetail.textContent = ramenObj.restaurant;
                let ratingDetail = document.querySelector('#rating-display');
                ratingDetail.textContent = ramenObj.rating;
                let commentDetail = document.querySelector('#comment-display');
                commentDetail.textContent = ramenObj.comment;
                })
            }
        }
    
    
    //Create new ramen
        let newRamenForm = document.querySelector('#new-ramen')
        newRamenForm.addEventListener('submit', () => addNewRamen(event));
        function addNewRamen (event) {
            event.preventDefault()
            let newRamen = {
                name: event.target.children[2].value,
                restaurant: event.target.children[4].value,
                image: event.target.children[6].value,
                rating: event.target.children[8].value,
                comment: event.target.children[10].value
            }
            let img = document.createElement('img');
            img.setAttribute('src', newRamen.image);
            img.addEventListener('click', function() {
                let imgDetail = document.querySelector('.detail-image');
                imgDetail.setAttribute('src', newRamen.image);
                let nameDetail = document.querySelector('.name');
                nameDetail.textContent = newRamen.name;
                let restaurantDetail = document.querySelector('.restaurant');
                restaurantDetail.textContent = newRamen.restaurant;
                let ratingDetail = document.querySelector('#rating-display');
                ratingDetail.textContent = newRamen.rating;
                let commentDetail = document.querySelector('#comment-display');
                commentDetail.textContent = newRamen.comment;
                })
            menu.appendChild(img);
        }
    
    })