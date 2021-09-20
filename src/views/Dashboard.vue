<template>
  <div>
    <NavBar></NavBar>

    <ToastMessages></ToastMessages>
    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
import emitter from "../methods/emitter";
import NavBar from "../components/Navbar.vue";
import ToastMessages from "../components/ToastMessages.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    NavBar,
    ToastMessages,
    Footer
  },
  provide() {
    return {
      emitter
    };
  },
  created() {
    const token = document.cookie.replace(
      /(?:(?:^|.*;\s*)weiToken\s*\=\s*([^;]*).*$)|^.*$/,
      "$1"
    );
    console.log(token);
    this.$http.defaults.headers.common["Authorization"] = token;

    const api = `${process.env.VUE_APP_API}api/user/check`;
    console.log(api);
    this.$http.post(api, this.user).then(res => {
      if (!res.data.success) {
        this.$router.push("/login");
      }
    });
  }
};
</script>
