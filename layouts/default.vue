<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <main class="app">
    <HeaderComponent />
    <Nuxt />
    <footer>
      <FooterComponent />
    </footer>
  </main>
</template>

<script>
import FooterComponent from "@/components/FooterComponent";
import HeaderComponent from "@/components/HeaderComponent";
export default {
  components: {
    FooterComponent,
    HeaderComponent,
  },
};
</script>

 <style>
.app {
  font-family: "Poppins", sans-serif;
}
</style>