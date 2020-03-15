<template>
  <b-table-simple>
    <b-tbody v-if="board !== null">
      <b-tr>
        <b-td>id</b-td>
        <b-td>{{board.id}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>title</b-td>
        <b-td>{{board.title}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>content</b-td>
        <b-td>{{board.content}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>writer</b-td>
        <b-td>{{board.writer}}</b-td>
      </b-tr>
      <b-tr>
        <b-td>editor</b-td>
        <b-td>{{board.editor}}</b-td>
      </b-tr>
    </b-tbody>
    <b-tbody v-else>
      <b-tr>
        <b-td>값이 없습니다.</b-td>
      </b-tr>
    </b-tbody>
  </b-table-simple>
</template>

<script>
  import axios from 'axios';

  export default {
    name: "BoardDetail",
    props: ['id'],
    data() {
      return {
        board: null
      }
    },
    mounted() {
      axios(`/api/boards/${this.id}`)
        .then(response => {
          console.log(response.data);
          this.board = response.data;
        })
    }
  }
</script>

<style scoped>

</style>
