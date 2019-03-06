<template>
  <div id="wrapper">
   <navbar></navbar>
    <Toast></Toast>
    <cite> Robak kiwając głową rzekł: Do jutra rana <br>
      Mam czas. Teraz, mój bracie, poślij do plebana, <br>
      Aby tu jak najrychlej przybył z wijatykiem <br>
      Oddal stąd wszystkich, zostań tylko sam z Klucznikiem <br>
      Zamknij drzwi.</cite>
      <p>"Musicie od siebie wymagać, nawet gdyby inni od was nie wymagali".</p>
    <RandomChart></RandomChart>
  </div>
</template>

<script>
  import SystemInformation from './LandingPage/SystemInformation'
  import RandomChart from './RandomChart'
  import Navbar from './Navbar'
  import Toast from './Toast'
  
  export default {
    name: 'landing-page',
    components: { SystemInformation, RandomChart, Navbar, Toast },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style lang="scss">
  /* write SCSS here */
  @import './../../../node_modules/spectre.css/src/spectre.scss';

  $myFavColor: #f4857a;

  #app {
    padding: 1rem;
    padding-top: 3rem;

  }

  p {
    color: $myFavColor;
  }

</style>
