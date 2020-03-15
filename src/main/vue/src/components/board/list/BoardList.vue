<template>
  <b-table :items="boards">
    <template v-slot:cell(id)="data">
      <a :href="'/html/boards/' + data.value">{{data.value}}</a>
    </template>
  </b-table>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "BoardList",
    data() {
      return {
        boards: []
      }
    },
    mounted() {
      axios('/api/boards').then(response => {
        console.log('boards:', response.data.content);
        this.boards = response.data.content;
      })
    }
  }
</script>

<style scoped>

</style>
