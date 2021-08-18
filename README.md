# todolist

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



<template>
  <el-row>
    <el-col :span="10">
      <input
        v-model="text"
        id="amount"
        name="amount"
        type="text"
        maxlength="15"
        @paste.prevent
        @input="formatCurrency()"
      />
      <span>Output: {{ text }}</span>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'HelloWorld',
  data() {
    return {
      text: ''
    }
  },
  beforeMount() {
    this.formatCurrency
  },
  methods: {
    formatCurrency() {
      var input = this.text;
      var text = input.replace(/(\d)(?=(\d{3})+\b)/g, "$1,");
      console.log(text);
    }
  },
}
</script>
<style scoped>
input {
  border: 1px solid #333;
  border-radius: 5px;
  color: #333;
  font-size: 32px;
  margin: 0 0 20px;
  width: 100%;

}
</style>

