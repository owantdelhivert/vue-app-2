<template>
  <h1>Recette du jour</h1>

  <Recette title="Tartiflette" description="Je suis une tartiflette"></Recette>

  <!--  TODO requete api pour afficher la recette du jour-->
</template>

<script>
import Recette from "@/components/Recette";

export default {
  name: 'RecetteDay',
  components: {
    Recette
  },
}
</script>
