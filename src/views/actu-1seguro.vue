<template>
    <h1 style="margin-bottom: 1em; margin-top: 1em;">Actualités</h1>
    <div class="parallax-effect2"></div>
    <div style="height:10px;background-image: linear-gradient(to right top, #1B4F07, #139415, #9FE755, #EAF5FA, #EAF5FA); font-size:36px; text-align: center; font-family: 'Raleway', Arial, sans-serif"></div>
    <div class="center">
     <div class="carte">

        <div class="divImg"></div>

        <div class="titre">
            <h2>Yao Metsoko</h2> 
            <hr>
        </div>

        <div class="tab">
            <img src="../assets/carte/VisualEditor_-_Icon_-_Journal.svg" alt="sablier" class="icone">
            <span>publier le 22/04/2022</span>
        </div>
        

        <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum explicabo maxime placeat tempore et expedita earum voluptas at vel.
        </div>

        <div class="btnSection">
            <a href="#">L'article</a>
        </div>
    </div>


    <div class="carte">

        <div class="divImg"></div>

        <div class="titre">
            <h2>Yao Metsoko</h2> 
            <hr>
        </div>

        <div class="tab">
            <img src="../assets/carte/VisualEditor_-_Icon_-_Journal.svg" alt="sablier" class="icone">
            <span>publier le 22/04/2022</span>
        </div>
        
        <div class="info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi dolorum explicabo maxime placeat tempore et expedita earum voluptas at vel.
        </div>

        <div class="btnSection">
            <a href="#">L'article</a>
        </div>
    </div>
    </div>
</template>

<style>
.center{
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 10px;
}
.carte {
    width: 330px;
    height: 530px;
    /* position: absolute;
    top: 40%;
    left: 50%; */
    /* transform: translate(-50%, -50%); */
    background: #f1f1f1;
    display: grid;
    grid-template: repeat(2, 100px) 50px repeat(2,100px) 80px / repeat(3, 110px);
    border-radius: 5px;
}

.divImg {
    /* debut rangée / debut col / fin rang / fin col */
    grid-area:  1 / 1 / 3 / 4;
    background: url(../assets/carte/yao.png);
    background-size: cover;
    background-position: 50% 50%;
    filter: brightness(90%);
    box-shadow: 0px 10px 40px rgba(0,0,0,0.5);
}

.titre {
    grid-area: 3 / 1 / 4 / 4;
    font-size: 24px;
    font-weight: 500;
    padding: 20px;
}
hr {
    opacity: 0.8;
}
.tab {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 10px;
    margin-left: 80%;
    white-space: nowrap;
    
}
.icone {
    width: 30px;
    margin-right: 10px;
}
span {
    font-weight: 500;
}
.info {
    grid-area: 5 / 1 / 6 / 4;
    padding: 5px 25px;
    font-size: 15px;
    text-align: justify;
    font-weight: 500;
}
.btnSection {
    grid-area: 6 / 1 / 7 / 4;
    display: flex;
    justify-content: center;
    align-items: center;
}
.btnSection a {
    display: block;
    width: 200px;
    height: 30px;
    background: rgb(134, 87, 94);
    text-decoration: none;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #e2e2e2;
    border-radius: 5px;
}
.btnSection a:hover{
    transition-duration: 500ms;
}
</style>