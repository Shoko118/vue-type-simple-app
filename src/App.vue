<script setup lang="ts">
import { ref } from "vue";
import { Issue, Issues } from "./interface/Interface";
import RecipeApp from "./components/RecipeApp.vue";

const issue = ref<Issue>({
  description: "",
  priority: "Low",
  assignee: "",
});

const issues = ref<Issues[]>([]);

function formValidEmpty() {
  const { description, priority, assignee } = issue.value;

  return description && priority && assignee;
}

function addIssue() {
  if (formValidEmpty() === "") return;

  issues.value = [{ ...issue.value, id: Math.random() }];

  issue.value.description = "";
  issue.value.priority = "Low";
  issue.value.assignee = "";
}
</script>

<template>
  <div>
    <h1>Issues Tracker</h1>

    <div>
      <label>Description: </label>
      <input type="text" v-model="issue.description" />
    </div>

    <div>
      <label>Priority</label>
      <select v-model="issue.priority">
        <option value="Low">Low</option>
        <option>Medium</option>
        <option>High</option>
      </select>
    </div>

    <div>
      <label>Assignee</label>
      <input type="text" v-model="issue.assignee" />
    </div>

    <button @click.prevent="addIssue">Add</button>

    <div v-for="issue in issues" :key="issue.id">
      <h3>{{ issue.description }}</h3>
      <h3>{{ issue.priority }}</h3>
      <h3>{{ issue.assignee }}</h3>
    </div>

    <div>
      <RecipeApp />
    </div>
  </div>
</template>
