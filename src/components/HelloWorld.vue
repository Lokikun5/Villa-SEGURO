<template>
  <div class="hello">
    <h1>Présentation</h1>
    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Culpa et ipsum placeat dolores quibusdam unde ex debitis qui consequuntur exercitationem modi nesciunt, mollitia recusandae eos alias sit magnam, dicta nulla.</h2>
  </div>


  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel" data-interval="5000" >
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0000.jpg" alt="First slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0001.jpg" alt="Second slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0004.jpg" alt="Third slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0005.jpg" alt="4th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0006.jpg" alt="5th slide">
    </div>
    <div class="carousel-item">
      <img class="d-block img-fluid w-100" src="../assets/carousel/IMG-20220330-WA0007.jpg" alt="6th slide">
    </div>
  </div>
  
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
<style scoped>
h1{
  margin-bottom: 100px;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hello{
  margin-bottom: 100px;
}
.img-fluid{
  height: 750px;
}
</style>
