let weather = {
    apiKey: "186df2ba634873f4391c238139b1bb46",
    meteo: function () {
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=etna&units=metric&appid=" +
          this.apiKey
      )
        .then((response) => {
          if (!response.ok) {
            alert("No weather found.");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
  
    
    displayWeather: function (data) {
      //richieste all'api
      const { icon, description } = data.weather[0];
  
      const { temp, humidity } = data.main;
  
      const { speed } = data.wind;
    
      //stampa risposte
      document.querySelector(".icon").src ="https://openweathermap.org/img/wn/" + icon + ".png";
      document.querySelector(".description").innerText = description;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Umidita: " + humidity + "%";
      document.querySelector(".wind").innerText = "Vento: " + speed + " km/h";
      
    }
  };
  
  weather.meteo();
  
  //sfondo casuale
  
  const backgrounds = ['immagini/sfondo/vulcano1.jpg', 'immagini/sfondo/vulcano2.jpg', 'immagini/sfondo/vulcano3.jpg' , 'immagini/sfondo/vulcano4.jpg'];
  
  const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
  
  // imposta l'immagine come sfondo del body della pagina
  const container = document.getElementById('sfondo');
  container.style.backgroundImage = `url(${randomBackground})`;
  container.style.backgroundRepeat = 'no-repeat';
  container.style.backgroundSize = 'cover';