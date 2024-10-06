function sun(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Solar Storms (Solar Flares and Coronal Mass Ejections).<br>- Ultraviolet (UV) RadiationGlobal Warming and Climate Change <br>- Long-Term Destruction of Life on Earth',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function venus(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Solar Radiation and Solar Wind.<br>- Quasi-satellite asteroids <br>- Space Exploration: Future missions to Venus may bring indirect risks, such as possible contaminants',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function mercury(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Although Mercury receives an intense amount of solar radiation, this radiation does not directly affect Earth. The Earth has its own atmosphere and magnetic field that protect it from intense solar radiation.',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function moon(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Removal from the Moon. <br> - Effects on Day Length <br> - Influence on the Tides',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function earth(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - The main risks facing the Earth stem from human activities and natural processes that can significantly alter our environment and our quality of life.',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function mars(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Mars does not pose a direct threat to Earth. However, there are some considerations and potential risks that may be indirectly related to the red planet, particularly in the context of space exploration and future manned missions.',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function jupiter(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Gravity Shield and Slingshot Effect. Historically, Jupiter has deflected or launched objects towards us <br> - Orbital Instabilities. Although it did not directly cause orbital changes on Earth, long-term changes in Jupiters orbit could affect the orbits of other planets, including Earth. ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function saturn(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Gravitational Influence on Asteroids and Comets. However, it can also redirect smaller bodies towards the inner solar system, increasing the likelihood of impact with Earth. <br>  ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function pluto(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Pluto, being a dwarf planet in our Solar System, poses no significant risks to Earth.It is located at a very great distance from Earth, and its gravitational influence on us is negligible.In addition, Pluto does not have a substantial atmosphere that can cause direct impacts.  ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function neptune(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Comet and Asteroid Deflection: Neptunes gravitational pull can influence or deflect the trajectory of comets and asteroids. <br> - Changes in the orbits of objects in the Belt can, over millions of years, increase the risk of collision of these bodies with other planets, including Earth.  ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function uranus(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Comet and Asteroid Deflection. Although Uranus is very far away, it can, on rare occasions, redirect objects that may eventually cross Earths orbit.  ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function uranus(){
    Swal.fire({
        html: '<p style="color: white; margin-top: 15px;"> - Destructive Impact: Can cause giant craters, destruction of landscapes, and entire cities. <br>Shockwaves: The explosion can generate devastating shockwaves, destroying buildings and forests.  ',
        customClass:{
            p :'Br',
            confirmButton: 'butao',
            popup: 'popupClass'
        }
      });
}
function createStars() {
    const container = document.querySelector("body");
    for (let i = 0; i < 1000; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.width = ".1px";
      star.style.height = ".1px";
      star.style.top = Math.random() * 180 + "%";
      star.style.left = Math.random() * 100 + "%";
      container.appendChild(star);
    }
  }
  createStars();
