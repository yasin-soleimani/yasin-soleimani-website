<template>
  <div>
    <navbar-component />
    <router-view />
    <footer-component />
  </div>
</template>

<script lang="ts">
import NavbarComponent from "@/components/landing/Navbar.vue";
import FooterComponent from "@/components/landing/Footer.vue";
import { defineComponent } from "vue";
export default defineComponent({
  name: "App",

  components: { NavbarComponent, FooterComponent },
});
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
