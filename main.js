 // Select node

 // URL

 // star wars fetch with data

 // thumbnail
 // Title
 // href

 let searchresult = document.querySelector('.searchresult');


 let url = 'https://crossorigin.me/http://www.recipepuppy.com/api/?q=omelet';

 fetch(url).then(response => response.json()).then(data => {

   for (let i = 0; i < data.results.length; i++) {
     console.log(data);
     let h1 = document.createElement('h1');
     let anchor = document.createElement('a');
     let img = document.createElement('img');

     if (data.results[i].thumbnail === "") {
       img.src = 'http://via.placeholder.com/350x150';
     } else {
       img.src = data.results[i].thumbnail;
     }

     h1.textContent = data.results[i].title;
     anchor.href = data.results[i].href;

     anchor.appendChild(img)
     anchor.appendChild(h1)
     searchresult.appendChild(anchor);
   }
 })
