<script>
export default {
  props: {
    green: Number,
    orange: Number,
    red: Number
  },
  data() {
    return {
      gp: 0,
      op: 0,
      rp: 0
    };
  },
  watch: {
    green(newGreen, oldGreen) {
      this.miseAJour();
    },
    orange(newOrange, oldOrange) {
      this.miseAJour();
    },
    red(newRed, oldRed) {
      this.miseAJour();
    }
  },
  methods: {
    miseAJour() {
      const total = this.green + this.orange + this.red;
      this.gp = (this.green / total) * 100;
      this.op = (this.orange / total) * 100;
      this.rp = (this.red / total) * 100;
    }
  },
  mounted() {
    this.miseAJour();
  },
}
</script>



<template>
<div class="container">
  <div class="graph">
    <div class="bar">
      <div class="green" :style="`height: ${this.gp}%;`" :key="this.red"></div>
      <div class="orange" :style="`height: ${this.op}%;`"></div>
      <div class="red" :style="`height: ${this.rp}%;`"></div>
    </div>
  </div>
  <div class="stats">
    <p id="red">{{red}}</p>
    <p id="orange">{{orange}}</p>
    <p id="green">{{green}}</p>
  </div>
</div>
</template>

<style scoped>

.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.graph {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  padding-bottom: 30px;
  padding-top: 10px;
}

.bar {
  width: 15%;

  height: 100%;
  overflow: hidden;
  background-color: white;
  border-radius: 10px;
}

.orange {
  width: 100%;
  background-color: #ffa53e;
}

.green {
  width: 100%;
  background-color: #0fe75b;
}

.red {
  width: 100%;
  background-color: #ff5154;
}

#red {
  color: red;
}

#orange {
  color: #ff9112;
}

#green {
  color: #7cff60;
}
</style>