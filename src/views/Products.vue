<template>
  <div class="container mb-5">
    <Loading :active="isLoading"></Loading>
    <div class="text-end mt-4">
      <button type="button" class="btn btn-primary" @click="openModal(true)">
        建立新產品
      </button>
    </div>
    <table class="table mt-4">
      <thead>
        <tr>
          <th width="130">分類</th>
          <th>產品名稱</th>
          <th width="120" class="text-center">原價</th>
          <th width="120" class="text-center">售價</th>
          <th width="100" class="text-center">是否啟用</th>
          <th width="200" class="text-center">編輯</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in products" :key="item.id">
          <td>{{ item.category }}</td>
          <td>{{ item.title }}</td>
          <td class="text-center">{{ $filters.currency(item.origin_price) }}</td>
          <td class="text-center">{{ $filters.currency(item.price) }}</td>
          <td class="text-center">
            <span class="text-success" v-if="item.is_enabled">啟用</span>
            <span class="text-muted" v-else>未啟用</span>
          </td>
          <td class="text-center">
            <div class="btn-group">
              <button
                class="btn btn-outline-primary btn-sm"
                @click="openModal(false, item)"
              >
                編輯
              </button>
              <button
                class="btn btn-outline-danger btn-sm"
                @click="openDelProductModal(item)"
              >
                刪除
              </button>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
    <Pagination :pages="pagination"
    @emit-pages="getProducts"></Pagination>
    <ProductModal
      ref="productModal"
      :product="tempProduct"
      @update-product="updateProduct"
    ></ProductModal>
    <DelModal
      :item="tempProduct"
      ref="delModal"
      @del-item="delProduct"
    ></DelModal>
  </div>
</template>

<script>
import ProductModal from "../components/ProductModal.vue";
import DelModal from "../components/DelModal.vue";
import Pagination from '../components/Pagination.vue';
export default {
  data() {
    return {
      products: [],
      pagination: {},
      tempProduct: {},
      isNew: false,
      isLoading: false
    };
  },
  components: {
    ProductModal,
    DelModal,
    Pagination
  },
  inject: ["emitter"],
  methods: {
      getProducts(page = 1) {
      const api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/products/?page=${page}`;
      this.isLoading = true;
      // console.log(api);
      this.$http.get(api).then(res => {
        // console.log(res)
        this.isLoading = false;
        if (res.data.success) {
          // console.log(res.data);
          this.products = res.data.products;
          this.pagination = res.data.pagination;
        }
      });
    },
    openModal(isNew, item) {
      if (isNew) {
        this.tempProduct = {};
        // this.isNew = true
      } else {
        this.tempProduct = { ...item };
        // this.isNew = false
      }
      this.isNew = isNew;
      const productComponent = this.$refs.productModal;
      productComponent.showModal();
    },
    updateProduct(item) {
      this.tempProduct = item;
      // 新增
      let api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product`;
      let httpMethod = "post";
      // 編輯
      if (!this.isNew) {
        api = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${item.id}`;
        httpMethod = "put";
      }
      const productComponent = this.$refs.productModal;
      this.$http[httpMethod](api, { data: this.tempProduct }).then(res => {
        console.log(res);
        productComponent.hideModal();
        if (res.data.success) {
          this.getProducts();
          this.emitter.emit("push-message", {
            style: "success",
            title: "更新成功"
          });
        } else {
          this.emitter.emit("push-message", {
            style: "danger",
            title: "更新失敗",
            content: res.data.message.join("、")
          });
        }
      });
    },
    openDelProductModal(item){
      this.tempProduct = { ...item };
      const delComponent = this.$refs.delModal;
      delComponent.showModal();
    },
    delProduct(){
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/product/${this.tempProduct.id}`;
      this.$http.delete(url).then((res)=>{
        // console.log(res.data);
        const delComponent = this.$refs.delModal;
        delComponent.hideModal();
        this.getProducts();

      })
    }
  },
  created() {
    this.getProducts();
  }
};
</script>


