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
          <h2>指導教師 陳佩如老師的話:</h2>
          <br>
          <p> &emsp;&emsp;羅傑·培根（Roger Bacon）說「數學是科學的大門和鑰匙。」龐嘉萊（Henri Poincaré）說：「把不同的事情看成同一件， 這門藝術叫數學。」數學求真求實，卻又抽象難懂；與科學相輔相成，卻有獨特美感。數專組有王品硯、彭可翰、黃羶宇、鮑立仁、鍾承軒等五位同學，數學的美吸引了我們，才有緣齊聚數專組，一起焚膏繼晷的研究數學問題。</p>
          <br>
          <p> &emsp;&emsp;選定合適的題目是數學專題最難踏出的一步。問題太難，必須投入大量的時間提前學習高等數學；問題太簡單，則沒延伸空間，須另覓問題。研究期間要發揮想像力，在各種試驗中探索問題的本質，並嚴謹推導。還須兼顧各科學習平衡，準備數學讀書會的講課教材，人才培育計畫中學習新知，並參加數學競賽的選拔與培訓，實在是非常忙碌且辛苦。</p>
          <br>
          <p> &emsp;&emsp;大家雖然跌跌撞撞，經歷重重困難，但是透過解決無數小問題，不斷地鍛鍊自學力與意志力，並發現新觀點和方法，逐步地往更寬廣的世界邁進。</p>
          <br>
          <p> &emsp;&emsp;最後，珮如老師期許同學們能藉由反思學習歷程，探索出後續前進的方向，啟發未來無限的可能。</p>
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
          <h2>指導教師 賴奕帆老師的話</h2>
          <p> &emsp;&emsp;「專題研究」是建中科學班很重要的課程，它與絕大多數的課程不一樣，同學要能自主去探究科學問題。眾所皆知，亞洲是個教學封閉的環境，總要有確定的問題與確定的答案，但專題研究不同，同學自行探索問題，尋找資源，並嘗試給個合理的解決，老師雖然能一定程度的給予方向指導與協助，但實際上也時常跟同學說「我不知道」，只能說或許是怎麼處理比較好等等。</p>
          <br>
          <p> &emsp;&emsp;在台灣的教育體制下，還是很多老師不喜歡這樣的課程，沒有確實學到確定的知識，就不像學習一般。沒有考試沒有成績，就好像不在學習的道路之上。</p>
          <br>
          <p> &emsp;&emsp;108課綱以來，大學升學上已大幅偏向學測與申請入學，主要是過往由分科/指考成績入學總會讓同學選到不適合自己的科系，同學們雖然是科學班，但是否適合去大學中進行研究工作，不僅僅由學科上的成績決定，最簡單的方式就是讓自己能身處實驗室一段時間。費曼在文章中也有提到，很多學生會覺得科學研究是讀了很多專業文章後，在高級專業的實驗室中，按下某些高科技的按鈕，就可以獲得有效的實驗數據，但不是這樣，費曼在普林斯頓實驗室中，實際上是使用板手，維修不斷漏油漏液的加速器，這才是真的研究現場。</p>
          <br>
          <p> &emsp;&emsp;人生總是充滿了許多挑戰，希望大家要有勇於提升面對解決問題的能力，老師很喜歡星際大戰中Yoda大師說的，Do or Do not. There is no Try。科學研究是理論與實驗並進，研究總是一開始不知道答案，就像一開始說的，「我不知道」，但能在同學的努力之下，找出一條雖然充滿泥濘，但確實前進的道路，這或許是有趣的，不是嗎？希望同學也能這樣想，若是那就太棒了 !</p>
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
          <h2>指導教師 劉彥孝老師的話</h2>
          <p>秝辰、峻亨、奕丞、楷棣：</p>
          <br>
          <p> &emsp;&emsp;還記得一年多前，你們四個人在自強樓辦公室找我簽專題選組單的情景；經過面談，確定你們的意願與預告未來可能會面對的挑戰後，我們組成了一個小而互相照顧支援的團體，並繼續結合讀書會進行，開始了找教授前的準備工作。在經歷許多次被拒絕的辛酸後，你們總是再次調整心情與持續準備，陸續終於得到三位教授的初步同意，開始踏進實驗室的第一步。</p>
          <br>
          <p> &emsp;&emsp;高一下開始是尋找題目的階段，在實驗室的專長範圍內，必須努力搜尋與閱讀文獻，定期整理與參加實驗室報告，甚至還要了解每個藥品的價格，慢慢地在教授、實驗室學長等協助下，擬定自己的題目方向，開始練習實驗的技術。</p>
          <br>
          <p> &emsp;&emsp;暑假的日子多數也在實驗室度過，逐漸將技術修正，有些結果不如預期，也得思考是否調整實驗的方法甚至架構，就這樣開學已經是高二上了，這是實際穩定進行計畫的主要時段，儘管如此，雖然有數據但還不夠完整或不夠穩定，但還是得開始動筆一點一點詮釋數據，補做實驗，終於趕在截止日前，報名了科展。</p>
          <br>
          <p> &emsp;&emsp;雖然在寒假的國際科展前多次反覆加強練習，到現場比賽仍是一場震撼教育，累積的報告經驗，獲得研究方向的寶貴建議，都證明參賽的辛苦是值得的。面對高二下開學的校內科展，我們已蓄勢待發，三件作品榮獲兩件特優與一件優等，慢慢的，我們好像都領悟了做專題這檔事的意義，其實和人生其他事的道理是一樣的，持續不斷的付出與修正，面對挫折不逃避，山如果不轉路可以轉，想辦法克服問題，也感恩實驗室教授及學長們提供資源與無私的教導，給我們機會，讓我們能消化書本裡的知識，結合天馬行空的想法付諸實踐與排除困難，成為真正的實驗理論的驗證者，更懂得珍惜任何得來不易的機會與謝謝自己，知識與態度都更成熟並充滿了面對挑戰的勇氣。</p>
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
          <h2>指導教師 魏宏仁老師的話</h2>
          <p>&emsp;&emsp;科學班生物專題兩年的研究，終於有了些許成果，同學從高一的摸索，到現在能針對一個問題，利用科學方法，發現解決問題的可能途徑，透過基本研究方法的實作，奠定同學以後做研究的基本能力。做研究最重要的能力除了能問好問題外，也要能釐清問題。因此心中有一個疑問要解決，事先必須要能盡量閱讀相關的文獻資料，探索前人對此問題做過多少努力，目前對此問題的解決程度為何，如此也可從中獲得如何解決問題、如何設計實驗的靈感。實驗過程中也難免遭遇很多不順利的情況，要一一的釐清失敗的原因，想辦法克服。最後有機會獲得一些數據、成果，為人類貢獻一點點的知識，此過程中是相當辛苦的。</p>
          <br>
          <p>&emsp;&emsp;從一個單純知識的接收者，變成知識的創造者，對於自己的一生是受用的。希望各位同學能從這門課獲得解決問題的能力，往後能應用在自己的生活或者工作中。高二的成發完成，也代表著一段歷程的結束，但希望同學可以繼續完成後續的修改，若有機會也可多參加科展或其他的發表。最後祝各位同學成發順利，課業蒸蒸日上。</p>
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
          <h2>指導教師 葉昭松老師的話</h2>
          <p> &emsp;&emsp;從專題研究到成果發表，又是一個循環即將完成。雖然對於人力有限的地科老師來說，協助科學班同學進行研究已是長年來的例行工作，但每屆同學發想的研究主題，從廣闊的太空到無法直接探知的地球內部，對於老師來說一直還是充滿挑戰，如同開福袋一樣的驚喜（或驚悚）！</p>
          <br>
          <p> &emsp;&emsp;這次選擇來到地科組的韋達和佾熙，從高一開始就同時在奧林匹亞競賽和專題研究投注心力，需要分配時間才能逐步推進研究工作。而兩位同學各自的研究更是「天」「壤」之別，因此討論時必須隨時在「星團分析」及「大屯火山活動」兩個頻道間切換，對我的大腦確實不甚友善～</p>
          <br>
          <p> &emsp;&emsp;幸好，韋達和佾熙仍然按部就班地走出各自的研究之路，也有了初步的成果可以分享給大家。對科學班同學來說，成果發表會還不是終點，高三的個別研究還有可以發揮的空間和舞台，當然除了研究外，競賽的領域也是值得拚搏的戰場，期待你們接下來的成果，如同星雲孕育恆星一般，你們就是未來發光發熱的科學新星！</p>
          <br>
          <p> &emsp;&emsp;現在，該你們上台了！</p>
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
          <h2>指導教師 潘威歷老師的話</h2>
          <p  style="display: flex; font-size:2.2em; justify-content: center; ">追求卓越的過程中，成為自己的生成式AI!</p>
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