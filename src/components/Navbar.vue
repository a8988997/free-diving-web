<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary sticky-top shadow">
    <div class="container-fluid text-white fs-7 fontfamily">
      <a class="navbar-brand" href="#"><span>潛境 Diving</span> </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse " id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
           <li class="nav-item">
            <a class="nav-link" role="button" @click="homePage">認識自潛</a>
          </li>
            <li class="nav-item ">
            <a class="nav-link" role="button" @click="licensePage">考試制度</a>
          </li>
        
          <li class="nav-item dropdown">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              潛點介紹
            </a>
            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#/travel/north">東北角</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#/travel/guishanIsland">龜山島</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#/travel/kenting">墾丁</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#/travel/xiaoLiuqiu">小琉球</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#/travel/greenIsland">綠島</a></li>
              <li><hr class="dropdown-divider" /></li>
              <li><a class="dropdown-item" href="#/travel/lanyu">蘭嶼</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" role="button" @click="shopItem">購物商城</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" role="button" @click="shopCart">購物車</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import Dropdown from "bootstrap/js/dist/dropdown";
import collapse from "bootstrap/js/dist/collapse";
export default {
  methods: {
    homePage(){
      this.$router.push(`/`)
    },
    licensePage(){
      this.$router.push(`/license`)
    },
    shopItem() {
      this.$router.push(`/user/item`);
    },
    shopCart() {
      this.$router.push("/user/cart");
    },
    
  }
};
</script>

<style>
@media all and (min-width: 992px) {
  .navbar .nav-item .dropdown-menu {
    display: none;
  }
  .navbar .nav-item:hover .nav-link {
  }
  .navbar .nav-item:hover .dropdown-menu {
    display: block;
  }
  .navbar .nav-item .dropdown-menu {
    margin-top: 0;
  }
}
</style>
