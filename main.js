 // Search bar

 let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q=';


 let searchbar = document.querySelector('.searchbar');

  searchbar.addEventListener('submit', (event) => {
    event.preventDefault();
    let searchBox = document.getElementById('searchBox');
    console.log(searchBox.value);
    url += searchBox.value;

 // Search results (anchor, images, HREF)

 let searchresult = document.querySelector('.searchresult');



 fetch(url).then(response => response.json()).then((data) => {

   for (let i = 0; i < data.results.length; i++) {
     let paragraph = document.createElement('p');
     let anchor = document.createElement('a');
     let img = document.createElement('img');

     if (data.results[i].thumbnail === "") {
       img.src = 'http://via.placeholder.com/350x150';
     } else {
       img.src = data.results[i].thumbnail;
     }

     paragraph.textContent = data.results[i].title;
     anchor.href = data.results[i].href;

     anchor.appendChild(img)
     anchor.appendChild(paragraph)
     searchresult.appendChild(anchor);
   }
 })
})
