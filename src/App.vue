<template>
  <div id="root">
    <sidebar :collapse="collapse"></sidebar>
    <div>
      <el-radio-group v-model="collapse" style="margin-bottom: 20px;">
        <el-radio-button :label="false">expand</el-radio-button>
        <el-radio-button :label="true">collapse</el-radio-button>
      </el-radio-group>
    </div>
  </div>
</template>

<script>
import Sidebar from './sidebar/sidebar.vue'
import Vue from 'vue'

Vue.component(Sidebar.name, Sidebar)

export default {
  name: "app",
  data: function() {
    return {
      collapse:true
    };
  }
}
</script>

<style>
body {
  margin: 0px;
}
.sidebar {
  float:left;
}
</style>
