<template>
    <h1 style="margin-bottom: 1em; margin-top: 1em;">Nos amis et mécènes</h1>
    <div class="parallax-effect2"></div>
    <div style="height:10px;background-image: linear-gradient(to right top, #1B4F07, #139415, #9FE755, #EAF5FA, #EAF5FA); font-size:36px; text-align: center; font-family: 'Raleway', Arial, sans-serif"></div>
    
      <h2 style="margin-bottom: 2em; margin-top: 2em;">Les formateurs sont des professionnels ayant <br> chacun une expertise dans un domaine précis:</h2>
   
    <!--------------------le group de carte ----------------------->
    <div class="flex">    
        <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/mécènes/Annie-Ferret01.jpg" alt="Photo d'Annie-Ferret">
      <div class="card-body">
        <h5 class="card-title">Annie Ferret</h5>
        <p class="card-text">Romancière et Modèle (France)</p>
        <a href="#" class="btn btn-primary">Voir le profil</a>
      </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/mécènes/Catherine-Pont-Humbert_02.jpg" alt="Photo d'Catherine PONTHUMBERT">
      <div class="card-body">
        <h5 class="card-title">Catherine PONTHUMBERT</h5>
        <p class="card-text">Ecrivaine et Poète (France)</p>
        <a href="#" class="btn btn-primary">Voir le profil</a>
      </div>
      </div>

       <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/mécènes/Makenzy-Orcel_03.jpg" alt="Photo d'Makenzy Orcel">
      <div class="card-body">
        <h5 class="card-title">Makenzy Orcel</h5>
        <p class="card-text">Romancier et Poète (Haïti)</p>
        <a href="#" class="btn btn-primary">Voir le profil</a>
      </div>
      </div>

      <div class="card" style="width: 18rem;">
      <img class="card-img-top" src="../assets/mécènes/Agnes-Sebban.png" alt="Photo d'Agnes Sebban">
      <div class="card-body">
        <h5 class="card-title">Agnes Sebban</h5>
        <p class="card-text">Musicothérapeute, Professeur de chant et techniques vocales artistique et lyrique (France)</p>
        <a href="#" class="btn btn-primary">Voir le profil</a>
      </div>
      </div>
    </div>
    <!--------------------le group de carte(fin) ----------------------->

    <div class="border"></div> <!--------separator -----------> 
</template>

<style>
.parallax-effect2 {
  background-image: url("../assets/IMG-20220330-WA0004.jpg");
  min-height: 75vh;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

.flex{
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
}
.btn-primary{
  transition: 400ms;
}
</style>