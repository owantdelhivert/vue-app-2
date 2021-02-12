<template>
  <h1>Liste des Recettes</h1>

  <li v-for="(recette,index) in recettes" :key="index">
    <Recette v-bind:title=recette.title v-bind:description=recette.description></Recette>
  </li>

</template>


<script>
import Recette from "@/components/Recette";

export default {
  name: "Recettes",
  components: {
    Recette
  },
  data(){
    return{
      recettes : [
        {title : "Raclette", description : "Je suis une raclette"},
        {title : "Tarte", description : "Je suis une tarte"},
      ]
    }
  }
}
</script>

<style>
#recettes {
  margin-left: auto;
  margin-right: auto;
  width: 70%;
}

#recettes table {
  margin-left: auto;
  margin-right: auto;
}

#recettes table th {
  width: 10%;
  height: 200px;
}
</style>