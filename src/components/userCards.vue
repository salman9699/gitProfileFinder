<template>
  <div class="userCard">
    <img class="userImg" :src="git_user.avatar_url" alt="" />
    <h3 class="info">Name: {{ git_user.login }}</h3>
    <!-- <button class="moreBtn">More</button> -->
    <router-link class="moreBtn" :to="`/details/${git_user.login}`"
      >More</router-link
    >
  </div>
</template>

<script>
export default {
  props: ["git_user"],
};
</script>

<style scoped>
.userCard {
  display: inline-block;
  width: 14.5rem;
  background: #f1effa;
  border-radius: 5px;
  padding: 10px;
  margin: 15px;
  box-shadow: 1px 2px 1px #ccc;
  border-top: purple 4px solid;
}
.userImg {
  width: 8rem;
  border-radius: 50%;
  box-shadow: 0px 0px 4px rgb(139, 135, 135);
}
.info {
  display: block;
  color: purple;
  font-family: cursive;
}
.moreBtn {
  display: block;
  background: rgb(121, 2, 121);
  color: white;
  width: 5rem;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  letter-spacing: 1px;
  text-decoration: none;
  padding: 0.3rem 0.9rem;
  margin: 0px auto 10px auto;
}
.moreBtn:focus,
.moreBtn:hover {
  background: rgb(19, 1, 19);
}
</style>