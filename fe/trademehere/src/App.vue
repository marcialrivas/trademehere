<template>
  <w-app>
    <header>
      <header-menu/>
    </header>
    <main class="grow">
      <assets-table/>
    </main>
    <footer>Footer</footer>
  </w-app>
</template>

<script>

import HeaderMenu from '@/components/HeaderMenu'; 
import AssetsTable from './components/AssetsTable.vue';

export default {
  name: 'App',
  components: {
    HeaderMenu,
    AssetsTable
  }
}
</script>

<style>
.w-app, header, footer, main {
  color: #666;
}
.w-app {background-color: #fffeed;}
header, footer {background-color: #e9f8fe;min-height: 60px;}
main {background-color: #efffed;}
</style>
