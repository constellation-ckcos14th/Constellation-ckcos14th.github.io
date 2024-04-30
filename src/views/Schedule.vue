<template>
  <div class="tab-page schedule-pg">
    <h1>Schedule</h1>
    <img src="schedule.png" alt="學長對不起，我的網頁死了" style="display:block; margin:auto;">
    <div class="div-page">
      <router-link :to="{ name: 'Day1-2F' }" class="sublink">
        <h2>夢紅樓 2F展演廳 (A組)</h2>
      </router-link>
    </div>
    <div class="div-page">
      <router-link :to="{ name: 'Day1-4F' }" class="sublink">
        <h2>夢紅樓 4F國際會議廳 (B組)</h2>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style scoped>

h2{
  margin: 0;
}
.sublink:hover h2{
  color:#007bff;
  text-decoration: underline;
}
.schedule-pg{
  display: block;
  margin: auto;
  justify-content: center;
  align-items: center;
}
</style>
