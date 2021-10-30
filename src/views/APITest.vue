<template>
  <div id='weekly' class="weekly">
    <div class="header-box">
      <div id='title-box' class="title-box">
        <h1>주간 숙제 스케줄표 테스트</h1>
      </div>
      <div id='search-area' class="search-area">
        <input v-on:keyup.enter="clickOkButton" v-model="char_id" id="charID" type="text" class="char-id">
        <div class="ok-button" @click="clickOkButton">
          OK
        </div>
      </div>
    </div>

    <div v-if="lv" id='commander-area' class='commander-area'>
      <div v-if="valtan" id='commander-box-valtan' class='commander-box-valtan'> 
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 발탄 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!valtan">
        </div>
      </div>
      <div v-if="biac" id='commander-box-biac' class='commander-box-biac'>
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 비아 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!biac">
        </div>
      </div>
      <div v-if="kuku" id='commander-box-kuku' class='commander-box-kuku'>
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 쿠쿠 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!kuku">
        </div>
      </div>
      <div v-if="abrel" id='commander-box-abrel' class='commander-box-abrel'>
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 아브렐 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!abrel">
        </div>
      </div>
    </div>

    <div v-if="lv" id='_cchal-abyss-raid-area' class='_cchal-abyss-raid-area'>
      <div v-if="argos" id='chal-raid-box-argos' class='chal-raid-box-argos'> 
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 아르고스 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!argos">
        </div>
      </div>
    </div>

    <div v-if="lv" id='chal-abyss-dun-area' class='chal-abyss-dun-area'>   <!-- 도비스 -->
      <div v-if="abyss_dun" id='chal-abyss-dungeon-box' class='chal-abyss-dungeon-box'> 
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 어비스 던전 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!abyss_dun">
        </div>
      </div>
    </div>

    <div v-if="lv" id='chal-gardian-area' class='chal-gardian-area'>   <!-- 도가토 -->
      <div v-if="chal_guar" id='chal-gardian-box' class='chal-gardian-box'> 
        <div>
          <img class="commander-pic" alt="Vue logo" src="../assets/commander/block.jpg" />
        </div>
        <label for="checkbox"> 도전 가디언 </label>
        <div>
          <input type="checkbox" id="checkbox" v-model="checked" :disabled="!chal_guar">
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import * as services from '../services/services.js';
import sweetalert from 'sweetalert2';


// @ is an alias to /src
export default {
  name: "weekly",
  data() {
    return{
      char_id: "",
      valtan: false,
      biac: false,
      kuku: false,
      abrel: false,
      argos: false,
      chal_guar: false,
      abyss_dun: false,
      lv: ""
    }
  },
  methods: {
    clearData() {
      this.valtan = false,
      this.biac = false,
      this.kuku = false,
      this.abrel = false,
      this.argos = false,
      this.chal_guar = false,
      this.abyss_dun = false,
      this.lv = ""
    },

    clickOkButton() {
      this.clearData()
      if (!this.char_id) {
        sweetalert.fire('캐릭터 이름을 입력해 주세요');
      } else {
      let _charID = this.char_id
        services.getID(_charID, (resData) => {
          console.log("success to get Lv : ", resData);
          this._commanderLvFilter(resData);
          this._abyssRaidFilter(resData);
          this._abyssDunFilter(resData);
          this._charGuardianFilter(resData);
          this.lv = resData;
        }, (error) => {
          console.log("fail to get Lv : ", error);
        })
      }
    },
    
    _commanderLvFilter(lvdata) {
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

    _abyssRaidFilter(lvdata) {
      for(var i in window.CONSTANTS.ABYSS_RAID) {
        switch(i) {
          case "0":
            if(lvdata > window.CONSTANTS.ABYSS_RAID[i]) {
              this.argos = true;
            } else {
              this.argos = false;
            }
          break;
        }
      }
    },

    _abyssDunFilter(lvdata) {
      for(var i in window.CONSTANTS.CHALLENGE_ABYSS_DUNGEON) {
        switch(i) {
          case "0":
            if(lvdata > window.CONSTANTS.CHALLENGE_ABYSS_DUNGEON[i]) {
              this.abyss_dun = true;
            } else {
              this.abyss_dun = false;
            }
          break;
        }
      }      
    },

    _charGuardianFilter(lvdata) {
      for(var i in window.CONSTANTS.CHALLENGE_GUARDIAN) {
        switch(i) {
          case "0":
            if(lvdata > window.CONSTANTS.CHALLENGE_GUARDIAN[i]) {
              this.chal_guar = true;
            } else {
              this.chal_guar = false;
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
  #weekly {
    margin-left: 270px;
    padding: 30px;
  }

  #APITest2 {
    margin-left: 270px;
    padding: 30px;
  }


  h1 {
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .chal-gardian-area {
    padding: 10px;
    background-color: #1ba6e2;
    color: #ffffff;
    font-size: 20px;
    height: 140px;
    width: 1000000px;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .chal-abyss-dun-area {
    padding: 10px;
    background-color: #1be2d5;
    color: #ffffff;
    font-size: 20px;
    height: 140px;
    width: 1000000px;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  ._cchal-abyss-raid-area {
    padding: 10px;
    background-color: #7ee21b;
    color: #ffffff;
    font-size: 20px;
    height: 140px;
    width: 1000000px;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .chal-raid-box-argos {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/argos.png");
    background-size: cover;
  }

  .chal-abyss-dungeon-box {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 150px;
    height: 140px;
    border: 5px solid #000000;
    border-radius: 5px;
    background-image: url("../assets/commander/dungeon.png");
    background-size: cover;
  }

  .chal-gardian-box {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/urnil.jpg");
    background-size: cover;
  }

  .commander-area {
    padding: 10px;
    background-color: #e2dc1b;
    color: #ffffff;
    font-size: 20px;
    height: 140px;
    width: 1000000px;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
  }

  .commander-box {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
  }

  .commander-box-valtan {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/valtan.jpg");
    background-size: cover;
  }

  .commander-box-biac {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/biac.jpg");
    background-size: cover;
  }

  .commander-box-kuku {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/kuku.jpg");
    background-size: cover;
  }

  .commander-box-abrel {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 8em;
    height: 140px;
    border-radius: 5px;
    background-image: url("../assets/commander/abrel.jpg");
    background-size: cover;
  }

  .search-area {
    margin-top: 0px;
    margin-bottom: 20px;
    padding: 10px;
    padding-top: 5px;
  }

  .commander-pic {
    width: 80px;
    opacity: 0;
  }

  .ok-button {
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
