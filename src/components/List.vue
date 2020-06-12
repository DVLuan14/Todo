<template>
  <el-table
    style="width: 100%">
    <el-table-column
      label="Name"
      prop="name">
    </el-table-column>
    <el-table-column
      align="right">
      <template class="row-right" slot="header">
        <el-input
          v-model="search"
          size="mini"
          placeholder="Type to search"/>
        <el-button @click="handleCreate" size="mini" type="success">Add New</el-button>
      </template>
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  props: ['list'],
  data() {
    return {
      tableData: [{
        name: 'Tom',
      }, {
        name: 'John',
      }, {
        name: 'Morgan',
      }, {
        name: 'Jessy',
      }],
      search: '',
    };
  },
  methods: {
    ...mapActions(['updateIsShowInfo']),
    openDialogInfo() {
      this.updateIsShowInfo(true);
      this.$emit('updateSelectedItem', this.list);
    },

    handleCreate() {
      this.tableData.push(this.name);
    },
    handleEdit(index, row) {
      console.log(index, row);
    },
    handleDelete(index, row) {
      this.tableData.splice(index, 1);
      console.log(index, row);
    },
  },
};
</script>
<style lang="scss">
  .row-right{
    display: flex;
  }
</style>
