<template>
  <div>
    <h1>{{ title }}</h1>

    <p>{{ description }}</p>
  </div>
</template>

<script>
export default {
  name: "Recette",
  props: ['title', 'description']
}
</script>