<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div
      class="topImg"
      style="background-image: url(https://storage.googleapis.com/vue-course-api.appspot.com/weit-api/1632157112959.jpg?GoogleAccessId=firebase-adminsdk-zzty7%40vue-course-api.iam.gserviceaccount.com&Expires=1742169600&Signature=C2hOPkbOncOBhuWaYse9MeCwekILPDiN5QDIeXeCv1Yuc9O3qRvZmwV1CD%2BfEf9%2FLb9uWpQrHDZlQLAkViIsv1tl9Qi3MOZwZ4faD%2BrGFmt6cmCU9nbZmGNNvPLr3q7nwNtWR1n2bepLwyD0EZ47wRARmzu%2B4ZIoQInGTtvnZ%2BadnY68NFvw%2Bv0PuioNe9pEN%2FCue%2FiYy6%2BvgQC6qNH1MNbBNtmNg861009pAw5M4siIPpVW3caOi%2Fn%2B4clbTesygL4gT7dI5ndetMAidTXcznkSuwWOVv9Kt%2Bkiot%2BmcgypKIgU0JeTBsDEzME19ebnlKNwbXHwdIlvQs4RHbG%2BzA%3D%3D)"
    ></div>
    <div class="container-fluid">
      <div class="row">
        <!-- 下拉式sideBar -->
        <div class="col-12 dropdown ">
          <button
            class="btn btn-primary dropdown-toggle d-md-none d-block mt-4 "
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            商品分類
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            <li class="p-2 sidebar" role="button" @click="filter = ''">
              全部商品
            </li>
            <li
              class="p-2 sidebar"
              role="button"
              v-for="category in categoryData"
              :key="category.id"
              @click="filter = category"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <!-- sideBar -->
        <div class="col-md-2 bg-sidebar d-md-block d-none">
          <ul class="nav flex-column text-center fs-7 pt-5 ">
            <li class="p-2 sidebar" role="button" @click="filter = ''">
              全部商品
            </li>
            <li
              class="p-2 sidebar"
              role="button"
              v-for="category in categoryData"
              :key="category.id"
              @click="filter = category"
            >
              {{ category }}
            </li>
          </ul>
        </div>
        <!-- 商品列表 -->
        <div class="col-12 col-md-10 pt-5">
          <div class="row">
            <div
              class="col-12 col-md-4 bg-3 text-center mb-5"
              v-for="item in filterData"
              :key="item.id"
            >
              <div
                class=" imgSize"
                :style="{ backgroundImage: `url(${item.imageUrl})` }"
                @click="getProduct(item.id)"
                role="button"
              ></div>
              <div>
                <h5 class="text-dark mt-3">{{ item.title }}</h5>
                <p v-if="!item.price">{{ item.origin_price }}</p>
                <del v-if="item.price">原價：{{ item.origin_price }} 元</del>
                <p class="mt-2 text-danger" v-if="item.price">
                  特價：{{ item.price }} 元
                </p>
              </div>
              <button
                type="button"
                class="btn btn-outline-danger"
                @click="addCart(item.id)"
                :disabled="this.status.loadingItem === item.id"
              >
                <div
                  v-if="this.status.loadingItem === item.id"
                  class="spinner-border text-primary spinner-border-sm"
                  role="status"
                >
                  <span class="visually-hidden">Loading...</span>
                </div>
                加到購物車
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      message: "",
      cart: {},
      filter: "",
      newData: []
    };
  },
  computed: {
    categoryData() {
      const vm = this;
      let category = "";
      return vm.products.reduce((prev, curr) => {
        if (curr.category !== category) {
          prev.push(curr.category);
        }
        category = curr.category;
        return prev;
      }, []);
    },
    filterData() {
      let vm = this;
      let tempData = [];
      vm.newData = [];
      tempData = vm.products.filter(item => {
        if (vm.filter === "") {
          return vm.products;
        } else if (vm.filter === item.category) {
          return item;
        }
      });
      tempData.forEach(i => {
        vm.newData.push(i);
        // console.log(i);
      });
      return vm.newData;
    }
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then(res => {
        this.products = res.data.products;
        console.log("products:", res);
        this.isLoading = false;
      });
    },
    getProduct(id) {
      this.$router.push(`/user/product/${id}`);
    },
    addCart(id) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      this.status.loadingItem = id;
      const cart = {
        product_id: id,
        qty: 1
      };
      this.$http.post(url, { data: cart }).then(res => {
        // console.log(res);
        this.status.loadingItem = "";
        this.getCart();
      });
    }
  },
  created() {
    this.getProducts();
  }
};
</script>

<style>
.topImg {
  height: 450px;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
}
.sidebar:hover {
  color: #de8f6e;
}
.imgSize {
  height: 250px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
