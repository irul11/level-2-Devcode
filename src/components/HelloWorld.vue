<template>
  <div class="hello">
    <img
      data-cy="devcode-logo"
      src="../assets/devcode-logo.png"
      alt="devcode logo"
    />
    <div data-cy="devcode-title">
      <h1>I'm ready for the next challenge!</h1>
    </div>
    <div data-cy="router-button">
      <router-link class="router__btn" to="/contacts"
        >Level Selanjutnya</router-link
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.hello {
  margin: 15% 0 0;
  text-align: center;

  img {
    width: 15%;
    height: 15%;
  }
}
</style>
