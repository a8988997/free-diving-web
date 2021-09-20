<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div
      class="topImg parallax"
      style="background-image: url(https://images.unsplash.com/photo-1594155698660-b9a8b367d86d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2769&q=80)"
    ></div>
    <div class="container-fluid">
      <div class="row">
        <div class="col-2 bg-sidebar ">
          <ul class="nav flex-column text-center fs-7 pt-5 ">
            <li class="p-2 sidebar" role="button" @click="filter = ''">全部商品</li>
            <li class="p-2 sidebar" role="button" v-for="category in categoryData" :key="category.id" @click="filter = item">{{category}}</li>
          </ul>
        </div>
        <div class="col-10 pt-5">
          <div class="row">
            <div
              class="col-12 col-md-4 bg-3 text-center mb-5"
              v-for="item in products" :key="item.id"
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
import Parallax from 'vue-parallaxy'
export default {
  data() {
    return {
      components:{
         Parallax
      },
      products: [],
      product: {},
      status: {
        loadingItem: ""
      },
      message: "",
      cart: {},
      filter:'',
      newData:[]
    };
  },
    computed: {
    categoryData() {
 //外層設定 category 為空字串
//curr.category 為目前處理的分類，第一次執行時候
//prev 是 [] 而 curr 為祝賀節慶的資料
//因此符合 curr.category !== category 判斷條件
//就執行 prev.push(curr.category);
//後面在設定 category 為目前處理的分類，也就是祝賀節慶
//就這樣循環，若遇到不同分類名稱就推分類名稱到 prev     
      const vm = this;
      let category = ''; 
      return vm.products.reduce((prev, curr) => {
        if(curr.category !== category) {
          prev.push(curr.category);
        }
        category = curr.category;
        return prev
      },[])
    },
    filterData() {
      
      let tempData = [];
      vm.newData = [];
      tempData = vm.products.filter((item) => {
        if(vm.filter === '') {
          return vm.products
        } else if(vm.filter === item.category){
          return item
        }
      }); 
      tempData.forEach((i) => {
         
            vm.newData.push(i);
            console.log(i)
      })
      return vm.newData;
      
    }
  
  },
  methods: {
    getProducts() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/products/all`;
      this.isLoading = true;
      this.$http.get(url).then(res => {
        this.products = res.data.products;
        // console.log("products:", res);
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
  min-height: 450px;
  width: 100%;
  background-size: cover;
  background-position: bottom center;
  background-repeat: no-repeat;
  background-attachment: fixed;
 
}
.sidebar:hover{
  color: #DE8F6E
}
.imgSize {
  height: 250px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

}

</style>
