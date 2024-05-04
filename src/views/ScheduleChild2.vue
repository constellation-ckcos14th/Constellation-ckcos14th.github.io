<template>
  <div class="tab-page d1-4f">
    <h1>Schedule</h1>
    
    <div class="div-page">
      <h2>Day 1 | 夢紅樓 4F國際會議廳</h2>
      
      <table class="nice-table">
        <tr>
          <th>姓名</th>
          <th>時間</th>
          <th>組別</th>
          <th>主題</th>
        </tr>
        <tr v-for="group in day1Floor4GroupList" :key="group.id">
          <td>{{ group.name }}</td>
          <td>{{ group.mark }}</td>
          <td>{{ group.group }}</td>
          <td class="title">{{ group.title }}</td>
        </tr>
      </table>
    </div>

    <div class="return-btn">
      <router-link :to="{ name: 'Schedule' }" class="link"
      >返回</router-link>
    </div>

  </div>
</template>

<script setup>import schedule from "/src/schedulechild2.json";</script>

<script>
export default {
  data() {
    return {
      day1Floor4GroupList: schedule
    };
  },
};
</script>

<style>
.nice-table{
  white-space: pre;
}

</style>
