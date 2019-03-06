<template>
  <header class="navbar vis-navbar">
  <section class="navbar-section">
    <a href="..." class="navbar-brand mr-2">Spectre.css</a>
    <a href="..." class="btn btn-link">Docs</a>
    <a href="..." class="btn btn-link">GitHub</a>
  </section>
  <section class="navbar-section">
    <div class="input-group input-inline">
      <input class="form-input" type="text" placeholder="search">
      <button class="btn btn-primary input-group-btn">Search</button>
    </div>
  </section>
</header>
</template>




<script>
export default {
  name: 'Navbar'
}
</script>


<style lang="scss">
.vis-navbar {
    box-shadow: 0 0 10px 0 rgba( 127, 127, 127, 0.398 );
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
    background: white;
  }

</style>