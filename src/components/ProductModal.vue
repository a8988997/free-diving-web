<template>
  <!-- Modal -->
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    ref="modal"
  >
    <div class="modal-dialog modal-xl" role="document">
      <div class="modal-content boder-0">
        <div class="modal-header bg-dark text-white">
          <h5 class="modal-title" id="exampleModalLabel">
            <span>新增產品</span>
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="row">
            <div class="col-sm-4">
              <div class="form-group">
                <label for="image">請輸入圖片網址</label>
                <input
                  type="text"
                  class="form-control"
                  id="image"
                  placeholder="請輸入圖片連結"
                  v-model="tempProduct.imageUrl"
                />
              </div>
              <div class="form-group">
                <label for="customFile"
                  >或上傳圖片
                  <i class="fas fa-spinner fa-spin"></i>
                </label>
                <input
                  type="file"
                  id="customFile"
                  class="form-control"
                  @change="uploadFile"
                  ref="fileInput"
                />
              </div>
              <img
                img="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=828346ed697837ce808cae68d3ddc3cf&auto=format&fit=crop&w=1350&q=80"
                class="img-fluid"
                :src="tempProduct.imageUrl"
                alt=""
              />
              <button type="submit" class="btn btn-primary btn-lg mt-5">
                新增圖片
              </button>
            </div>

            <div class="col-sm-8">
              <div class="form-group">
                <label for="title">標題</label>
                <input
                  type="text"
                  class="form-control"
                  id="title"
                  v-model="tempProduct.title"
                  placeholder="請輸入標題"
                />
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="category">分類</label>
                  <input
                    type="text"
                    class="form-control"
                    id="category"
                    v-model="tempProduct.category"
                    placeholder="請輸入分類"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="unit">單位</label>
                  <input
                    type="unit"
                    class="form-control"
                    id="unit"
                    v-model="tempProduct.unit"
                    placeholder="請輸入單位"
                  />
                </div>
              </div>
              <div class="row">
                <div class="form-group col-md-6">
                  <label for="origin_price">原價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="origin_price"
                    v-model="tempProduct.origin_price"
                    placeholder="請輸入原價"
                  />
                </div>
                <div class="form-group col-md-6">
                  <label for="price">售價</label>
                  <input
                    type="number"
                    class="form-control"
                    id="price"
                    v-model="tempProduct.price"
                    placeholder="請輸入售價"
                  />
                </div>
              </div>
              <hr />

              <div class="form-grop">
                <label for="description">產品描述</label><br />
                <textarea
                  type="text"
                  class="from-control"
                  id="description"
                  v-model="tempProduct.description"
                  placeholder="請輸入產品描述"
                  style="width: 100%"
                ></textarea>
              </div>
              <div class="form-group">
                <label for="content">說明內容</label><br />
                <textarea
                  type="text"
                  class="from-control"
                  id="content"
                  v-model="tempProduct.content"
                  placeholder="請輸入產品說明內容"
                  style="width: 100%"
                ></textarea>
              </div>
              <div class="form-group">
                <div class="form-check">
                  <input
                    class="form-check-input"
                    type="checkbox"
                    v-model="tempProduct.is_enabled"
                    :true-value="1"
                    :false-value="0"
                    id="is_enabled"
                  />
                  <label class="form-check-label" for="is_enabled"
                    >是否啟用</label
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-primary"
            @click="$emit('update-product', tempProduct)"
          >確認</button>
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >取消</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ModalMixin from "../mixins/ModalMixin";
export default {
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  watch: {
    product() {
      this.tempProduct = this.product;
    }
  },
  data() {
    return {
      modal: {},
      tempProduct: {}
    }
  },
  methods: {
    uploadFile() {
      const uploadFile = this.$refs.fileInput.files[0];
      const formData = new FormData();
      formData.append("file-to-upload", uploadFile);
      const url = `${process.env.VUE_APP_API}api/${process.env.VUE_APP_PATH}/admin/upload`;
      this.$http.post(url, formData).then(res => {
        // console.log(res.data);
        if (res.data.success) {
          this.tempProduct.imageUrl = res.data.imageUrl;
        }
      });
    }
  },
  mixins:[ModalMixin]
};
</script>
