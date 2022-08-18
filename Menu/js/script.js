"use strict";

//Variables
const btnBreakfast = document.querySelector("#btn-breakfast");
const btnAll = document.querySelector("#btn-all");
const btnLunch = document.querySelector("#btn-lunch");
const btnShakes = document.querySelector("#btn-shakes");
const btnDinner = document.querySelector("#btn-dinner");
let allFoodNode = document.querySelector(".menu-food");
const foodSection = document.querySelector(".food");

//All Buttom function
btnAll.addEventListener("click", function () {

    allFoodNode.innerHTML = "";

    const html = `<div class="menu-food">
    <div class="container mb-5">
    <div class="row">
      <div class=" col-md-6 col-lg-3 breakfast">
       
        <img
          src="./assets/Buttermilk_pancakes"
          class="rounded  img-fluid img-thumbnail center "
          alt="Buttermilk Pancakes"
         
        />
      </div>
      <div class=" col-md-6 col-lg-3 breakfast">
        <h3 class="food-title fontLittle">Buttermilk Pancakes</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis vitae, quia illo adipisci corporis aspernatur nemo
          facere molestias rem, delectus dolores fugiat, placeat sunt
          neque saepe ipsa necessitatibus animi esse.
        </p>
      </div>
      <div class="col-md-6 col-lg-3">
        <img
          src="./assets/scrambled-egg.png"
          class="rounded  img-fluid img-thumbnail center"
          alt="Scrambled Eggs"
         
        />
      </div>
      <div class="col-md-6 col-lg-3 breakfast">
        <h3 class="food-title fontLittle">Scrambled Eggs</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis vitae, quia illo adipisci corporis aspernatur nemo
          facere molestias rem, delectus dolores fugiat, placeat sunt
          neque saepe ipsa necessitatibus animi esse.
        </p>
      </div>
    </div>
  </div>
  <div class="container mb-5">
    <div class="row">
        <div class="col-md-6 col-lg-3">
            <img
            src="./assets/sandwich-caprese.png"
            class="rounded  img-fluid img-thumbnail center"
              alt="Sandwich Caprese"
           
            />
          </div>
          <div class="col-md-6 col-lg-3">
            <h3 class="food-title fontLittle">Sandwich Caprese</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nobis vitae, quia illo adipisci corporis aspernatur nemo
              facere molestias rem, delectus dolores fugiat, placeat sunt
              neque saepe ipsa necessitatibus animi esse.
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <img
            src="./assets/hot-dog.png"
            class="rounded  img-fluid img-thumbnail center"
            alt="Simple Hot Dog"
         
          />
          </div>
          <div class="col-md-6 col-lg-3">
            <h3 class="food-title fontLittle">Simple Hot Dog</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nobis vitae, quia illo adipisci corporis aspernatur nemo
              facere molestias rem, delectus dolores fugiat, placeat sunt
              neque saepe ipsa necessitatibus animi esse.
            </p>
          </div>
        </div>
      </div>
  <div class="container mb-5">
    <div class="row">
        <div class="col-md-6 col-lg-3">
            <img
              src="./assets/chicken-alfredo.png"
              class="rounded  img-fluid img-thumbnail center"
              alt="Chicken Alfredo"
           
            />
          </div>
          <div class="col-md-6 col-lg-3">
            <h3 class="food-title fontLittle">Chicken Alfredo</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nobis vitae, quia illo adipisci corporis aspernatur nemo
              facere molestias rem, delectus dolores fugiat, placeat sunt
              neque saepe ipsa necessitatibus animi esse.
            </p>
          </div>
          <div class="col-md-6 col-lg-3">
            <img
            src="./assets/Dinner_Double.png"
            class="rounded  img-fluid img-thumbnail center"
            alt="Dinner Double"
           
          />
          </div>
          <div class="col-md-6 col-lg-3">
            <h3 class="food-title fontLittle">Dinner Double</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nobis vitae, quia illo adipisci corporis aspernatur nemo
              facere molestias rem, delectus dolores fugiat, placeat sunt
              neque saepe ipsa necessitatibus animi esse.
            </p>
            </div>
        </div>
      </div>
  <div class="container mb-3">
    <div class="row">
      <div class="col-md-6 col-lg-3">
        <img
          src="./assets/godzila-milshake.png"
          class="rounded  img-fluid img-thumbnail center"
          alt="Godzilla Milshake"
         
        />
      </div>
      <div class="col-md-6 col-lg-3">
        <h3 class="food-title fontLittle">Godzilla Milshake</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis vitae, quia illo adipisci corporis aspernatur nemo
          facere molestias rem, delectus dolores fugiat, placeat sunt
          neque saepe ipsa necessitatibus animi esse.
        </p>
      </div>
          <div class="col-md-6 col-lg-3">
            <img
              src="./assets/King-Milshake.png"
              class="rounded  img-fluid img-thumbnail center"
              alt="King Milshake"
             
            />
          </div>
          <div class="col-md-6 col-lg-3">
            <h3 class="food-title fontLittle">King Milshake</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Nobis vitae, quia illo adipisci corporis aspernatur nemo
              facere molestias rem, delectus dolores fugiat, placeat sunt
              neque saepe ipsa necessitatibus animi esse.
            </p>
          </div>
        </div>
      </div>`;
  allFoodNode.innerHTML = html;
});


//Breakfast Buttom function
btnBreakfast.addEventListener("click", function () {
    allFoodNode.innerHTML = "";
    const html = `<div class="menu-food">
    <div class="container mb-5">
    <div class="row">
      <div class=" col-md-6 col-lg-3 breakfast">
       
        <img
          src="./assets/Buttermilk_pancakes"
          class="rounded  img-fluid img-thumbnail center "
          alt="Buttermilk Pancakes"
         
        />
      </div>
      <div class=" col-md-6 col-lg-3 breakfast">
        <h3 class="food-title fontLittle">Buttermilk Pancakes</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis vitae, quia illo adipisci corporis aspernatur nemo
          facere molestias rem, delectus dolores fugiat, placeat sunt
          neque saepe ipsa necessitatibus animi esse.
        </p>
      </div>
      <div class="col-md-6 col-lg-3">
        <img
          src="./assets/scrambled-egg.png"
          class="rounded  img-fluid img-thumbnail center"
          alt="Scrambled Eggs"
         
        />
      </div>
      <div class="col-md-6 col-lg-3 breakfast">
        <h3 class="food-title fontLittle">Scrambled Eggs</h3>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Nobis vitae, quia illo adipisci corporis aspernatur nemo
          facere molestias rem, delectus dolores fugiat, placeat sunt
          neque saepe ipsa necessitatibus animi esse.
        </p>
      </div>
    </div>
  </div>`
  
    allFoodNode.innerHTML = html;
  });
  
//Lunch Buttom function

btnLunch.addEventListener("click", function () {
  allFoodNode.innerHTML = "";
  const html = `<div class="menu-food">
  <div class="container mb-5">
  <div class="row">
      <div class="col-md-6 col-lg-3">
          <img
          src="./assets/sandwich-caprese.png"
          class="rounded  img-fluid img-thumbnail center"
            alt="Sandwich Caprese"
         
          />
        </div>
        <div class="col-md-6 col-lg-3">
          <h3 class="food-title fontLittle">Sandwich Caprese</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nobis vitae, quia illo adipisci corporis aspernatur nemo
            facere molestias rem, delectus dolores fugiat, placeat sunt
            neque saepe ipsa necessitatibus animi esse.
          </p>
        </div>
        <div class="col-md-6 col-lg-3">
          <img
          src="./assets/hot-dog.png"
          class="rounded  img-fluid img-thumbnail center"
          alt="Simple Hot Dog"
       
        />
        </div>
        <div class="col-md-6 col-lg-3">
          <h3 class="food-title fontLittle">Simple Hot Dog</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nobis vitae, quia illo adipisci corporis aspernatur nemo
            facere molestias rem, delectus dolores fugiat, placeat sunt
            neque saepe ipsa necessitatibus animi esse.
          </p>
        </div>
      </div>
    </div>`;

  allFoodNode.innerHTML = html;
});
//Dinner Buttom function

btnDinner.addEventListener("click", function () {
  allFoodNode.innerHTML = "";

  const html = `<div class="menu-food">
  <div class="container mb-5">
  <div class="row">
      <div class="col-md-6 col-lg-3">
          <img
            src="./assets/chicken-alfredo.png"
            class="rounded  img-fluid img-thumbnail center"
            alt="Chicken Alfredo"
         
          />
        </div>
        <div class="col-md-6 col-lg-3">
          <h3 class="food-title fontLittle">Chicken Alfredo</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nobis vitae, quia illo adipisci corporis aspernatur nemo
            facere molestias rem, delectus dolores fugiat, placeat sunt
            neque saepe ipsa necessitatibus animi esse.
          </p>
        </div>
        <div class="col-md-6 col-lg-3">
          <img
          src="./assets/Dinner_Double.png"
          class="rounded  img-fluid img-thumbnail center"
          alt="Dinner Double"
         
        />
        </div>
        <div class="col-md-6 col-lg-3">
          <h3 class="food-title fontLittle">Dinner Double</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Nobis vitae, quia illo adipisci corporis aspernatur nemo
            facere molestias rem, delectus dolores fugiat, placeat sunt
            neque saepe ipsa necessitatibus animi esse.
          </p>
          </div>
      </div>
    </div>`;
  allFoodNode.innerHTML = html;
});
//Shakes Buttom function

btnShakes.addEventListener("click", function () {
  allFoodNode.innerHTML = "";

  const html = `<div class="menu-food">
  <div class="container mb-3">
            <div class="row">
              <div class="col-md-6 col-lg-3">
                <img
                  src="./assets/godzila-milshake.png"
                  class="rounded  img-fluid img-thumbnail center"
                  alt="Godzilla Milshake"
                 
                />
              </div>
              <div class="col-md-6 col-lg-3">
                <h3 class="food-title fontLittle">Godzilla Milshake</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nobis vitae, quia illo adipisci corporis aspernatur nemo
                  facere molestias rem, delectus dolores fugiat, placeat sunt
                  neque saepe ipsa necessitatibus animi esse.
                </p>
              </div>
                  <div class="col-md-6 col-lg-3">
                    <img
                      src="./assets/King-Milshake.png"
                      class="rounded  img-fluid img-thumbnail center"
                      alt="King Milshake"
                     
                    />
                  </div>
                  <div class="col-md-6 col-lg-3">
                    <h3 class="food-title fontLittle">King Milshake</h3>
                    <p>
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                      Nobis vitae, quia illo adipisci corporis aspernatur nemo
                      facere molestias rem, delectus dolores fugiat, placeat sunt
                      neque saepe ipsa necessitatibus animi esse.
                    </p>
                  </div>
                </div>
              </div>`;
  allFoodNode.innerHTML = html;
});
