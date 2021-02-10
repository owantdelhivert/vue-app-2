<template>
  <h1>Liste des Recettes</h1>

  <div id="recettes">
    <table>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr><tr>
      <th>
        <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
      </th>
      <th>
        <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
      </th>
    </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
      <tr>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
        <th>
          <Recette title="Raclette" description="Je suis une tartiflette"></Recette>
        </th>
      </tr>
    </table>
  </div>
</template>


<script>
import Recette from "@/components/Recette";

export default {
  name: "Recettes",
  components: {Recette},
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
}
</style>