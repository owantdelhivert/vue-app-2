<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Test msg="Je suis un test"/>

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