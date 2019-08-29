<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <MyTable/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import MyTable from '@/components/MyTable.vue' // @ is an alias to /src

@Component({
  components: {
    MyTable
  }
})
export default class Home extends Vue {}
</script>
