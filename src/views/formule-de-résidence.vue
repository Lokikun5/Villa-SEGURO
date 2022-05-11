<template>
    <h1  style="margin-bottom: 1em; margin-top: 1em;">Formule de résidence</h1>
    <div class="parallax-effect2"></div>
    <div style="height:10px;background-image: linear-gradient(to right top, #1B4F07, #139415, #9FE755, #EAF5FA, #EAF5FA); font-size:36px; text-align: center; font-family: 'Raleway', Arial, sans-serif"></div>
    
    <section>
              <h2 style="margin-bottom: 2em; margin-top: 2em;">
                La Villa Seguro propose trois dispositifs distincts :
              </h2>
              <!----------------------------------- accordion ---------------------->
            <div class="accordion" id="accordionPanelsStayOpenExample">
              <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingOne">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
                N° 1 En Solo 👩‍🎨
              </button>
            </h2>
            <div id="panelsStayOpen-collapseOne" class="accordion-collapse collapse show" aria-labelledby="panelsStayOpen-headingOne">
              <div class="accordion-body">
                <span class="text-focus">En Solo :</span> un candidat togolais ou étranger résidant au Togo ou à l'étranger présente un projet de recherche et de création.
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingTwo">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
                N° 2 En Binôme En duo 🧑‍🎤
              </button>
            </h2>
            <div id="panelsStayOpen-collapseTwo" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingTwo">
              <div class="accordion-body">
                <span class="text-focus">En Binôme En duo :</span> deux candidats togolais ou étrangers 
                                          résidant au Togo ou ailleurs dans le monde présentent un projet commun.
                                        
              </div>
            </div>
          </div>
          <div class="accordion-item">
            <h2 class="accordion-header" id="panelsStayOpen-headingThree">
              <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
                N° 3 Les disciplines 📓
              </button>
            </h2>
              <div id="panelsStayOpen-collapseThree" class="accordion-collapse collapse" aria-labelledby="panelsStayOpen-headingThree">
                <div class="accordion-body">
                  <span class="text-focus text-size"> Les disciplines concernées sont :</span>
                  <ul>
                    <li>architecture / paysage / urbanisme</li>
                    <li>arts de la rue / cirque /marionnettes</li>
                    <li>arts numériques / productions digitales</li>
                    <li>arts plastiques</li>
                    <li>bande dessinée</li>
                    <li>cinéma / vidéo</li>
                    <li>critique d'art et commissaire d'expositions</li>
                    <li>danse / performance</li>
                    <li>design / graphisme</li>
                    <li>gastronomie</li>
                    <li>livre</li>
                    <li>métiers d'art</li>
                    <li>mode</li>
                    <li>musique classique / musique contemporaine</li>
                    <li>musiques actuelles / jazz</li>
                    <li>photographie</li>
                    <li>théâtre</li>
                  </ul>
                </div>
              </div>
          </div>
        </div>
        <img class="img-marge" src="../assets/Image03.png" alt="photo du lieu d'exposition">
    </section>
</template>

<style>
.parallax-effect2 {
  background-image: url("../assets/IMG-20220330-WA0005.jpg");
  min-height: 500px;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
.img-marge{
  margin-top: 2em;
  margin-bottom: 2em;
  border: solid 1px #006800;
}
ul{
  list-style: none;
}
.text-size{
  font-weight: 500;
  font-size: 1.5rem;
}
.accordion-button{
  font-size: 1.5rem;
}
.accordion-button:not(.collapsed){
  background-color: #3ea33e8f;
}
</style>