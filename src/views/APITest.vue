<template>
  <div id='weekly' class="weekly"> <!-- v-on="{ mousedown : mousedown }"> -->
  
    <div class="header-box">
      <div id='search-area' class="search-area">
        <input v-on:keyup.enter="clickOkButton" v-model="char_id" id="charID" type="text" class="char-id">
        <button class="button" @click="clickOkButton">검색하기</button>
      </div>
      <div>
        <dropdown :placeholder="placeholder" :options="arrayOfObjects" :selected="object" v-on:updateOption="methodToRunOnSelect"></dropdown>
      </div>
    </div>

    <h2 v-if="lv >= 1415" class="local-h2"> 군단장 레이드 </h2>
    <div v-if="lv >= 1415" id='commander-area2' class='commander-area2'>
      <div class="card-form">
        <div v-if="valtan" id='commander-box-valtan2' class="commander-box-valtan2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox"> 발탄 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox" v-model="checked_valtan" :disabled="!valtan" @change="changeValue">
          </div>
        </div>
        <!-- <button v-if="valtan" id='val-button' class="commander-box-button">
          체크하기
        </button> -->
      </div>

      <div class="card-form">
        <div v-if="biac" id='commander-box-biac2' class="commander-box-biac2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-biac"> 비아키스 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-biac" v-model="checked_biac" :disabled="!biac" @change="changeValue">
          </div>
        </div>
        <!--<div v-if="biac" id='val-button' class="commander-box-button">
          체크하기
        </div> -->
      </div>

      <div class="card-form">
        <div v-if="kuku" id='commander-box-kuku2' class="commander-box-kuku2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-kuku"> 쿠크세이튼 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-kuku" v-model="checked_kuku" :disabled="!kuku" @change="changeValue">
          </div>
        </div>
        <!--<div v-if="kuku" id='val-button' class="commander-box-button">
          체크하기
        </div> -->
      </div>
      
      <div class="card-form">
        <div v-if="abrel" id='commander-box-abrel2' class="commander-box-abrel2">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-abrel"> 아브렐슈드 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-abrel" v-model="checked_abrel" :disabled="!abrel" @change="changeValue">
          </div>
        </div>
        <!--<div v-if="abrel" id='val-button' class="commander-box-button">
          체크하기
        </div> -->
      </div>

    </div>

    <h2 v-if="lv >= 1370" class="local-h2"> 어비스 레이드 </h2>
    <div v-if="lv >= 1370" id='abyss-raid-area' class='abyss-raid-area'>
      <div class="card-form">
        <div v-if="argos" id='abyss-raid-box-argos' class="abyss-raid-box-argos">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-argos"> 아르고스 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-argos" v-model="checked_argos" :disabled="!argos" @change="changeValue">
          </div>
        </div>
        <!-- <div v-if="argos"  id='val-button' class="commander-box-button">
          체크하기
        </div> -->
      </div>
    </div>

    <h2 v-if="lv >= 960" class="local-h2"> 어비스 던전 </h2>
    <div v-if="lv >= 960" id='chal-abyss-dun-area' class='chal-abyss-dun-area'>   <!-- 도비스 -->
      <div class="card-form">
        <div v-if="abyss_dun" id='chal-abyss-dungeon-box' class="chal-abyss-dungeon-box">
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-abyss-dun"> 어비스 던전 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-abyss-dun" v-model="checked_abyss_dun" :disabled="!abyss_dun" @change="changeValue">
          </div>        
        </div>
        <!-- <div v-if="abyss_dun"  id='val-button' class="commander-box-button">
          체크하기
        </div> -->
      </div>
    </div>

    <h2 v-if="lv >= 460" class="local-h2"> 도전 가디언 </h2>
    <div v-if="lv >= 460" id='chal-gardian-area' class='chal-gardian-area'>   <!-- 도가토 -->
      <div class="card-form">
        <div v-if="chal_guar" id='chal-gardian-box' class='chal-gardian-box'> 
          <div id='pic-form' class="pic-form">
          </div>
          <div id='label-form' class="label-form">
            <label for="checkbox-chal-guar"> 도전 가디언 </label>
          </div>
          <div id='chk-form' class="chk-form">
            <input class="chk-box" type="checkbox" id="checkbox-chal-guar" v-model="checked_chal_guar" :disabled="!chal_guar" @change="changeValue">
          </div>           
        </div>
        <!-- <div v-if="chal_guar"  id='val-button' class="commander-box-button">
          체크하기
        </div> -->

      </div>
    </div>

    <!-- test area -->

  </div>
</template>

<script>
import dropdown from './view-dropdowns/Dropdown.vue';


// @ is an alias to /src
export default {
  name: "weekly",
  components: {
    dropdown,
  },
  props:{
    currentID: {
      type: String
    }
  },
  data() {
    return{
      version: "1.1",
      char_id: "",
      valtan: false,
      biac: false,
      kuku: false,
      abrel: false,
      argos: false,
      chal_guar: false,
      abyss_dun: false,
      checked_valtan: false,
      checked_biac: false,
      checked_kuku: false,
      checked_abrel: false,
      checked_argos: false,
      checked_chal_guar: false,
      checked_abyss_dun: false,
      lv: "",
      arrayOfObjects: [
      ],
      object: {},
      placeholder: '캐릭터를 선택해 주세요'
    }
  },
  methods: {
    changeValue() {
      let task_data = {},
          post_data = {"content": {}};

      task_data["201"] = this.checked_valtan;
      task_data["202"] = this.checked_biac;
      task_data["203"] = this.checked_kuku;
      task_data["204"] = this.checked_abrel;
      task_data["301"] = this.checked_abyss_dun;
      task_data["401"] = this.checked_chal_guar;
      task_data["501"] = this.checked_argos;

      post_data.content.login_id = this.currentID
      post_data.content["char_name"] = this.char_id;
      post_data.content["task"] = task_data;

      this.services.setTaskData(post_data, (resData) => {
        if(resData) {
          console.log("success to set task data")
        } else {
          console.log("fail to set task data")
        }
      })

    },

    methodToRunOnSelect(payload) {
      this.char_id = payload.name;
      this.clickOkButton()
    },
    
    clearData() {
      this.valtan = false,
      this.biac = false,
      this.kuku = false,
      this.abrel = false,
      this.argos = false,
      this.chal_guar = false,
      this.abyss_dun = false,
      this.lv = "",
      this.checked_valtan = false,
      this.checked_biac = false,
      this.checked_kuku = false,
      this.checked_abrel = false,
      this.checked_argos = false,
      this.checked_chal_guar = false,
      this.checked_abyss_dun = false,
      this.arrayOfObjects = [],
      this.object = {}
    },

    clickOkButton() {
      this.clearData()
      if (!this.char_id) {
        this.sweetalert.fire({
          icon: 'error',
          title:  '캐릭터 이름을 입력해 주세요'
        });
      } else {
      let _charID = this.char_id.toLowerCase(),
          _login_id = this.currentID
        this.services.getData(_login_id, _charID, (resData) => {
          if (resData == 'null'){
            this.sweetalert.fire({
              icon: 'error',
              title: '존재하지 않는 캐릭터 입니다.'
            });
          } else {
            this.lv = resData.lv;
            this._commanderLvFilter(this.lv);
            this._abyssRaidFilter(this.lv);
            this._abyssDunFilter(this.lv);
            this._charGuardianFilter(this.lv);

            this._taskFilterInit(resData.task_data);

            for (var i in resData.char_list) {
              let data = {};
              data.name = resData.char_list[i]
              this.arrayOfObjects.push(data)              
            }
          }
        }, (error) => {
          console.log("fail to get Lv : ", error);
        })
      }
    },

    _taskFilterInit(task_data){
      for (var i in task_data) {
        switch (i){
          case "201":
            this.checked_valtan = task_data["201"]
          break;
          case "202":
            this.checked_biac = task_data["202"]
          break;
          case "203":
            this.checked_kuku = task_data["203"]
          break;
          case "204":
            this.checked_abrel = task_data["204"]
          break;
          case "301":
            this.checked_abyss_dun = task_data["301"]
          break;
          case "401":
            this.checked_chal_guar = task_data["401"]
          break;
          case "501":
            this.checked_argos = task_data["501"]
          break;
        }
      }
    },

    _commanderLvFilter(lvdata) {
      for(var i in window.CONSTANTS.COMMANDER) {
        switch(i) {
          case "0":
            if(lvdata >= window.CONSTANTS.COMMANDER[i]) {
              this.valtan = true;
            } else {
              this.valtan = false;
            }
          break;
          case "1":
            if(lvdata >= window.CONSTANTS.COMMANDER[i]) {
              this.biac = true;
            } else {
              this.biac = false;
            }
          break;
          case "2":
            if(lvdata >= window.CONSTANTS.COMMANDER[i]) {
              this.kuku = true;
            } else {
              this.kuku = false;
            }
          break;
          case "3":
            if(lvdata >= window.CONSTANTS.COMMANDER[i]) {
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
            if(lvdata >= window.CONSTANTS.ABYSS_RAID[i]) {
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
            if(lvdata >= window.CONSTANTS.CHALLENGE_ABYSS_DUNGEON[i]) {
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
            if(lvdata >= window.CONSTANTS.CHALLENGE_GUARDIAN[i]) {
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
    /* margin-left: 270px; */
    padding: 30px;
    padding-top: 10px;
  }


  h1 {
    font-size: 50px;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .local-h2 {
    text-align: left;
    margin-bottom: 0px;
  }

  .chal-gardian-area {
    padding: 10px;
    background-color: #1ba6e2;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: max-content;
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
    width: max-content;
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
    width: max-content;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .abyss-raid-box-argos {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/argos.png");
    background-size: cover;
  }

  .chal-abyss-dungeon-box {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/abyss_dun_1.png");
    background-size: cover;
  }

  .chal-gardian-box {
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
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/valtan.jpg");
    background-size: cover;
  }

  .commander-box-biac2 {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/biac.jpg");
    background-size: cover;
  }

  .commander-box-kuku2 {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/kuku.jpg");
    background-size: cover;
  }

  .commander-box-abrel2 {
    width: 160px;
    height: 160px;
    border-radius: 5px;
    background-image: url("../assets/commander/abrel.jpg");
    background-size: cover;
  }

  .commander-box-button {
    margin-right: 5px;
    margin-top: 8px;
    width: 160px;
    height: 30px;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border-radius: 45px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    border: 1px solid rgb(220, 220, 220);
    box-sizing: border-box;
  }

  .commander-box-button:hover{
    background-color: #2EE59D;
    color: #000
  }

  .commander-area2 {
    padding: 10px;
    background-color: #e2dc1b;
    color: #ffffff;
    font-size: 20px;
    height: 200px;
    width: max-content;
    border-top-width: 30px;
    border-left-width: 30px;
    border-radius: 5px;
    margin-bottom: 10px;
  }

  .search-area {
    margin-top: 0px;
    margin-bottom: 0px;
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

  .chk-form {
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

  /* .ok-button {
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
  } */

  .button {
    margin: 10px;
    margin-top: 0px;
    margin-bottom: 0px;
    width: 140px;
    height: 35px;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2.5px;
    font-weight: bold;
    color: #000;
    background-color: #fff;
    border-radius: 45px;
    transition: all 0.3s ease 0s;
    cursor: pointer;
    outline: none;
    border: 1px solid rgb(220, 220, 220);
    box-sizing: border-box;
  }

  .button:hover {
    background-color: #2EE59D;
    color: #000;
  }

  .char-id {
    width: 30%;
    height: 35px;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    color: #1b94e2;
  }
</style>
