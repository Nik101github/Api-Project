import "../styles/style.css";
document.querySelector(".button").addEventListener("click", function (e) {
  document.querySelectorAll(".animal").forEach((e) => {
    e.remove();
  });
  e.preventDefault();
  let animalAmount = document.getElementById("animalNumber").value;
  console.log(animalAmount);
  let factsURL = `https://zoo-animal-api.herokuapp.com/animals/rand/${animalAmount}`;
  async function getFacts(factsURL) {
    try {
      const response = await fetch(factsURL);
      const data = await response.json();
      data.forEach((animal) => {
        document.body.insertAdjacentHTML(
          "beforeend",
          `<div class=animal>
                    <h1>"${animal.name}" also called "${animal.latin_name}"</h1>
                    <img src=${animal.image_link} alt="${animal.name}" class=animalImage>
                    <h2>Absorbs: ${animal.diet}</h2>
                    <h2>Habitat: ${animal.habitat}</h2>
                    <p>More specifically lives in: ${animal.geo_range}</p>
                    <h2>How big is the animal?</h2>
                    <p>They go from ${animal.length_max} feet to ${animal.length_min} feet. They weigh from ${animal.weight_max} to ${animal.weight_min} punds </p>
                    <h2>Dies in ${animal.lifespan} years</h2>
                    <h2>Active time: ${animal.active_time}</h2>
                    </div>`
        );
      });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }
  getFacts(factsURL);
});
