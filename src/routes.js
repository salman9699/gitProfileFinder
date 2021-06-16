import searchUser from "./components/searchUser.vue"
import userDetails from "./components/userDetails.vue"

export default [
    { path: "/", component: searchUser },
    { path: "/details/:login", component: userDetails, props: true }
]