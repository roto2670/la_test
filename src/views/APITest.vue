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

    <h2 v-if="lv > 1415"> 군단장 레이드 </h2>
    <div v-if="lv > 1415" id='commander-area2' class='commander-area2'>
      <div class="card-form">
        <div v-if="valtan" id='commander-box-valtan2' class="commander-box-valtan2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 발탄 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!valtan">
          </div>
        </div>
        <div v-if="valtan" id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>

      <div class="card-form">
        <div v-if="biac" id='commander-box-biac2' class="commander-box-biac2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 비아키스 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!biac">
          </div>
        </div>
        <div v-if="biac" id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>

      <div class="card-form">
        <div v-if="kuku" id='commander-box-kuku2' class="commander-box-kuku2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 쿠크세이튼 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!kuku">
          </div>
        </div>
        <div v-if="kuku" id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>
      
      <div class="card-form">
        <div v-if="abrel" id='commander-box-abrel2' class="commander-box-abrel2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 아브렐슈드 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!abrel">
          </div>
        </div>
        <div v-if="abrel" id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>

    </div>

    <h2 v-if="lv > 1370"> 어비스 레이드 </h2>
    <div v-if="lv > 1370" id='abyss-raid-area' class='abyss-raid-area'>
      <div class="card-form">
        <div v-if="argos" id='abyss-raid-box-argos' class="abyss-raid-box-argos">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 아르고스 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!argos">
          </div>
        </div>
        <div v-if="argos"  id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>
    </div>

    <h2 v-if="lv > 960"> 어비스 던전 </h2>
    <div v-if="lv > 960" id='chal-abyss-dun-area' class='chal-abyss-dun-area'>   <!-- 도비스 -->
      <div class="card-form">
        <div v-if="abyss_dun" id='chal-abyss-dungeon-box' class="chal-abyss-dungeon-box">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 어비스 던전 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!abyss_dun">
          </div>        
        </div>
        <div v-if="abyss_dun"  id='val-button' class="commander-box-button">
          체크하기
        </div>
      </div>
    </div>

    <h2 v-if="lv > 460"> 도전 가디언 </h2>
    <div v-if="lv > 460" id='chal-gardian-area' class='chal-gardian-area'>   <!-- 도가토 -->
      <div class="card-form">
        <div v-if="chal_guar" id='chal-gardian-box' class='chal-gardian-box'> 
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 도전 가디언 </label>
          </div>
          <div id='label-form' class="label-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked" :disabled="!chal_guar">
          </div>           
        </div>
        <div v-if="chal_guar"  id='val-button' class="commander-box-button">
          체크하기
        </div>

      </div>
    </div>

    <!-- test area -->

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
        sweetalert.fire({
          icon: 'error',
          title:  '캐릭터 이름을 입력해 주세요'
        });
      } else {
      let _charID = this.char_id
        services.getID(_charID, (resData) => {
          if (resData == 'null'){
            sweetalert.fire({
              icon: 'error',
              title: '존재하지 않는 캐릭터 입니다.'
            });
          } else {
            this._commanderLvFilter(resData);
            this._abyssRaidFilter(resData);
            this._abyssDunFilter(resData);
            this._charGuardianFilter(resData);
            this.lv = resData;
          }
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
    padding-top: 10px;
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

  h2 {
    text-align: left;
    margin-bottom: 0px;
  }

  .chal-gardian-area {
    padding: 10px;
    background-color: #1ba6e2;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: 100%;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .chal-abyss-dun-area {
    padding: 10px;
    background-color: #1be2d5;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: 100%;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .abyss-raid-area {
    padding: 10px;
    background-color: #7ee21b;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: 100%;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .abyss-raid-box-argos {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/argos.png");
    background-size: cover;
  }

  .chal-abyss-dungeon-box {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/abyss_dun_1.png");
    background-size: cover;
  }

  .chal-gardian-box {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/urnil.jpg");
    background-size: cover;
  }
  
  .card-form {
    float: left;
    margin-left: 10px;
    margin-right: 10px;
    width: 160px;
    height: 200px;
  }

  .commander-box-valtan2 {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/valtan.jpg");
    background-size: cover;
  }

  .commander-box-biac2 {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/biac.jpg");
    background-size: cover;
  }

  .commander-box-kuku2 {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/kuku.jpg");
    background-size: cover;
  }

  .commander-box-abrel2 {
    float: left;
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/abrel.jpg");
    background-size: cover;
  }

  .commander-box-button {
    margin-right: 5px;
    margin-top: 10px;
    display: inline-block;
    font-size: 25px;
    cursor: pointer;
    width: 155px;
    height: 25px;
    border: 2px solid #000000;
    border-radius: 10px;
    background-color: #38a169;
    color: #2c3e50;
    box-shadow: 2px 2px;
  }

  .commander-area2 {
    padding: 10px;
    background-color: #e2dc1b;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: 100%;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .search-area {
    margin-top: 0px;
    margin-bottom: 20px;
    padding: 10px;
    padding-top: 5px;
  }

  .pic-form{
    width: 160px;
    height: 100px;
    opacity: 0;
  }

  .label-form {
    width: 160px;
    height: 30px;
  }

  .commander-pic {
    width: 80px;
    opacity: 0;
  }

  .chk-box {
    width: 20px;
    height: 20px;
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
