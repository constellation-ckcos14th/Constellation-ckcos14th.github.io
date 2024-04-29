<script setup>
  import {ref, onMounted} from "vue";

  const popupVisible = ref(false);
  const selectedWork = ref(null);
  var closetime = Date.now() - 300;

  import members from "/src/members.json";
  import members_description from "/src/members-description.json";

  function showPopup(work) {
    if (popupVisible.value != true && Date.now() - closetime > 250) {
      //document.body.classList.add("popup-show");
      selectedWork.value = work;
      popupVisible.value = true;
    }
  }
  function hidePopup() {
    //document.body.classList.add("popup-hide");
    popupVisible.value = false;
    selectedWork.value = null;
    closetime = Date.now();
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
    <div> <!--不包一層會死掉，按其他葉面會全黑，https://ithelp.ithome.com.tw/articles/10219050-->
      <div class="members-container">
        <ul class="members-list">
          <li v-for="member in members" :key="member.id">
            <div @click="showPopup(members_description[member.id - 1])">
              <div class="member">
                <div class="member-name">{{ member.name }}</div>
                <div class="member-position">{{ member.position }} </div>
              </div>
            </div>
          </li>
        </ul>
      </div>

      
      <div v-if="popupVisible" class="popup">
          <div class="popup__title">
              <h2 class="no-top-bottom-margin">{{ selectedWork.name }}</h2>
              <button class="close-btn" @click="hidePopup" title="按Esc也可以關掉喔">🞫</button>
          </div>
          <div class="popup__content">
            <!-- <img :src="'/works/'+selectedWork.mark+'.jpg'" class="works-photo" :alt="'/works/'+selectedWork.mark+'.jpg'"> -->
            <p class="popup__description">{{ selectedWork.description }}</p>
          </div>
      </div>
  </div>
</template>



<style socped>
.members-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.members-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.member {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 200px;
  height: 200px;
  margin: 20px;
  box-shadow: 0px 0px 15px #eee;
  border-radius: 10px;
  background-color: rgba(210, 210, 210, 0.9);
  font-size: 1em;
  font-weight: bold;
  text-align:center;
  color: #333;
  transition: transform 0.3s ease-in-out;
}

.member:hover {
  transform: scale(1.05);
}

.member-name {
  margin-top: 20px;
}

.member-position {
  font-size: 0.75em;
  font-style: italic;
  margin : 5px;
  color: #373737;
  white-space: pre-wrap;
  word-break:break-all;
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
  border-bottom: 2px solid #ccc;
}

.popup__content {
  padding: 2vh;
  max-height: 70vh;
  overflow-y: auto;
  text-align: left;
  white-space:pre;
  word-break: break-all;
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