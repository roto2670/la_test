<template>
  <div id='members' class="members">

    <div v-if="!joinState" id='login-area' class="login-and-join-area">
      <h2>로 그 인</h2>

      <div>
        <input type="text" v-model="login_ID" class="login-input" placeholder="ID">
      </div>
      <div>
        <input v-on:keyup.enter="clickLoginButton" type="password" v-model="login_pw" class="login-input" placeholder="Password">
      </div>
      
      <div class="blank"/>

      <div id='login-button-box' class="login-button-box">
        <button class="login-button" @click="clickLoginButton">로 그 인</button>
      </div>
      <div id='join-button-box' class="join-button-box">
        <button class="join-button" @click="clickJoinButton">가입하기</button>
      </div>
    </div>

    <div v-if="joinState" id='join-area' class="login-and-join-area">
      <h2>등 록 하 기</h2>

      <div>
        <input type="text" v-model="join_id" class="login-input" placeholder="ID">
      </div>
      <div>
        <input type="password" v-model="join_pw" class="login-input" placeholder="Password">
      </div>
      <div>
        <input v-on:keyup.enter="clickJoinOkButton" type="password" v-model="join_pw_chk" class="login-input" placeholder="Password check">
      </div>

      <div class="blank-join"/>

        <div id='join-ok-button-box' class="join-ok-button-box">
          <button class="join-ok-button" @click="clickJoinOkButton">등 록</button>
          <button class="join-cancel-button" @click="clickJoinCancelButton" >취 소</button>
        </div>

    </div>
    
  </div>
</template>

<script>
import CryptoJS from "crypto-js"

export default {
  data() {
    return{
      login_ID: "",
      login_pw: "",
      join_id: "",
      join_pw: "",
      join_pw_chk: "",
      joinState: false,
    }
  },
  methods: {
    cleanData() {
      this.login_ID = "";
      this.login_pw = "";
      this.join_id = "";
      this.join_pw = "";
      this.join_pw_chk = "";
      this.joinState = false;
    },

    encryptData(_id,_pw) {
      const id = _id,
            password = _pw,
            keyutf = CryptoJS.enc.Utf8.parse(window.CONSTANTS.KEY),
            ivutf = CryptoJS.enc.Utf8.parse(window.CONSTANTS.IV);

      let crypto_id = CryptoJS.AES.encrypt(id, keyutf, {iv: ivutf, mode: CryptoJS.mode.CBC}).toString(),
          crypto_pw = CryptoJS.AES.encrypt(password, keyutf, {iv: ivutf, mode: CryptoJS.mode.CBC}).toString(),
          postData = {"content": {}};

      postData.content["id"] = crypto_id;
      postData.content["pw"] = crypto_pw;

      return postData
    },

    clickLoginButton() {

      let postData = this.encryptData(this.login_ID, this.login_pw);

      this.services.login(postData, (resData) => {
        if(resData) {
          if (resData == window.CONSTANTS.LOGIN_RES.NO_ID) {
            this.sweetalert.fire({
              icon: 'error',
              title: '로그인 실패',
              text: '등록되지 않은 아이디 입니다.'
            })
          } else if (resData == window.CONSTANTS.LOGIN_RES.NO_PW) {
            this.sweetalert.fire({
              icon: 'error',
              title: '로그인 실패',
              text: '비밀번호가 일치하지 않습니다.'
            })                
          } else if (resData == window.CONSTANTS.LOGIN_RES.LOGIN_OK) {
            let emit_data = {};
            emit_data.login = true;
            emit_data.login_ID = postData.content.id;
            this.$emit('login-ok-button', emit_data);
            this.cleanData()
          }
        } else {
          console.log("fail to set task data")
        }
      }, (error) => {
        console.log("errr test", error)
      });


    },

    confirm() {
      this.sweetalert.fire({
        icon: 'error',
        title:  '캐릭터 이름을 입력해 주세요'
      });
    },
    
    clickJoinButton() {
      this.joinState = true;
    },

    clickJoinCancelButton() {
      this.cleanData();
    },

    clickJoinOkButton(){
      const clean = this.cleanData;
      let data = {}
      data.join_id = this.join_id;
      data.join_pw = this.join_pw;
      data.join_pw_chk = this.join_pw_chk;

      if (!this.join_id && !this.join_pw) {
        this.sweetalert.fire({
          icon: 'error',
          title:  '등록할 계정과 비밀번호를 입력해주세요'
        });
      } else if (this.join_id && !this.join_pw) {
        this.sweetalert.fire({
          icon: 'error',
          title:  '등록할 비밀번호를 입력해주세요'
        });          
      } else if (!this.join_id && this.join_pw) {
        this.sweetalert.fire({
          icon: 'error',
          title:  '등록할 계정이름을 입력해주세요'
        }); 
      } else if (this.join_pw != this.join_pw_chk) {
        this.sweetalert.fire({
          icon: 'error',
          title:  '비밀번호가 일치하지 않습니다.'
        });
      } else if (this.join_pw.length < 8) {
        this.sweetalert.fire({
          icon: 'error',
          title: '비밀번호를 8자 이상 설정해 주세요.'
        });
      } else {

        let postData = this.encryptData(this.join_id, this.join_pw);
        
        this.services.setJoinAccount(postData, (resData) => {
          if(resData) {
            if (resData == window.CONSTANTS.JOIN_RES.EXIST) {
              this.sweetalert.fire({
                icon: 'error',
                title: '이미 등록된 계정입니다.'
              })
            } else if (resData == window.CONSTANTS.JOIN_RES.FAIL) {
              this.sweetalert.fire({
                icon: 'error',
                title: '계정등록에 실패 했습니다. 관리자에게 문의 하세요.'
              })                
            } else if (resData == window.CONSTANTS.JOIN_RES.SUCCESS) {
              this.sweetalert.fire({
                icon: 'success',
                title: '등록 성공!',
                text: '로그인 후 사용할 수 있습니다.'
              }).then((result) => {
                if (result.isConfirmed) {
                  clean()
                }
              })
            }
          } else {
            console.log("fail to set task data")
          }
        }, (error) => {
          console.log("errr test", error)
        });

      }
    },

  }
}
</script>

<style>
  #members {
    margin-top: 50px;
    padding: 30px;
    padding-top: 10px;
  }

  .login-and-join-area {
    display: inline-block;
    width: 300px;
    height: 400px;
    border-radius: 15px;
    border: 2px solid #a9a9a9;
  }

  .blank {
    margin: 20px;
    height: 40px;
  }

  .blank-join {
    margin: 20px;
    height: 20px;
  }

  .login-input {
    margin: 10px;
    height: 35px;
    width: 60%;
    font-size: 15px;
    border-radius: 5px;
    border: 1px solid rgb(220, 220, 220);
    padding: 5px;
    box-sizing: border-box;
    display: inline-block;
    color: #1b94e2;
  }


  .login-button {
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

  .login-button:hover {
    background-color: #2EE59D;
    color: #000;
  }

  .join-button{
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

  .join-button:hover {
    background-color: #00cced;
    color: #000;
  }

  .login-button-box {
    margin: 20px;
  }

  .join-button-box{
    margin: 20px;
  }

  .join-ok-button {
    width: 130px;
    height: 35px;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    margin: 5px;
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

  .join-ok-button:hover {
    background-color: #00cced;
    color: #000;
  }
  
  .join-cancel-button {
    width: 130px;
    height: 35px;
    font-family: 'Jua', sans-serif;
    font-size: 14px;
    margin: 5px;
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

  .join-cancel-button:hover {
    background-color: #ff3939;
    color: #000;
  }
  
</style>