<script setup>
defineProps({
  level: {
    type: Number,
    required: true
  }
})
</script>

<template>
<div class="section">
  <div class="container">
    <div class="bar">
      <div class="progress" :style="`width: ${level}%;`"></div>
    </div>
    <p>{{level}}%</p>
  </div>
</div>
</template>

<style scoped>

.section {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 80px;
  z-index: 1;
}

.container {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  padding-left: 50px;
}

.bar {
  display: flex;
  align-items: center;

  width: 300px;
  height: 5px;
  border-radius: 3px;
  background-color: #000000;
}

.container p {
  margin-left: 15px;
}

.progress {
  position: relative;
  display: block;
  height: 100%;
  background-color: #be4acb;
  border-radius: 3px;
  transition: width .3s,background-color .5s;
}

@media screen and (max-width: 410px)
{
  .container {
    justify-content: center;
    align-items: center;
    padding-left: 0;
  }
}
</style>