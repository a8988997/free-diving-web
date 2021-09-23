<template>
  <div>
    <Navbar></Navbar>

    <router-view />

    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
}
</script>

<style>
.listType{
    list-style-type: "－ ";
}
.travelPic {
  height: 340px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.travekItem:hover{
 background: rgb(219, 150, 21) ;
}
@media(max-width:414px){
  iframe{
    width: 336px;
  }
}
</style>