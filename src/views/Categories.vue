<script setup> 
  import { ref, onMounted } from 'vue';
  // import desc from '/src/works-description.json'
  const tabs = ref(['數學', '物理', '化學', '生物', '地科', '資訊']);
  let activeTab = ref('數學');

  import desc from "../works-description.json";
  const math = desc[0].list;
  const physics = desc[1].list;
  const chemistry = desc[2].list;
  const biology = desc[3].list;
  const earth = desc[4].list;
  const infor = desc[5].list;
  const popupVisible = ref(false);
  const selectedWork = ref(null);

  function showPopup(work) {
    document.body.classList.add("popup-show");
    selectedWork.value = work;
    popupVisible.value = true;
  }
  function hidePopup() {
    document.body.classList.add("popup-show");
    popupVisible.value = false;
    selectedWork.value = null;
  }
  function switchTab(newTab) {
    activeTab.value = newTab;
  }
  onMounted(() => {
    window.addEventListener('keydown', function(event) {
        if (event.key === "Escape") { 
          hidePopup();
        }
      }
    )
  });

</script>

<template>
  <div class="tab-page">
    <h1>Categories</h1>
    <br/>
    <div class="flex justify-center space-x-4 ml-[2%] tab">
      <div
        v-for="tab in tabs"
        :key="tab"
        @click="switchTab(tab)"
        :class="[
          'py-[1.5%] px-[2%] text-center font-bold rounded-xl hover:bg-cyan-700',
          activeTab === tab ? 'bg-cyan-200 text-gray-700 hover:text-white font-bold' : 'text-white bg-cyan-950',
        ]"
      >
        {{ tab }}
      </div>
    </div>
    <div class="px-18 py-4">
      <!--
        各科的內容需要：
        1. 老師的介紹
        2. 老師的照片
        3. 作品列表（點進去跳出一個小視窗，介紹作品）
      -->
      <div v-if="activeTab === '數學'">

        <div class="div-page">
          <h2>指導教師：陳佩如老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in math" :key="group.id">
                <td @click="showPopup(group)" class="touch title" ref="wrap">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>
            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '物理'">

        <div class="div-page">
          <h2>指導教師：賴奕帆老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in physics" :key="group.id">
                <td @click="showPopup(group) " class="touch title">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>
            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '化學'">

        <div class="div-page">
          <h2>指導教師：劉彥孝老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in chemistry" :key="group.id">
                <td @click="showPopup(group)" class="touch title">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>
            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '生物'">

        <div class="div-page">
          <h2>指導教師：魏宏仁老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in biology" :key="group.id">
                <td @click="showPopup(group)" class="touch title">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>

            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img" class="works-photo" :alt="'/works/'+selectedWork.mark+'.jpg'">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>

          </div>
        </div>
      </div>


      <div v-if="activeTab === '地科'">
        
        <div class="div-page">
          <h2>指導教師：葉昭松老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in earth" :key="group.id">
                <td @click="showPopup(group)" class="touch title">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>
            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <div v-if="selectedWork.id==28"> <!--幫農夫客制化-->
                <a href="/works2/28/專題研究札記.html">專題研究札記(點擊後即可訪問)</a>
              </div> 
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>


      <div v-if="activeTab === '資訊'">

        <div class="div-page">
          <h2>指導教師：潘威歷老師</h2>
        </div>

        <div class="div-page">
          <h2>作品列表</h2>
          <h3>(點擊作品名稱可查看詳細資訊)</h3>
          <center>
          <table>
            <thead>
            <tr>
              <th>Title</th>
              <th>Authors</th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="group in infor" :key="group.id">
                <td @click="showPopup(group)" class="touch title">{{ group.title }}</td>
                <td>{{ group.author }}</td>
            </tr>
            </tbody>
          </table>
          </center>
          <div v-if="popupVisible" class="popup">
            <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.title }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
            </div>
            <div class="popup__author">
              <h4 class="no-top-bottom-margin">{{ selectedWork.author }}</h4>
            </div>
            <div class="popup__content">
              <div v-for="img in selectedWork.photos" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      

      
      </div>

    </div>
  </div>
</template>

<style scoped>
/* .showpopup {
  display: block;
}
body.showpopup {
  backdrop-filter: blur(5px);
}

.text-blue-500 {
  color: #22a7f0;
} */
table tr td {
  padding-left: 3px;
}
a:hover{ color: rgb(0, 144, 216); }
.popup {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: auto;
  max-height: 90%;
  overflow: visible;
  overflow-y: auto;
  z-index: 100;
  background-color: rgba(30, 32, 48, 0.69);
  box-shadow: 0 0 20px rgba(194, 233, 241, 0.568);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  animation: fade-in-animation ease-in 0.2s;
  //white-space:pre-wrap;
  //word-break: break-all;
}

.popup__title {
  width: 100%;
  padding-left: 50px;
  padding-top: 30px;
  padding-bottom: 5px;
  padding-right: 30px;
  margin-bottom: 2px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  white-space: normal;
}

.popup__author {
  width: 100%;
  padding-left: 50px;
  margin-top: 2px;
  padding-top: 5px;
  padding-bottom: 30px;
  border-bottom: 2px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: space-between;

}

.popup__content {
  padding-top: 30px;
  max-height: 70vh;
  overflow-y: auto;
  text-align: left;
  white-space: pre-line;
}

.works-photo {
  margin-bottom: 30px;
  padding: 15px;
  width: 60%;
  margin: auto;
  border-radius: 30px;
  box-shadow: 30px aquamarine
}

.popup__description{
  margin: 5%;
}

.popup.is-active {
  display: block;
  backdrop-filter: blur(5px);
}

.close-btn {
  font-size: 30px;
  font-weight: bold;
  line-height: 25px;
  color: #939ab7;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
}

.close-btn:hover {
  color: #666;
}

.title {
  max-width: 700px;
  padding: 2% 2% 2% 2%;
  text-align: left;
}

@media (max-width: 2000px) {
  .tab{
    font-size: 1.6rem;
  }
}

@media (max-width: 1100px) {
  .tab{
    font-size: 1.4rem;
  }
}

@media (max-width: 800px) {
  .tab{
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .tab{
    font-size: 1.0rem;
  }
}

@media (max-width: 385px) {
  .tab{
    font-size: 0.8rem;
  }
}
.no-top-bottom-margin {
  margin-top: 0px;
  margin-bottom: 0px;
}
</style>