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
    if (newTab === '化學') {
      // play a sound effect
      var audio = new Audio('blaster.mp3');
      audio.play();
    }
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
          <h2>天啊</h2>
          <p>尤達</p>
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
              <div v-for="img in selectedWork.images" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '物理'">

        <div class="div-page">
          <h2>指導教師：柳順儒老師</h2>
          <h4># 上課</h4>
          <p>順儒老師作為兩班的物理老師，上課井然有序，從最一開始的觀念，到後來的每一個物理公式，老師都會非常用力的解釋過一次，作為老師，他一定會確定每個學生都有懂之後才繼續下去，而且老師的評分方式非常合理，雖然他出的考卷大概會有80%的同學不及格，但在最後仍然只有10%的同學被當掉，在此感謝順儒老師送我的分數。</p>

          <h4># 學投資</h4>
          <p>除此之外，順儒老師還有另一個身分——校內多元選修「Python學投資」的授課老師，老師上課極為認真，選他這門課的學生都會有無比巨大的收穫。二年級開始，一週會有5節研究課，其中有2節排在星期五上午，時間太短了，不適合去實驗室作實驗，因此老師熱情邀約我們星期五這兩節課來跟他一起用 Python 學投資。我們每週要輪流看一部網路上用 Python 投資理財的影片，並將影片內容及範例程式碼講解給其他同學。平時輪到老師時，在教學上若有任何問題，最常和本組的朗神討論。在老師的帶領及同學的切磋下，本組同學在資訊領域也有長足(?)的進步，讓我們對於
          <ruby>
            預<rp>(</rp><rt>ㄆㄞ</rt><rp>)</rp>
            測<rp>(</rp><rt>ㄙㄣˇ</rt><rp>)</rp>
            股<rp>(</rp><rt>ㄩˇ</rt><rp>)</rp>
            市<rp>(</rp><rt>ㄈㄚˇ</rt><rp>)</rp>
          </ruby>
          走向有相當程度的認識。</p>

          <h4># 專題課</h4>
          <p>學期初時，基於物理組可能的辛苦以及困難，專題課開始時才發現只有4人在物理組。一連串的努力後，老師終於帶領我們做了物理奧林匹亞初試的詳解、用Python學投資、以及提醒大家壓力不要太大，「高中專題做到哪裡就算哪裡」，儘管各位同學都做得非常完善，毫無缺漏，真是擁有大愛的老師啊。</p>

          <p>以下一些簡單的語助詞讓你瞬間變成物理老師:</p>
          <ol>
            <li>將語句中的"笨"換成"豬頭"</li>
            <li>驚訝的語助詞全部換成"哇靠"</li>
            <li>表示認同的時候"有懂"，膩了請改"了"</li>
            <li>打字的時候強調請用『』以及！</li>
            <li>表情符號請用饅頭人表符不要用小黃人，而且一定要一次三個</li>
            <li>讚嘆的時候：太~厲~害~了~</li>
            <li>把所有的"好"換成"OK"</li>
            <li>把"Tracker"念成"垂可"</li>
            <li>當你不想算小學數學時，"經過一番努力"就有答案了(偷看答案)</li>
          </ol>
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
              <div v-for="img in selectedWork.images" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '化學'">

        <div class="div-page">
          <h2>指導教師：楊傑超老師｜超哥</h2>
          <h4># 226班的班導兼數資班化學老師</h4>
          <p>楊傑超老師是226班的導師，也是一位化學老師，老師上課時的投影片總是讓人覺得「振奮人心」，翻頁以及字幕的音效讓我們彷彿來到了烏俄戰爭的最前線，耳邊圍繞的雷射激光和爆炸音效使我們不敢在課堂中閉上眼睛，每次化學課都精神超好</p>
          <h4># 爬山魔人</h4>
          <p>傑超老師超級愛爬山，每次看到他的FB貼文幾乎都是一群老師去爬山，而且老師也是時間規劃大師，就連畢旅陪我們玩了四天以後還是可以再去台東花蓮爬山，只能說體力真的超好！</p>
          <h4># 還是很年輕</h4>
          <p>千萬不要覺得傑超老師已經邁入中年了，其實老師的內心還是非常的年輕，例如在義大的時候就是超哥揪團去玩天旋地轉的，而且坐完之後還一派輕鬆，我都開始覺得老師比我年輕了，反正我是絕對不敢去做那種對心臟不好的遊樂設施啦</p>
          <h4># 專題乾爹</h4>
          <p>超哥去年十二月接連拜訪各實驗室教授，分別和化專同學造訪中研院、台大、師大，因專題時間為下午，因此大方的超哥不但親自載同學去中研院，還慷慨解囊請同學午餐，甚至每週都有其他專題組別同學前來蹭飯，總共於南港車站鐵板燒、台大學餐咖哩飯、公館牛排，三處嚴重破費，甚至於群組拜託同學尋找「高cp值餐廳」，大家不要再蹭老師的免費午餐了好嗎</p>
          <h4># 開快車</h4>
          <p>傑超老師的順風車不是一般人能搭的，心臟不大顆絕對不能上車。經過幾個彎道後，你會覺得自己身處秋名山上，正坐在藤原拓海的車上一路狂飆，管你是路口轉彎還是上匝道，都沒在跟你開玩笑，一腳油門方向盤打到底，早餐都要被甩出來了</p>
          <h4># 零距離</h4>
          <p>超哥與學生感情十分要好，不但經常有大學長回來拜訪與經驗分享，平時更會與同學談天說地，別科競賽 、同學聚會去哪、爬過哪座山等等，超哥的話題包羅萬象，什麼都可以跟你聊上幾句，很親民欸超哥</p>
          <h4># 紮實的專題課</h4>
          <p>有別於其他科目的專題札記使用頻率時高時低，化學組的研究札記可是要週週寫週週交，甚至有組別早已寫滿換第二本，也有同學一次補齊一學期的十幾篇札記，可見札記在化專同學的心目中是一本難以忘懷的記憶</p>
          <h4># 生命導師</h4>
          <p>當你被超哥約談或者專題課留在學校被超哥拜訪，代表你即將接受一段激勵人心的話語洗禮，超哥會鼓勵我們參與各種科展競賽，競賽落榜會獲得溫馨安慰考試分數太爛也會獲得特別關心，當被超哥叫到名字時是五味雜陳，是既期待又怕受傷害，特別是免修結果要公布的時候。總之，當超哥看好你的時候，你最好用功一點。</p>
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
              <div v-for="img in selectedWork.images" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>

      <div v-if="activeTab === '生物'">

        <div class="div-page">
          <h2>指導教師：朱芳琳老師</h2>
          <p>關於 生物科 朱芳琳老師 的十大事跡</p> 
          <ol>
            <li>【手打開開】 上課時常出現特有動作，如圖。</li>
            <li>【表單大王】 很不小心的出了很多表單，期末才會把分數加一加並發還考卷，如果期末的時候一直收到classroom的通知，那大概就是生物老師想起來要發還考卷了。</li>
            <li>【當人威脅】 聲稱如果看到小人在草原上奔跑就當掉。（某陣子班上一直玩糖豆人）</li>
            <li>【處變不驚】 即便有人上課站在椅子上，上課時都能夠開啟自我屏蔽功能，老師十分習慣我們站在桌子上課。</li>
            <li>【滿懷關愛】 非常支持學生專題課去吃拉麵，生物組每週堅持。</li>
            <li>【永不回頭】 只見到一次的Kahoot，從此就沒有再看到了，之後的每一堂課在26班都可以聽到程朗很堅持要玩Kahoot。</li>
            <li>【成就達成】 具有企圖心，成功比賴皮遲到更久，這個習慣在高二之後越來越明顯，期待老師以後的每堂課都可以準時到教室。</li>
            <li>【用功努力】 每學期都透過免修考費盡心思的搞死學生（出自檸檬，或許是因為他這學期沒過，才這麼怨恨，相較之下，其他人已經習慣了）</li>
            <li>【考卷魔王】 她擁有永遠出不完也寫不完的考卷。</li>
          </ol>

          <h4># 凌晨通知</h4>
          <p>在芳琳老師的世界中，沒有沒有來不及發的通知，只有來不及在上課前發的通知。曾經有好幾次上課前一天晚上的12.以後老師才在GC提醒同學們預習隔天要小考。</p>
          <p>什麼？你問有人10.睡覺怎麼辦？問就是放棄。</p>
          <h4># 手繪王者</h4>
          <p>身為樹枝班的生物老師，在教學時難免會需要透過繪製圖片來表達一些艱深的生物概念，此時芳琳老師高超的手繪技巧便派上用場。在老師的
          <ruby>
            鼓<rp>(</rp><rt>ㄒㄧㄝˊ</rt><rp>)</rp>
            勵<rp>(</rp><rt>ㄆㄛˋ</rt><rp>)</rp>
          </ruby>
          下，班上同學都不由自主的對這些儼然為世界頂尖藝術品的美及深刻的寓意由衷的發出讚嘆。</p>
          <h4># 手打開開</h4>
          <p>每次上課都積極使用手部動作活化教學，希望藉由這些肢體的輔助，展現對同學的關愛與熱情，讓學習更加生動有趣（他越是手打開開，同學們越不知道他在上什麼）</p>
          <h4># 編審委員</h4>
          <p>是翰林版生物課本的編審委員，所以只要發現課本寫的不好可以反應給老師知道，但會不會改就是另一回事了。</p>
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
              <div v-for="img in selectedWork.images" :key="img.id">
                <img :src="'/works/'+img" class="works-photo" :alt="'/works/'+selectedWork.mark+'.jpg'">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>

          </div>
        </div>
      </div>


      <div v-if="activeTab === '地科'">
        
        <div class="div-page">
          <h2>指導教師：李文禮老師</h2>
          <h4># 我聽你唬爛</h4>
          <p>高一上地球科學時，文禮老師常常會問先同學如何解釋一個現象，聽完同學解釋後，再說「我聽你唬爛!」，接著開始上課。上完課還會臭屁一下的表示:「老師還是比較厲害吧!」</p>
          <h4># 喜歡嘗試各種活動、新科技</h4>
          <p>文禮常常找各種科學活動問同學要不要參加，又或是最近流行甚麼ChatGPT，文禮都會找學生討論。</p>
          <h4># 你是我的花朵</h4>
          <p>請以<b>李文禮-我的花朵</b>為關鍵字搜尋，會查到不少有趣的影片，如: <a href="https://www.youtube.com/watch?v=Q-_XMqxa0Ck&ab_channel=%E8%8B%B1%E9%9B%84Brine">leeroll</a> X)</p>
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
              <div v-for="img in selectedWork.images" :key="img.id">
                <img :src="'/works/'+img"   class="works-photo"   :alt="'/works/'+img">
              </div>
              <p class="popup__description">{{ selectedWork.description }}</p>
            </div>
          </div>
        </div>
      </div>


      <div v-if="activeTab === '資訊'">

        <div class="div-page">
          <h2>指導教師：王鼎中老師</h2>
          <h4># 影分身</h4>
          <p>我們的指導老師是在學校身兼多職的王鼎中老師，他同時兼任了學務處的主任、數個班級的資訊老師，以及我們兩班的專題指導老師還是校內知名社團機器人研究校隊暨社團的指導老師。由於他接了太多個工作，導致他可能出現的地方比其他老師多很多，去哪裡都有可能遇到他，感覺跟影分身沒兩樣。不過這也是一個雙面刃，由於有太多的可能性，許多學生常常有需要找到老師卻找不到的困擾 (或是被關在電教門外)，似乎也有其他老師遇到找不到鼎中老師的困境（？。幸好重要的時候鼎中老師還是會在千鈞一髮之際出現給予最恰到好處的提點，讓同學的專題內容更加完整。</p>
          <h4># 認真用心</h4>
          <p>鼎中老師是一名認真的老師，是非常有經驗的專業人士，他在教學上非常注重實作，也非常關注學生的學習成果。在課程中，他會根據專題進度定期安排簡報發表與資訊分享。他會他會定期與學生們進行交流，和彼此分享自己的專題進度，並鼓勵學生們蒐集並分析相關知識和其他資訊組的同學分享。通過他的教學，學生們能夠更好地理解專題的核心概念，並獲得實踐經驗。</p>
          <h4># 你跳太快了</h4>
          <p>鼎中老師在同學進度報告時，時常提醒同學「你跳太快了」，回到前幾張投影片慢慢說明，顯示老師非常關心學生的專題狀況。</p>
          <h4># 抓緊進度</h4>
          <p>鼎中老師相當關心學生的專題，因此時常提醒同學要抓緊進度，於是這句話變成每堂課都會出現的口頭禪。</p>
          <h4># 非常好</h4>
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
              <div v-for="img in selectedWork.images" :key="img.id">
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