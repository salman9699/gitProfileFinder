<template>
  <fragment>
    <div id="app">
      <div class="head">
        <img src="./assets/git_logo.png" class="gitimg" alt="" />
        <h1 class="heading">Git User Finder</h1>
      </div>
      <router-view></router-view>
    </div>
  </fragment>
</template>

<script>
import userCards from "./components/userCards.vue";
import searchUser from "./components/searchUser.vue";

export default {
  name: "App",
  components: { searchUser, userCards },
};
</script>

<style>
.gitimg {
  width: 100px;
  vertical-align: middle;
}
.heading {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  /* position: absolute; */
}
.results-before {
  /* margin-top: 30px; */
  text-align: center;
  opacity: 0.5;
}
hr {
  border: 0px;
  height: 2px;
  background: #f1effa;
  margin-top: 1.9rem;
}

.head {
  margin-top: 2rem;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}
.container {
  max-width: 60rem;
  margin: 10px auto;
  background: white;
  padding: 2rem;
  border-radius: 10px;
}
.search {
  font-size: 0.9rem;
  /* display: block; */
  width: 98%;
  padding: 0.5rem;
  border-radius: 7px;
  background-color: #f1effa;
  border: none;
}
.search:focus {
  outline: none;
  border-bottom: 3px solid rgb(156, 3, 156);
}
.cardContainer,
.searchBtnWrapper {
  text-align: center;
}
.clearBtn {
  display: block;
  margin: 10px auto 5px auto;
  padding: 0.3rem;
  background: #f1effa;
  width: 20%;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  letter-spacing: 1px;
}
.searchBtn {
  padding: 0.3rem;
  background: purple;
  color: white;
  margin-top: 1.2rem;
  width: 20%;
  border: none;
  border-radius: 7px;
  cursor: pointer;
  letter-spacing: 1px;
}
.searchBtn:focus,
.searchBtn:hover {
  background: rgb(56, 1, 56);
}
.clearBtn:focus,
.clearBtn:hover {
  background: rgb(211, 206, 211);
}

@media screen and (max-width: 450px) {
  .searchBtn,
  .clearBtn {
    width: 50%;
  }
}
</style>
