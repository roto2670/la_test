<template>
  <div id='APITest' class="APITest">
    <h1>This is an api test page</h1>
    <input v-on:keyup.enter="clickOkButton" v-model="char_id" id="charID" type="text" class="char-id">
    <div class="tunnel-info-ok-button" @click="clickOkButton">
      OK
    </div>
  </div>
  <div id='commander-area' class='commander-area'>
    <div id='commander-box' class='commander-box'> 
      <div>
        <img class="commander-pic" alt="Vue logo" src="../assets/commander/valtan.jpg" />  
      </div>
      <label for="checkbox"> 발탄 </label>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" :disabled="!valtan">
      </div>
    </div>
    <div id='commander-box' class='commander-box'>
      <div>
        <img class="commander-pic" alt="Vue logo" src="../assets/commander/biac.jpg" />
      </div>
      <label for="checkbox"> 비아 </label>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" :disabled="!biac">
      </div>
    </div>
    <div id='commander-box' class='commander-box'>
      <div>
        <img class="commander-pic" alt="Vue logo" src="../assets/commander/kuku.jpg" />
      </div>
      <label for="checkbox"> 쿠쿠 </label>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" :disabled="!kuku">
      </div>
    </div>
    <div id='commander-box' class='commander-box'>
      <div>
        <img class="commander-pic" alt="Vue logo" src="../assets/commander/abrel.jpg" />
      </div>
      <label for="checkbox"> 아브렐 </label>
      <div>
        <input type="checkbox" id="checkbox" v-model="checked" :disabled="!abrel">
      </div>
    </div>
  </div>
</template>

<script>
import * as services from '../services/services.js';

// @ is an alias to /src
export default {
  name: "APITest",
  data() {
    return{
      char_id: "",
      valtan: false,
      biac: false,
      kuku: false,
      abrel: false,
      lv: ""
    }
  },
  methods: {
    clickOkButton() {
      let _charID = this.char_id
      services.getID(_charID, (resData) => {
        console.log("success to get Lv : ", resData);
        this._commanderLvfilter(resData);
        this.lv = resData;
      }, (error) => {
        console.log("fail to get Lv : ", error);
      }) 
    },
    
    _commanderLvfilter(lvdata) {
      for(var i in window.CONSTANTS.COMMANDER) {
        switch(i) {
          case "0":
            if(lvdata > window.CONSTANTS.COMMANDER[i]) {
              this.valtan = true;
            } else {
              this.valtan = false;
            }
          break;
          case "1":
            if(lvdata > window.CONSTANTS.COMMANDER[i]) {
              this.biac = true;
            } else {
              this.biac = false;
            }
          break;
          case "2":
            if(lvdata > window.CONSTANTS.COMMANDER[i]) {
              this.kuku = true;
            } else {
              this.kuku = false;
            }
          break;
          case "3":
            if(lvdata > window.CONSTANTS.COMMANDER[i]) {
              this.abrel = true;
            } else {
              this.abrel = false;
            }
          break;
        }
      }
    },
  },
  computed(){
  },
  created() {
  },
};
</script>

<style>
  #APITest {
    margin-left: 270px;
    padding: 30px;
  }

  #APITest2 {
    margin-left: 270px;
    padding: 30px;
  }

  h2{
    text-align: left
  }
  .commander-area {
    margin-left: 270px;
    padding: 10px;
    background-color: #e2dc1b;
    color: #38a169;
    font-size: 20px;
    height: 120px;
    border-top-width: 30px;
    bosrder-left-width: 30px;
  }

  .commander-box {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 20%;
    height: 110px;
    border: 2px solid #000000;
    border-radius: 5px;
  }

  .commander-chk-box {
    
  }

  .commander-pic {
    width: 50px;
  }

  .tunnel-info-ok-button {
    display: inline-block;
    margin: 5px;
    padding: 5px;
    font-size: 20px;
    cursor: pointer;
    width: 5em;
    height: 1em;
    border: 2px solid #000000;
    border-radius: 10px;
    background-color: #38a169;
    color: #e2dc1b;
    box-shadow: 2px 2px;
  }

  .char-id {
    width: 30%;
    height: 2.4em;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    color: #1b94e2;
  }
</style>
