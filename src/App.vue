<script>
// import sidebar from '@/components/sidebar/sidebar';
// import mainHome from '@/views/Home.vue'
import apiTest from '@/views/APITest.vue'

export default ({
  components: { 
      // sidebar,
      // mainHome,
      apiTest
    }
})
</script>


<template>
  <!-- <sidebar /> -->
  <div class="main?">
    <apiTest />
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Hi+Melody&family=Jua&display=swap');
/* 
font-family: 'Hi Melody', cursive;
font-family: 'Jua', sans-serif; 
*/

#app {
  text-align: center;
  color: #2c3e50;
  min-width: max-content;
  font-family: 'Jua', sans-serif;
}

#nav {
  margin-left: 250px;
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#swal2-title {
  font-family: 'Jua', sans-serif;
}

</style>
