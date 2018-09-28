<template>
  <div>
    <y-head></y-head>
    <router-view/>
  </div>
</template>

<script>
import YHead from '../common/head'
export default {
  name: 'App',
  components: {
    YHead
  }
}
</script>

<style>
</style>
