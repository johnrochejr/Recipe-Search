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
     let img = document.createElement('img');

     img.src = data.results[i].thumbnail;
      if (data.results[i].thumbnail === " ") {
       img.src = 'http://via.placeholder.com/350x150'
     } else {
       img.src = data.results[i].thumbnail;
     }
     searchresult.appendChild(img);
   }
 })
