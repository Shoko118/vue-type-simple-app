<script setup lang="ts">
import { ref, computed, reactive } from "vue";
import { Recipe, Recipes } from "../interface/Interface";

const recipes = ref<Recipes[]>([]);

const recipe = reactive<Recipe>({
  name: "",
  ingredient: "",
  step: "",
});

const formValid = computed(() => {
  const { name, ingredient, step } = recipe;
  return name && ingredient && step;
});

function addRecipe() {
  if (formValid.value === "") return;

  recipes.value.push({
    id: Math.random(),
    ...recipe,
  });

  recipe.name = "";
  recipe.ingredient = "";
  recipe.step = "";
}

function removeRecipe(recipe: Recipe) {
  recipes.value = recipes.value.filter((item) => item.id !== recipe.id);
}
</script>

<template>
  <div>
    <h1>Recipe App</h1>

    <form @submit.prevent="addRecipe">
      <div>
        <label>Name:</label>
        <input type="text" placeholder="Enter here" v-model="recipe.name" />
      </div>

      <div>
        <label>Ingredients:</label>
        <input type="text" placeholder="Enter here" v-model="recipe.ingredient" />
      </div>

      <div>
        <label>Steps</label>
        <textarea placeholder="Enter here ..." v-model="recipe.step" @keydown.enter="addRecipe"></textarea>
      </div>

      <button type="submit">Add Recipe</button>
    </form>

    <div v-for="recipe in recipes" :key="recipe.id">
      <h1>{{ recipe.name }}</h1>
      <h2>Ingredients:</h2>
      <h2>{{ recipe.ingredient }}</h2>
      <h3>{{ recipe.step }}</h3>
      <button @click="removeRecipe(recipe)">Remove</button>
    </div>
  </div>
</template>
