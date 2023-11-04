<script setup>
import ResultComponent from "./ResultComponent.vue";
import {onMounted, ref} from "vue";
import axios from "axios";

const state = ref(0)

function changeResult() {
    state.value++;
}

function endTest() {
  state.value = 0;
}

defineProps({
  communication: {
    type: Number,
    required: true,
    default: 0
  },
  resolution: {
    type: Number,
    required: true,
    default: 0
  },
  empathie: {
    type: Number,
    required: true,
    default: 0
  },
  gestion: {
    type: Number,
    required: true,
    default: 0
  },
  prise: {
    type: Number,
    required: true,
    default: 0
  }
})


</script>

<template>
  <div class="result-section">
    <div class="container">
      <ResultComponent v-if="state === 0" title="Communication" :value="this.communication"/>
      <ResultComponent v-if="state === 1" title="Résolution de problèmes" :value="this.resolution"/>
      <ResultComponent v-if="state === 2" title="Empathie" :value="this.empathie"/>
      <ResultComponent v-if="state === 3" title="Gestion du changement" :value="this.gestion"/>
      <ResultComponent v-if="state === 4" title="Prise de décision" :value="this.prise"/>
      <div v-if="state <= 4" @click="changeResult" class="button">Suivant</div>
      <div v-if="state >= 5" class="container" style="padding-top: 10%; text-align: center">
        <p id="text-fin">Merci pour votre participation !</p>
        <p id="subtext-fin">Vous pouvez fermer cette page ou revoir le resultat de votre bilan de soft skills.</p>
      </div>
      <div v-if="state >= 5" @click="endTest" class="button">Revoir mon bilan</div>
    </div>
  </div>
</template>

<style scoped>

* {
  user-select: none;
}

#text-fin {
  font-size: 2.4rem;
  color: white;
}

#subtext-fin {
  font-size: 1.4rem;
}

.result-section {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
}

.result-section .container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.result-section .container .button {
  position: absolute;
  bottom: 10%;
  margin-top: 20px;
  font-size: 1.4em;
  color: black;
  padding: 10px 30px 10px 30px;
  border-radius: 50px;
  background-color: white;
}
</style>