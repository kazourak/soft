<script>
import {defineComponent} from "vue";
import axios from 'axios';
import GraphComponent from "../components/GraphComponent.vue";

export default defineComponent({
  components: {GraphComponent},
  data() {
    return {
      skills: null,
      is_empty: 0,
      init: 0,
    }
  },
  methods: {
    async chargerCompetences() {
      try {
        const response = await axios.get('http://localhost:3000/total');
        this.skills = response.data.skills;
        this.init = 0;
        if(this.skills && this.skills[5][0] >= 3)
          this.is_empty = 1;
      } catch (error) {
        console.error('Erreur lors du chargement des compétences :', error);
        this.init = 1;
      }
    },
  },
  async created() {
    await this.chargerCompetences();
  },
  mounted() {
    setInterval(this.chargerCompetences, 5000);
  }
})
</script>

<template>
  <div class="wait" v-if="init === 1" style="z-index: 200">
    <div class="container">
      <p>En attente du serveur...</p>
      <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  </div>
  <div class="wait" v-if="is_empty === 0">
    <div class="container">
      <p>En attente des premiers bilans...</p>
      <div class="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
      <div class="qr">
        <span style="font-size: 2.3rem; color: #bdbdbd;">Utilisez le QR-Code suivant afin de faire le bilan :</span>
        <img src="../assets/qr-code.png" alt="qrcode" id="qr">
      </div>
      <span id="lien">bilan.zenmondrops.com</span>
    </div>
  </div>
  <div class="section" v-if="skills">
    <div class="container">
      <div class="items">
        <p>Communication</p>
        <GraphComponent :red="skills && skills[0][0]" :orange="skills && skills[0][1]" :green=" skills && skills[0][2]"/>
      </div>
      <div class="items">
        <p>Résolution de problèmes</p>
        <GraphComponent :red="skills && skills[1][0]" :orange="skills && skills[1][1]" :green=" skills && skills[1][2]"/>

      </div>
      <div class="items">
        <p>Empathie</p>
        <GraphComponent :red="skills && skills[2][0]" :orange="skills && skills[2][1]" :green=" skills && skills[2][2]"/>

      </div>
      <div class="items">
        <p>Gestion du changement</p>
        <GraphComponent :red="skills && skills[3][0]" :orange="skills && skills[3][1]" :green=" skills && skills[3][2]"/>

      </div>
      <div class="items">
        <p>Prise de décision</p>
        <GraphComponent :red="skills && skills[4][0]" :orange="skills && skills[4][1]" :green=" skills && skills[4][2]"/>

      </div>
    </div>
  </div>
</template>

<style scoped>

.wait {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: black;
  z-index: 100;
}

#lien {
  position: absolute;
  bottom: 10px;
  color: #bdbdbd;
  font-size: 2.3rem;
}
.wait .container #qr {
  width: 20%;
  border-radius: 10px;
}

.wait .container .qr {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;
}

.wait p {
  font-size: 3em;
  font-weight: bold;
  color: white;
}

.wait .container {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
}
.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
}
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  gap: 10px;
  justify-content: center;
}

.items {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 32%;
  height: 45%;
}

.items p {
  color: white;
  font-family: 'Red Hat Display', sans-serif;
  font-size: 1.5rem;
  padding: 10px 0 10px 0;
}

.lds-default {
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
}
.lds-default div {
  position: absolute;
  width: 6px;
  height: 6px;
  background: #fff;
  border-radius: 50%;
  animation: lds-default 1.2s linear infinite;
}
.lds-default div:nth-child(1) {
  animation-delay: 0s;
  top: 37px;
  left: 66px;
}
.lds-default div:nth-child(2) {
  animation-delay: -0.1s;
  top: 22px;
  left: 62px;
}
.lds-default div:nth-child(3) {
  animation-delay: -0.2s;
  top: 11px;
  left: 52px;
}
.lds-default div:nth-child(4) {
  animation-delay: -0.3s;
  top: 7px;
  left: 37px;
}
.lds-default div:nth-child(5) {
  animation-delay: -0.4s;
  top: 11px;
  left: 22px;
}
.lds-default div:nth-child(6) {
  animation-delay: -0.5s;
  top: 22px;
  left: 11px;
}
.lds-default div:nth-child(7) {
  animation-delay: -0.6s;
  top: 37px;
  left: 7px;
}
.lds-default div:nth-child(8) {
  animation-delay: -0.7s;
  top: 52px;
  left: 11px;
}
.lds-default div:nth-child(9) {
  animation-delay: -0.8s;
  top: 62px;
  left: 22px;
}
.lds-default div:nth-child(10) {
  animation-delay: -0.9s;
  top: 66px;
  left: 37px;
}
.lds-default div:nth-child(11) {
  animation-delay: -1s;
  top: 62px;
  left: 52px;
}
.lds-default div:nth-child(12) {
  animation-delay: -1.1s;
  top: 52px;
  left: 62px;
}
@keyframes lds-default {
  0%, 20%, 80%, 100% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.5);
  }
}

</style>
