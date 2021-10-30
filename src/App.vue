<script>
import sidebar from '@/components/sidebar/sidebar';

export default ({
  components: { sidebar }
})
</script>


<template>
  <sidebar />
  <div>
    <router-view />
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
  min-width: 1080px;
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
