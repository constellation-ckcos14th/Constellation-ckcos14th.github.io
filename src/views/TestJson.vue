<script setup>
  import desc from "../works-description.json";
</script>

<template>
  <div v-for="items in desc" :key="items.id">
    <div>{{items.subject}}</div>
    <div v-for="item in items.list" :key="item.id">
      <div>{{item.title}}</div>
    </div>
    <br>
  </div>
</template>