<template>
  <div class="tab-page contact-pg">
    <h1>Contact Us</h1>
    <div class="contact-methods">
      <a
        href="https://www.instagram.com/ckcos14th.constellation/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <dev class="fa fa-instagram"></dev> <h2>Instagram</h2>
      </a>
      <a
        href="https://github.com/constellation-ckcos14th/Constellation-ckcos14th.github.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        <dev class="fa fa-github" style="color:white"></dev> <h2>Github</h2>
      </a>
      <a
        href="https://tellonym.me/cos14.ck"
        target="_blank"
        rel="noopener noreferrer"
      >
        <dev class="fa fa-question-circle"></dev> <h2>匿名Q&amp;A</h2>
      </a>
    </div>

    <div class="team div-page">
      <h2>Developer List</h2>
      <div class="team-member-list">
        <div
          v-for="teammate in teammateList"
          :key="teammate.id"
          class="team-member"
        >
          <div class="team-member-photo">
            <img :src="teammate.photo" alt="" />
          </div>
          <div class="team-member-info">
            <h3>{{ teammate.name }}</h3>
            <p>{{ teammate.position }}</p>
            <p>{{ teammate.intro }}</p>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script setup>
const teammateList = [
  {
    id: 1,
    name: "廖乃頡",
    position: "網管組組長1",
    intro: "寫程式語言所以是一類組",
    photo: "/team/liao.jpg",
  },
  {
    id: 2,
    name: "程朗",
    position: "網管組組長2",
    intro: "朗神。",
    photo: "/team/cheng.jpg",
  },
  {
    id: 3,
    name: "賴昱錡",
    position: "網管組組員",
    intro: "我不會寫程式。",
    photo: "/team/lai.jpg",
  },
  {
    id: 4,
    name: "謝秉宸",
    position: "空降支援",
    intro: "超級電！！",
    photo: "/team/xie.png",
  },
];
</script>
<style scoped>
.contact-methods a {
  display: flex;
  align-items: center;
  width: fit-content;
  margin-bottom: 2%;
  margin-left: 3%;
  color: #007bff;
  text-decoration: none;
}

.contact-methods a i {
  margin-right: 2%;
}

.contact-methods h2{
  color:#007bff;
  margin-left: 5px; 
}

.fa.fa-instagram {
  color: transparent;
  background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background: -webkit-radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  background-clip: text;
  -webkit-background-clip: text;
} /*把instagram icon變成彩色!*/

.contact-methods h2:hover {
  text-decoration: underline;
}

.team-member-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}

.team-member {
  width: 48%;
  margin-bottom: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.team-member-photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
  margin-bottom: 20px;
}

.team-member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.team-member-info {
  text-align: center;
}

.team-member-info h3 {
  margin-bottom: 30px;
}

.team-member-info p {
  line-height: 1.4;
  margin-bottom: 5px;
}
</style>
