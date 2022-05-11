<template>
  <section class="hello">
      <h1>Présentation</h1>
        <div class="presentation-assets">
            <h2 style="margin-bottom: 1em">
                Construite en 2018 au bord du lac Togo, dans la ville de Porto-Séguro,
                Agbodrafo.<br><span class="text-focus">La Villa Séguro</span> est un lieu d'échanges interdisciplinaires qui a
                pour vocation de renforcer le dialogue interculturel entre tous les artistes du monde.
                
            </h2>

            <img src="../assets/Image01.png" alt="photo d'exposition dans la villa seguro">

            <h2 style="margin-bottom: 1em; margin-top: 1em">
              Elle se veut un cadre privilégié de rencontres, de création, de diffusion
              et de médiation. Elle est un établissement privé entièrement financé sur
              fonds propres qui bénéficie, à ce jour, du soutien des mécènes <span class="text-focus2"> Marion
              Urban, Didier Acouetey, Jonas Daou, Hawa Drame, JosephineKoudoyor, Lydie Koudoyor, Bertin Kinvi.</span>
            </h2>
            <h2>
              <span class="text-focus">
                Le programme de résidence de la Villa Séguro s'adresse aux artistes
                ou collectifs de toutes disciplines et de toutes nationalités, engagés dans la création contemporaine.
              </span>
            </h2>
            <div class="border"></div>
            <div class="flex" style="margin-top: 2em;">
              <h2 style="margin-top: 1em;">
                Les projets qui y sont reçus sont conçus en relation avec la scène
                culturelle togolaise ou africaine et confirmés par un partenaire local. Les
                résidences durent de deux semaines à trois mois et doivent déboucher sur une
                restitution en public.
              </h2>
              <img src="../assets/Image02.png" alt="photo du lieu d'exposition">
            </div>

            <div class="border"></div> <!--------separator -----------> 
          
            <img style= "margin-bottom: 2em" src="../assets/Image03.png" alt="photo de la villa seguro">

            <p>
                Les résidents y sont appelés à nouer des relations de travail avec les
                milieux professionnels, universitaires, artistiques et culturels du Togo.
            </p>

          <div class="border"></div> <!--------separator -----------> 
      </div>
</section>


  <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel" data-interval="5000" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0000.jpg" alt="Seguro First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0001.jpg" alt="Seguro Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0004.jpg" alt="Seguro Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0005.jpg" alt="Seguro 4th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0006.jpg" alt="Seguro 5th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0007.jpg" alt="Seguro 6th slide">
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
.flex{
  display: flex;
}
h1{
  margin-bottom: 100px;
}
h2{
  font-weight: 400;
  font-size: 1.9em;
}
h3 {
    font-size: 1.9em;
}
p{
  font-weight: 400;
}

a{
  color: #42b983;
}
.hello{
  margin-bottom: 100px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.img-fluid{
  height: 650px;
  border: solid 1px #42b983;
}
.img-fluid:hover{
  filter: brightness(125%);
  transition-duration: 500ms;
}
.presentation-assets{
  width: 90%;
}
.text-focus{
  color: #006800;
}
.text-focus2{
  color: #502D36;
}
.border{
  border: 3px solid rgb(107, 106, 106);
  width: 100%;
  margin-top: 3em;
  margin-bottom: 3em;
}
.liste-style{
  font-size: 1.3em;
  line-height: 2em;
  
}


</style>

