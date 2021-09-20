<template>
  <div>
    <Loading :active="isLoading"></Loading>
    <div class="container">
      <nav aria-label="breadcrumb ">
        <ol class="breadcrumb mt-4 mb-5">
          <li class="breadcrumb-item">
            <router-link to="/user/item">購物商城</router-link>
          </li>
          <li class="breadcrumb-item active" aria-current="page">
            {{ product.title }}
          </li>
        </ol>
      </nav>
      <div class="row justify-content-center">
        <article class="col-12 col-md-6">
          <div
            class="productImg"
            :style="{ backgroundImage: `url(${product.imageUrl})` }"
          ></div>
        </article>
        <div class="col-12 col-md-5">
          <h2>{{ product.title }}</h2>
          <hr />
          <div class="lh-lg mb-3">{{ product.description }}</div>
          <div class="h4" v-if="!product.price">
            {{ product.origin_price }} 元
          </div>
          <del class="h6 text-secondary" v-if="product.price"
            >原價： {{ product.origin_price }} 元</del
          >
          <div class="h4 mt-2 mb-4 text-danger" v-if="product.price">
            特價： {{ product.price }} 元
          </div>
          <hr />
          <div class="row d-flex mb-3 mt-4">
            <div class="col-12 col-lg-6  d-flex mb-3">
              <label class="lh-lg fs-7">數量：</label>

              <select
                class="form-select me-2"
                aria-label="Default select example"
                style="width:140px"
                v-model="buyNum"
              >
                <option :value="num" v-for="num in 10" :key="num"
                  >{{ num }} / {{ product.unit }}</option
                >
              </select>
            </div>
            <div class="col-12 col-lg-6 ">
              <button
                type="button"
                class="btn btn-primary me-2"
                :disabled="isDisabled === product.id"
                @click="addToCart(product.id, buyNum)"
              >
                加到購物車
              </button>
              <button type="button" class="btn btn-danger" @click="shopNow(product.id, buyNum)">
                直接購買
              </button>
            </div>
            <div class="col-4"></div>
          </div>
        </div>
      </div>
      <div class="mt-3 mt-md-5"><h5>內容簡介</h5></div>
      <hr />
      <div class="lh-lg mb-5">{{ product.content }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      product: {},
      id: ""
    };
  },
  methods: {
    getProduct() {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/product/${this.id}`;
      this.isLoading = true;
      this.$http.get(url).then(res => {
        console.log(res.data);
        this.isLoading = false;
        if (res.data.success) {
          this.product = res.data.product;
        }
      });
    },
    addToCart(id, qty) {
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then(response => {
        this.isLoading = false;
        this.$httpMessageState(response, "加入購物車");
        this.$router.push("/user/cart");
      });
    },
    shopNow(id, qty) {
      
       const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/cart`;
      const cart = {
        product_id: id,
        qty
      };
      this.isLoading = true;
      this.$http.post(url, { data: cart }).then(response => {
        this.isLoading = false;
        this.$router.push("/user/cart");
      });
      
    }
  },
  created() {
    this.id = this.$route.params.productId;
    this.getProduct();
  }
};
</script>
<style>
.productImg {
  height: 500px;
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
