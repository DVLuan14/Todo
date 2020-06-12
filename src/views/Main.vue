<template>
  <div id="main">
    <div class="header">
      <div class="fa-user">
        <p>{{ email }}</p>
      </div>
      <el-button class="logout" @click="logout()">
        <p>Logout</p>
      </el-button>
    </div>
    <div class="body">
      <list
      :toDo="item"
      v-for="item in listMain"
      :key="item.index" />
      <el-pagination
        class="pagination"
        background
        layout="prev, pager, next"
        :page-size="1"
        :page-count="totalPage">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import List from '@/components/List.vue';

export default {
  name: 'Main',
  components: {
    List,
  },
  data() {
    return {
      email: 'duongvanluan',
      listMain: [],
      currentPage: 1,
      totalPage: 0,
    };
  },
  methods: {
    getListTogo(page, limit) {
      axios
        .get(`https://mockup-api.herokuapp.com/api/v1/todos?page=${page}&limit=${limit}`,
          {})
        .then((response) => {
          this.listMain = response.data;
          this.totalPage = parseInt(response.headers['x-total-pages'], 0);
        });
    },
  },

};
</script>
<style lang="scss">
  @import "@/assets/stylesheets/main.scss";
</style>
