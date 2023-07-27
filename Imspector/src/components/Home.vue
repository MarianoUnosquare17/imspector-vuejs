<template>
  <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item active">
        <div class="image-container">
          <img class="d-block w-100" src="../assets/background.jpeg" alt="First slide">
          <div class="carousel-caption d-none d-md-block">
            <h3 class="welcome-cap">Welcome to Imspector</h3>
            <p class="track-cap">Track your Valorant stats</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: 'Tungsten';
  src: url('./assets/Tungsten.ttf');
}

@font-face {
  font-family: 'Valorant';
  src: url('./assets/Valorant.ttf');
}

.image-container {
  position: relative;
}

.carousel-caption {
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  /* background-color: rgba(0, 0, 0, 0.7); */
  color: white;
  padding: 10px;
  text-align: center;
}

.welcome-cap{
  font-family: Tungsten;
  font-size: 3.5em;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}

.track-cap{
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5)
}
</style>
