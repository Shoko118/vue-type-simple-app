<script setup lang="ts">
import { reactive, ref } from "vue";
import { Issue, Issues } from "./interface/Interface";
import RecipeApp from "./components/RecipeApp.vue";

const issue = reactive<Issue>({
  description: "",
  priority: "Low",
  assignee: "",
});

const issues = ref<Issues[]>([]);

function formValidEmpty(): void | string {
  const { description, priority, assignee } = issue;

  return description && priority && assignee;
}

function addIssue() {
  if (formValidEmpty() === "") return;

  issues.value.push({
    id: Math.random(),
    ...issue,
  });

  issue.description = "";
  issue.priority = "Low";
  issue.assignee = "";
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
