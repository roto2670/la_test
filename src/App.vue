<template>
  <!-- <sidebar /> -->
  <div class="main?" v-on="{ mousedown : mousedown }">
    <div class="header-box">
      <div id='title-box' class="title-box">
        <div class="title-text">주간 숙제 스케줄표 테스트 
          <small class="version-text">Ver {{ version }}</small> 
        </div> 
      </div>
    </div>

    <div id='content-view' class="content-view">
      <members v-if="!check" @login-ok-button="confirmCheck" />
      <apiTest v-if="check" :currentID="login_id"/>
    </div>

  </div>
</template>

<script>
// import sidebar from '@/components/sidebar/sidebar';
// import mainHome from '@/views/Home.vue'
import apiTest from '@/views/APITest.vue'
import members from '@/views/Members.vue'


export default ({
  components: { 
      // sidebar,
      // mainHome,
      apiTest,
      members
  },
  data() {
    return {
      version: "1.2.2",
      check: false,
      login_id: ""
    }
  },
  methods: {
    mousedown(e) {
      if (e.button === 0) {
        console.log("click")
        // if(this.login_id ){
        //   const act_time = parseInt(localStorage.getItem("act_time"))
        //   if (Date.now() / 1000 - act_time > 10800) {
        //     this.sweetalert.fire({
        //       icon: 'error',
        //       title: '로그인 시간 만료',
        //       text: '로그인 후 3시간동안 동작이 없으면, 자동 로그아웃 됩니다..'
        //     }).then((result) => {
        //       if (result.isConfirmed) {
        //         this.login_id = "";
        //         this.check = false;
        //       }
        //     })
        //   } else {
        //     localStorage.setItem("act_time", Date.now() / 1000)
        //   }
        // }
      }
    },
    
    confirmCheck(value) {
      this.check = value;
      this.login_id = value.login_ID;
      // localStorage.setItem("login_id", this.login_id)
      // localStorage.setItem("act_time", Date.now() / 1000)
    },

    // delLocalstorage(){
    //   localStorage.removeItem("login_id")
    //   localStorage.removeItem("act_time")
    // }
  },
  created() {
    // let token = localStorage.getItem("login_id"),
    //     act_time = parseInt(localStorage.getItem("act_time"))
    // if (token) {
    //   if (Date.now() / 1000 - act_time > 10800) {
    //     console.log("expired login")
    //     localStorage.removeItem("login_id")
    //     localStorage.removeItem("act_time")
    //     document.addEventListener('beforeunload', this.delLocalstorage())
    //   } else {
    //     console.log("login history")
    //     this.login_id = token;
    //     this.check = true;
    //     document.addEventListener('beforeunload', this.delLocalstorage())
    //     localStorage.setItem("login_id", this.login_id)
    //     localStorage.setItem("act_time", Date.now() / 1000)

    //   }
    // } else {
    //   console.log("first time open")
    //   document.addEventListener('beforeunload', this.delLocalstorage())
    // }
  },



})
</script>

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

#swal2-html-container {
  font-family: 'Jua', sans-serif;
}

#swal2-button {
  font-family: 'Jua', sans-serif;
}

.title-text {
  font-size: 50px;
  font-weight: bold
}

.version-text {
  font-size: 20px;
}

</style>
