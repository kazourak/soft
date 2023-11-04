<script>
import ProgressBar from "../components/ProgressBar.vue";
import ResultViewer from "../components/ResultViewer.vue";
import axios from "axios";
import jscookie from "js-cookie";
import {ref} from "vue";
export default {
  components: {ResultViewer, ProgressBar},
  data() {
    return {
      level: 0,
      currentctg: 'Communication',
      currentqst: 'J\'écoute mes collègues sans les interrompre',
      nbr_qst: 0,
      communication_value: 0,
      resolution_value: 0,
      empathie_value: 0,
      gestion_value: 0,
      prise_value: 0
    };
  },
  methods: {
    addValue(value) {
      const x = this.nbr_qst;
      switch (true) {
        case (x < 3):
          this.communication_value += value;
          break;
        case (x < 6):
          this.resolution_value += value;
          break;
        case (x < 9):
          this.empathie_value += value;
          break;
        case (x < 12):
          this.gestion_value += value;
          break;
        case (x < 15):
          this.prise_value += value;
          break;
        default:
          break;
      }
      if(this.nbr_qst < 14)
        this.level += 7;
      else
      {
        this.level = 100;
        this.requestSkills();
      }
      this.nbr_qst++;
      this.changeQst();
    },
    changeQst() {

      const mappings_qst = {
        1: "J'exprime mes idées clairement et directement, dans le respect de mes interlocuteurs",
        2: "Je suis capable de communiquer tranquillement avec un supérieur autoritaire",
        3: "Je suis compétent à résoudre des problèmes complexes",
        4: "Je pose des questions pertinentes quand je ne comprends pas ce qu'on attend de moi",
        5: "Je suis capable de prendre des risques raisonnables pour faire preuve d'initiative",
        6: "Je suis amical.e et traite tout le monde avec respect",
        7: "Je suis capable de me mettre à la place de quelqu'un pour bien comprendre son problème",
        8: "Je fais preuve de compréhension lorsque quelqu'un est de mauvaise humeur",
        9: "Je rentre en résitance quand il s'agit de faire de grands changements",
        10: "Je sais trouver des avantages au changement, même lorsque je n'y adhère pas",
        11: "J'aime analyser l'impact d'un changement et en évaluer la pertinence",
        12: "Je me renseigne longtemps avant de prendre une décision",
        13: "Je prends l'avis de mes pairs avant de prendre une décision",
        14: "J'adhère à la phrase \"Ne pas prendre de décision, c'est une décision\"",
      };

      if (this.nbr_qst % 3 === 0) {
        const tranche = Math.floor(this.nbr_qst / 3);
        const mappingsCtg = {
          1: "Résolution de problèmes",
          2: "Empathie",
          3: "Gestion du changement",
          4: "Prise de décision",
        };
        this.currentctg = mappingsCtg[tranche] || "";
      }
      this.currentqst = mappings_qst[this.nbr_qst] || "";
    },
    async requestSkills() {
      let skillstab = [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0]
      ];

      if (!jscookie.get('bilan'))
      {
        skillstab[0][this.getIndex(this.communication_value)] = 1;
        skillstab[1][this.getIndex(this.resolution_value)] = 1;
        skillstab[2][this.getIndex(this.empathie_value)] = 1;
        skillstab[3][this.getIndex(this.gestion_value)] = 1;
        skillstab[4][this.getIndex(this.prise_value)] = 1;
        axios.post('http://34.16.130.215:3000/add', {
          skills: skillstab
        })
            .then(response => {
              // jscookie.set('bilan');
            })
            .catch(error => {
              console.error('Erreur lors de la requête :', error);
            });
      }
    },
    getIndex(nb) {
      const valeurConvertie = Math.floor(nb / 3);
      console.log(valeurConvertie);
      if (valeurConvertie >= 0 && valeurConvertie <= 1 ) {
        return 0;
      } else if (valeurConvertie >= 2 && valeurConvertie <= 3) {
        return 1;
      } else {
        return 2;
      }
    }
  },
}
</script>
<template>
  <progress-bar :level="level"/>
  <div class="body">
    <div v-if="(this.nbr_qst < 15)" class="container">
      <p>{{currentctg}}</p>
      <span :key="nbr_qst" class="animated-text">{{currentqst}}</span>
      <div class="note">
        <div class="container">
          <p style="font-size: 1.4em">Pas du tout</p>
          <div @click="addValue(0)" class="items">
            <p>0</p>
          </div>
          <div @click="addValue(1)" class="items">
            <p>1</p>
          </div>
          <div @click="addValue(2)" class="items">
            <p>2</p>
          </div>
          <div @click="addValue(3)" class="items">
            <p>3</p>
          </div>
          <div @click="addValue(4)" class="items">
            <p>4</p>
          </div>
          <div @click="addValue(5)" class="items">
            <p>5</p>
          </div>
          <p style="font-size: 1.4em">Tout à fait</p>
        </div>
      </div>
    </div>
    <ResultViewer v-if="this.nbr_qst === 15" :prise="this.prise_value" :gestion="this.gestion_value" :empathie="this.empathie_value" :resolution="this.resolution_value" :communication="this.communication_value"/>
  </div>
</template>

<style scoped>

* {
  user-select: none;
}

.body {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  padding: 100px 10px 0 10px;
}

.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
}

.container p {
  font-family: 'Red Hat Display', sans-serif;
  color: white;
  font-size: 2.4em;
  font-weight: bold;
}

.container span {
  font-family: 'Red Hat Display', sans-serif;
  font-size: 2em;
  font-weight: bold;
  text-align: center;
}

.note {
  position: absolute;
  bottom: 10%;
  width: 100%;
  height: 200px;
}

.note .container {
  width: 100%;
  height: 100%;
  gap: 45px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.note .container p {
  font-weight: normal;
  font-size: 2em;
  color: grey;
}

.note .container .items {
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  width: 110px;
  height: 160px;
  border: solid 5px white;
  border-radius: 30px;
  transition: all 0.2s ease-in-out;
}

.note .container .items:active {
  background-color: white;

}

.note .container .items:active p {
  color: black;
}

.note .container .items p {
  color: white;
  font-weight: bold;
}

@media screen and (max-width: 940px) {
  .container p {
    font-size: 2em;
  }

  .container span {
    font-size: 1.5em;
  }


  .note {
    margin-top: 5px;
    width: 100%;
    height: 50%;
  }

  .note .container {
    gap: 5%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .note .container p {
    font-weight: normal;
    font-size: 1.4em;
  }

  .note .container .items {
    width: 30%;
    height: 15% !important;
    border: solid 2px white;

  }
}

@media screen and (max-height: 590px) {
  .container {
    gap: 10px;
  }

  .container p {
    font-size: 1.6em;
  }
  .container span {
    font-family: 'Red Hat Display', sans-serif;
    font-size: 1.2em;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
}

.animated-text {
  animation: 0.5s appear ease-in-out;
}

@keyframes appear {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>