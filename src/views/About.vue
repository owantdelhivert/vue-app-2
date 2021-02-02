<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
  <div class="test">
    <Test msg="Je suis un test"></Test>
  </div>
</template>


<script>
// @ is an alias to /src
import Test from '@/components/Test.vue'

export default {
  name: 'Test',
  components: {
    Test
  }
}
</script>