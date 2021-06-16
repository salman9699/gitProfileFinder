<template>
  <div class="current_repos">
    <h2 class="badge_center" v-if="repo_array.length >= 1">Some Repos</h2>
    <a
      class="git_repo"
      v-for="repo in repo_array"
      :key="repo.node_id"
      :href="'https://github.com/' + repo.full_name"
    >
      <p>{{ repo.name }}</p>
    </a>
  </div>
</template>

<script>
export default {
  props: ["repos_url"],
  data() {
    return {
      repo_array: [],
    };
  },
  mounted() {
    console.log(`${this.repos_url}`);
    fetch(`${this.repos_url}`)
      .then((res) => res.json())
      .then((data) => {
        this.repo_array = data.slice(0, 6);
        console.log("Variable:", this.repo_array);
      });
  },
};
</script>

<style>
</style>