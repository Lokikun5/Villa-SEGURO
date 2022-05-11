<template>
  <nav class="navbar bg-light">
    <div class="nav-container navbar-nav">
        <div class="border-nav"><router-link to="/">Home</router-link></div> 
        <div class="border-nav"><router-link to="/contact-1seguro">Contact</router-link></div>
        <div class="border-nav"><router-link to="/actu-1seguro">Actu</router-link></div>
        <div class="border-nav"><router-link to="/histoire-1seguro">Histoire</router-link></div>
        <div class="border-nav"><router-link to="/formule-de-résidence">Formule de résidence</router-link></div>
        <div class="border-nav"><router-link to="/photo-exposition">Photo-exposition</router-link></div>
        <div class="border-nav"><router-link to="/nos-amis-et-mécènes">Nos amis et mécènes</router-link></div>
    </div>
  </nav>
  <router-view/>
  
  <footer>
    <p>Villa Seguro copyright © 2022</p>
    <div class="iconGroup">
      <a class="linkS" href="#"><img class="imgfb" src="./assets/icon/124010.png" alt="Seguro - retrouvez nous sur facebook"></a>
      <a class="linkS" href="#"><img class="imginsta" src="./assets/icon/240px-Instagram_icon.png" alt="Seguro - retrouvez nous sur instagram"></a>
    </div>
    <div class="footerInfo"><router-link to="/Plan-du-site">Plan du site</router-link></div>
  </footer>
</template>

<style>

#app {
  font-family: 'Roboto Slab', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #ffffff;
}

nav {
  padding: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
}

nav a {
  font-weight: 400;
  font-size: 1.1em;
  color: #000000;
  padding: 20px;
  text-decoration: none; 
}

a:hover{
  color: #679E5A;
  font-size: 1.4em;
}
nav a.router-link-exact-active {
  font-weight: 600;
}

.navbar{
  background: #F3E9D3;
  border-bottom: 1px solid rgb(87, 83, 83);
  font-size: 1rem;
  position: static;
  top: 0;
  z-index: 20;
}
.nav-container{
  max-width: 1500px;
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  
}


.border-nav{
  border: 2px solid rgb(25, 22, 22);
  line-height: 30px;
  margin-left: 20px;

}
.border-nav:hover{
  border: 2px solid #4CA56B;
  transition-duration: 200ms;
  box-shadow: 1px -2px 5px black;
}
footer {
  font-family: 'Roboto Condensed';
  color: #ffffff;
  background-color: #000000;
  height: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
}
footer p{
  font-weight: 100;
  font-size: 1rem;
}
.footerInfo a  {
  font-weight: 600;
  font-size: 1.5rem;
  color: #ffffff;
}
.iconGroup{
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 10px;
  gap: 10px;
  
}

.imgfb{
  width: 100%;
  
}
.imgfb:hover{
  scale: 1.1;
  transition: 500ms;
}
.imginsta{
  width: 100%;
}
.imginsta:hover{
  scale: 1.1;
  transition: 500ms;

}
.linkS{
  width: 5%;
}
@media screen and (max-width: 768px){
  .nav-container{
    flex-direction: column;
    height: 250px;
  }
}

</style>

<script>

</script>

