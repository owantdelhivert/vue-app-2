<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div id="test">
      <Test msg="Je suis un test"/>
    </div>
  </div>
</template>

<script>
import Test from '@/components/Test.vue'

export default {
  name: 'About',
  components: {
    Test
  }
}
</script>