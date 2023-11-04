<template>
  <div class="footer">
    <div class="container">
      <p>© Copyright 2023 - made by Zenmon Drops</p>
    </div>
  </div>
</template>

<style scoped>

.footer {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100vw;
  height: 50px;
  z-index: 1;
}

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.container p {
  color: grey;
}
</style>