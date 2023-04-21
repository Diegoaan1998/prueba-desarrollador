fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
.then(response => response.json())
.then(data => {
  // Mostrar datos en la interfaz de usuario
  const categorias = document.getElementById('botones');
  
  data.categories.forEach(categoriaa => {
    const div = document.createElement('button');
    div.classList.add('btn-recetas');
    div.innerHTML = `
      <img src="./imagenes/comer.png" alt="">
      ${categoriaa.strCategory}
    `;
    categorias.appendChild(div);
  });
});


// Obtener datos de la API
fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
  .then(response => response.json())
  .then(data => {
    
    const categorias = document.getElementById('content');
    const slicedData = data.meals.slice(0, 12);
    slicedData.forEach(categoria => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img src="${categoria.strMealThumb}" alt="">
        <i class="fa fa-heart-o corazon" aria-hidden="true"></i>
        <h5 class="text-card">${categoria.strMeal}</h5>
        <h5 class="text">${categoria.strCategory}</h5>
        <button class="btn-card">${categoria.strArea}</button>
      `;
      categorias.appendChild(div);

      

    });
  });

//consumimos api para generar una receta aleatoria 
  fetch('https://www.themealdb.com/api/json/v1/1/random.php')
  .then(response => response.json())
  .then(data => {
    
    const categorias = document.getElementById('aleatorio');
    
      data.meals.forEach(categoria => {
      const div = document.createElement('div');
      div.classList.add('card');
      div.innerHTML = `
        <img  src="${categoria.strMealThumb}" alt="">
        <i class="fa fa-heart-o fa-2x corazon" aria-hidden="true"></i>
        <h5 class="text-card">${categoria.strMeal}</h5>
        
        <h5 class="text">${categoria.strCategory}</h5>
        <button class="btn-card">${categoria.strArea}</button>
        <h5 class="text">Instrucciones</h5>
        <p class="text-instrucciones">${categoria.strInstructions}</p>

      `;
      categorias.appendChild(div);

      

    });
  });


  



