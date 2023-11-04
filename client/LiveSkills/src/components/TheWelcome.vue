<script>
export default {
  data() {
    return {
      text: 'Pour s’amuser, nous allons réaliser une évaluation très simpliste de softs skills présents dans la salle.',
      state: 0
    };
  },
  methods: {
    changeText() {
      switch (this.state) {
        case 0:
          this.text = 'Nous avons choisi 5 compétences comportementales, il y en a beaucoup d’autres !';
          break;
        case 1:
          this.text = 'Chacune d’elle fera l’objet de 3 questions où vous devrez répondre de 0 à 5.';
          break;
        case 2:
          this.text = '0 étant la réponse « pas du tout, jamais » et 5 « absolument, tout le temps »';
          break;
        case 3:
          this.text = 'Soyez sincère, spontané.e, sans jugement et… amusez-vous !';
          break;
        case 4:
          this.$router.push('/questions');
        default:
          this.state = -1;
      }
      this.state++;
    }
  }
}
</script>

<template>
<div class="section">
  <div class="container">
    <div class="text">
      <p :key="state" class="animated-text">{{text}}</p>
    </div>
    <div class="button">
      <img @click="changeText" src="@/assets/arrow.svg" alt="arrow">
    </div>
  </div>
</div>
</template>

<style scoped>

* {
  user-select: none;
}

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}

.container {
  padding: 300px 160px 0 160px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}

.text {
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  text-align: center;
  font-family: 'Red Hat Display', sans-serif;
  font-weight: 500;
  font-size: 2.7em;
  color: white;
  animation: 0.5s appear ease-in-out;
}

.button {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: start;
  justify-content: center;
}

.button img {
  width: 100px;
  opacity: 0.2;
  transition: all 0.2s ease-in-out;

}

.button img:hover {
  opacity: 0.4;
  transform: translateY(5px);
  transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 940px) {

  .text {
    font-size: 1.4em;
  }

  .container {
    padding: 100px 30px 0 30px;
    display: flex;
    width: 100%;
    height: 100%;
  }

}

.animated-text {
  animation: 0.5s appear ease-in-out;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(-50px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

</style>