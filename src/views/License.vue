<template>
  <div>
    <Navbar></Navbar>
    <div class="container mt-4 mb-5">
      <ul
        class="nav nav-pills nav-pills-color mb-5 mb-md-4"
        id="pills-tab"
        role="tablist"
      >
        <li class="nav-item" role="presentation">
          <button
            class="btn-orange nav-link active"
            id="pills-home-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-home"
            type="button"
            role="tab"
            aria-controls="pills-home"
            aria-selected="true"
          >
            AIDA 1
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-profile-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-profile"
            type="button"
            role="tab"
            aria-controls="pills-profile"
            aria-selected="false"
          >
            AIDA 2
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="pills-contact-tab"
            data-bs-toggle="pill"
            data-bs-target="#pills-contact"
            type="button"
            role="tab"
            aria-controls="pills-contact"
            aria-selected="false"
          >
            AIDA 3
          </button>
        </li>
      </ul>
      <div class="tab-content" id="pills-tabContent">
        <div
          class="tab-pane fade show active"
          id="pills-home"
          role="tabpanel"
          aria-labelledby="pills-home-tab"
        >
          <div class="row justify-content-center mb-md-5">
            <div class="col-12 col-md-8 text-center fs-7 lh-lg ">
              <h1 class="pb-3">AIDA 1</h1>
              <p class=" fs-5">
                不論你是不是有過潛水經驗，AIDA 1
                將會開拓你的視野，讓你經驗到從未體驗過的水下世界。你將會學習到有關自由潛水的基本知識、入水法、踢水技巧、潛伴制度以及安全知識等，讓你開始屏住呼吸，享受美麗的水下世界。
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">學科課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>自由潛水裝備</li>
                      <li>自由潛水呼吸法</li>
                      <li>平衡壓力技術</li>
                      <li>自由潛水安全觀念</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">泳池課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>靜態閉氣</li>
                      <li>裝備的使用</li>
                      <li>躬身入水法</li>
                      <li>自由潛水安全觀念</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">深水課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>身體姿勢</li>
                      <li>恆重下潛</li>
                      <li>潛伴支援</li>
                      <li>下潛深度 5 – 10 m</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7  d-flex">
              <table class="table border-bluebBorder ">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">考核標準</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>1分30秒閉氣</li>
                      <li>25 米動態平潛</li>
                      <li>5 米深度的能力</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="pills-profile"
          role="tabpanel"
          aria-labelledby="pills-profile-tab"
        >
          <div class="row justify-content-center mb-md-5">
            <div class="col-12 col-md-8 text-center fs-7 lh-lg">
              <h1 class="pb-3">AIDA 2</h1>
              <p class=" fs-5">
                這將是最具有挑戰性的課程，這門課程將帶領你進入開放水域，在學習到良好的技巧及安全知識之下，你將有信心與你的潛伴一起進行安全的自由潛水活動。完成AIDA
                2 的課程之後，你至少具有 2 分鐘的閉氣能力、40 米的動態平潛以及
                16 米深度的下潛能力。
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">學科課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul class="list-group">
                      <li>基礎自由潛水生理學</li>
                      <li>自由潛水呼吸及放鬆</li>
                      <li>黑視症及喪失症的認識</li>
                      <li>如何安全的進步自由潛水能力</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">泳池課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>進階的呼吸及放鬆技術</li>
                      <li>安全的增加閉氣能力</li>
                      <li>正確的配重規劃</li>
                      <li>正確的踢蛙鞋技巧及身體姿勢</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">深水課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>平壓技巧訓練</li>
                      <li>攀繩下潛及恆重下潛技術</li>
                      <li>安全繫繩使用</li>
                      <li>下潛深度練習</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder ">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">考核標準</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>超過 2 分鐘閉氣</li>
                      <li>40 米動態平潛</li>
                      <li>16 米深度的能力</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>

        <div
          class="tab-pane fade"
          id="pills-contact"
          role="tabpanel"
          aria-labelledby="pills-contact-tab"
        >
          <div class="row justify-content-center mb-md-5">
            <div class="col-12 col-md-8 text-center fs-7 lh-lg">
              <h1 class="pb-3">AIDA 3</h1>
              <p class=" fs-5">
                你想要下潛得更深嗎?你想要改善你的技巧嗎?這門課的目的是讓你有足夠的知識及技巧能力進而提升你的深度。在足夠的安全及熟悉的援救技巧之下，你將有信心循序增加你的深度。你已經是
                AIDA2
                或同等級的潛水員，想要更加深入了解自由潛水，想要更深、了解更多相關知識。
              </p>
            </div>
          </div>

          <div class="row">
            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">學科課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul class="list-group">
                      <li>進階自由潛水生理學</li>
                      <li>CO2 Table 訓練安排規劃</li>
                      <li>救援訓練複習</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">泳池課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>進階的呼吸及放鬆技術</li>
                      <li>CO2 Table 訓練規畫執行</li>
                      <li>踢蛙鞋技巧精進及身體姿勢的調整</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">深水課程</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>法蘭茲平壓技巧訓練</li>
                      <li>自由落體</li>
                      <li>水下及水面救援訓練複習</li>
                      <li>下潛深度練習</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>

            <div class="col-12 col-md-3 lh-lg fs-7 d-flex">
              <table class="table border-bluebBorder ">
                <tr class="text-center">
                  <th class="fs-5 border-2 ">考核標準</th>
                </tr>
                <tr style="list-style-position: inside;">
                  <td class="border-2">
                    <ul>
                      <li>2 分 45 秒閉氣</li>
                      <li>55 米動態平潛</li>
                      <li>24 米深度的能力</li>
                    </ul>
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <Footer></Footer>
  </div>
</template>

<script>
import Tab from "bootstrap/js/dist/tab";
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
  components: {
    Navbar,
    Footer
  }
};
</script>

<style></style>
