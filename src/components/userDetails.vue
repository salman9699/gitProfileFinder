<template>
  <div class="container" v-if="user_details">
    <div class="profile">
      <img class="user_photo" :src="user_details.avatar_url" alt="" />
      <h3 class="name" v-if="user_details.name">{{ user_details.name }}</h3>
      <h3 class="name" v-else>{{ user_details.login }}</h3>
      <a class="go_git" :href="'https://github.com/' + user_details.login"
        >View Github</a
      >
    </div>
    <div class="content">
      <h3 class="location" v-if="user_details.bio">Bio</h3>
      <p>
        {{ user_details.bio }}
      </p>
      <h4 class="location" v-if="user_details.location">
        From : {{ user_details.location }}
      </h4>
      <h3>Github Info</h3>
      <div class="badge_center">
        <div class="badge badge_followers">
          Followers - {{ user_details.followers }}
        </div>
        <div class="badge badge_following">
          Following - {{ user_details.following }}
        </div>
        <div class="badge badge_repos">
          Public repos - {{ user_details.public_repos }}
        </div>
        <div class="badge badge_gists">
          Public gists - {{ user_details.public_gists }}
        </div>
      </div>
    </div>
    <hr />
    <topRepos :repos_url="user_details.repos_url" />
  </div>
</template>

<script>
import topRepos from "./topRepos.vue";
export default {
  components: { topRepos },
  props: ["login"],
  data() {
    return {
      user_details: undefined,
    };
  },
  mounted() {
    fetch(`https://api.github.com/users/${this.login}`)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        console.log(typeof data);
        this.user_details = data;
        // console.log(data);
      });
  },
};
</script>

<style>
.user_photo {
  width: 12.5rem;
  border-radius: 50%;
  box-shadow: 1px 1px 1px rgb(61, 52, 52);
}
.name {
  margin-top: 0px;
  margin-bottom: 5px;
}
.go_git {
  display: block;
  margin-top: 0px;
  padding: 0.3rem 2rem;
  color: white;
  background: rgb(121, 2, 121);
  border-radius: 5px;
  letter-spacing: 1px;
  margin: 0px 10px 10px 0px;
  text-decoration: none;
}
.go_git:hover,
.go_git:focus {
  background: rgb(29, 28, 28);
}
.location {
  margin-top: 0px;
  margin-bottom: 0px;
}

.profile {
  display: inline-block;
  vertical-align: middle;
  width: 30%;
  /* border: 1px solid black; */
  text-align: center;
}

.content {
  display: inline-block;
  vertical-align: middle;
  width: 65%;
  margin-left: 40px;
}
.content p {
  font-size: 1.15rem;
}
.badge {
  display: inline-block;
  padding: 0.3rem 2rem;
  color: white;
  border-radius: 5px;
  letter-spacing: 1px;
  margin: 0px 10px 10px 0px;
}
.badge_following {
  background: rgb(241 112 112);
}
.badge_followers {
  background: rgb(121, 115, 115);
}
.badge_gists {
  background: rgb(182, 119, 2);
}
.badge_repos {
  background: rgb(3, 139, 180);
}
.badge_center {
  text-align: center;
}
.git_repo {
  display: block;
  text-decoration: none;
  background: #f1effa;
  color: purple;
  border-radius: 10px;
  box-shadow: 1px 1px 0px #ccc;
}
.git_repo:hover,
.git_repo:focus {
  background: rgb(226, 219, 226);
}
.git_repo p {
  padding: 10px;
  font-size: 1.3rem;
  font-weight: bold;
}
@media screen and (max-width: 880px) {
  .profile,
  .content {
    display: block;
    width: 100%;
    margin-left: 0px;
  }
  .name {
    margin-bottom: 15px;
  }
  .go_git {
    margin-right: 0px;
  }
}
</style>