<script>
export default {
  props: {
    value: {
      type: Number,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
     note: 0,
      sentence: 'error'
    };
  },
  methods: {
    getColor() {
      if (this.note >= 0 && this.note <= 1)
        return 'red';
      else if (this.note >= 2 && this.note <= 3)
        return 'orange';
      else
        return 'green';
    },
    getSentence() {
      if (this.note >= 0 && this.note <= 1)
        this.sentence = 'Voilà un défi à relever, activer et développer cette compétence comportementale pour un meilleur épanouissement au travail !';
      else if (this.note >= 2 && this.note <= 3)
        this.sentence = 'Vous avez conscience que cette compétence existe et vous pourrait la muscler pour qu’elle vous soit utile au quotidien dans votre travail';
      else
        this.sentence = 'C’est une compétence comportementale que avez acquise, il vous sera naturel de l’utiliser dans votre quotidien au travail';
    }
  },
  beforeMount() {
    this.note = Math.round(this.value / 3);
    this.getSentence();
  }
};
</script>

<template>
<div class="graph-section animated-text">
  <p>{{title}}</p>
  <div class="result">
    <span>Vous avez un score de </span>
    <p :class="getColor()">{{ note }}</p>
    <span>sur 5 !</span>
  </div>
  <div id="sentence">
    <p>{{this.sentence}}</p>
  </div>
</div>
</template>

<style scoped>

.graph-section {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  margin-top: 10%;
}

.graph-section p {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: bold;
  font-size: 3em;
  color: white;
}

#sentence {
  margin-top: 50px;
  padding: 0 20% 0 20%;
}

#sentence p {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: normal;
  font-size: 2em;
  text-align: center;
  color: white;
}

.graph-section .result {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
}

.graph-section .result p {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: bold;
  font-size: 1.6em;
}

.graph-section .result span {
  font-family: 'Red Hat Display', sans-serif;
  font-weight: bold;
  font-size: 1.6em;
  color: #cecece;
}

.red {
  color: red !important;
}

.orange {
  color: orange !important;
}

.green {
  color: green !important;
}

@media screen and (max-width: 940px)
{
  .graph-section p {
    font-size: 1.8em;
  }

  .graph-section .result p {
    font-size: 1.4em;
  }

  .graph-section .result span {
    font-size: 1.4em;
  }

  #sentence {
    padding: 0 10% 0 10%;
  }

  #sentence p {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: normal;
    font-size: 1.3em;
    text-align: center;
    color: white;
  }
}

@media screen and (max-width: 320px)
{
  .graph-section p {
    font-size: 1em;
  }

  .graph-section .result p {
    font-size: 1em;
  }

  .graph-section .result span {
    font-size: 1em;
  }

  #sentence {
    padding: 0 10% 0 10%;
  }

  #sentence p {
    font-family: 'Red Hat Display', sans-serif;
    font-weight: normal;
    font-size: 1.3em;
    text-align: center;
    color: white;
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