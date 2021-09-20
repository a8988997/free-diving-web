<template>
  <div class="bg-footer mb-0 footer" style="height:120px">
    <div class="icon d-flex justify-content-center pt-3 align-content-center">
      <div class="pe-2">
        <a href="https://www.facebook.com/"
          ><img
            src="https://img.icons8.com/material-outlined/48/000000/facebook.png"
        /></a>
      </div>
      <div class="pe-2">
        <a href="https://www.youtube.com/"
          ><img
            src="https://img.icons8.com/material-outlined/48/000000/youtube-play--v1.png"
        /></a>
      </div>
      <div class="pe-2">
        <a href="https://www.instagram.com/"
          ><img
            src="https://img.icons8.com/material-outlined/48/000000/instagram-new--v1.png"
        /></a>
      </div>
      <div class="pe-2">
        <a href="https://line.me/ti/p/FRCshz4C9X"
          ><img
            src="https://img.icons8.com/fluency-systems-regular/48/000000/line-me.png"
        /></a>
      </div>
      <div class="pe-2" role="button">
        <router-link to="/login"
          ><img src="https://img.icons8.com/ios-glyphs/60/000000/wrench.png"
        /></router-link>
      </div>
    </div>

    <div class="text-center mt-2">
      <p>資料、圖片皆來自網路，僅個人練習使用，無任何商業用途</p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.icon img {
  width: 40px;
  height: 40px;
}
</style>
