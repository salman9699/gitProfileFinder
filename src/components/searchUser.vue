<template>
  <div class="container">
    <input
      type="text"
      class="search"
      placeholder="search user"
      v-model="entered_text"
    />
    <div class="searchBtnWrapper">
      <button class="searchBtn" v-on:click="searchResults">Search</button>
    </div>

    <hr />
    <button class="clearBtn" v-if="clear_btn" @click="handleClearBtn">
      Clear
    </button>
    <p class="results-before" v-if="msg">
      Your Results will be displayed here..
    </p>

    <div class="cardContainer">
      <userCards
        v-for="user in users"
        :key="user.login"
        v-bind:git_user="user"
      />
    </div>
  </div>
</template>

<script>
import userCards from "./userCards.vue";
export default {
  components: { userCards },
  data() {
    return {
      entered_text: "",
      users: [],
      msg: true,
      clear_btn: false,
    };
  },
  methods: {
    searchResults() {
      if (this.entered_text == "") {
        return;
      } else {
        this.msg = false;
        fetch(`https://api.github.com/search/users?q=${this.entered_text}`)
          .then((res) => res.json())
          .then((data) => {
            this.users = data.items;
          });
        this.clear_btn = true;
      }
    },
    handleClearBtn() {
      this.entered_text = "";
      this.users = [];
      this.clear_btn = false;
      this.msg = true;
    },
  },
};
</script>

<style>
</style>