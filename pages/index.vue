<template>
  <div>
    <!-- <TaskItem :task="task" />
    <Tool 
      v-for="(tool, idx) in task.tools" 
      :key="idx" 
      :tool="tool" 
      />
    <sub-task-item 
      v-for="(task, idx) in task.subTasks" 
      :key="idx" 
      :task="task"
     />
    <sidebar-item class="active" :img="'grid'" /> -->
    <!-- <add-task /> -->
    <!-- <progress-bar :value="100" /> -->
  </div>
</template>

<script setup lang="ts">
import UIcon from "@/components/ui/icons/UIcon/index.vue";
import { ITask } from "@/types/ITask";

const task: ITask = {
  title: "Hello World!",
  subTasks: [
    { title: "SubTask", completed: false },
    { title: "Test", completed: true },
    { title: "Test1", completed: true },
  ],
  tools: [
    { img: "test" },
    { img: "test" },
    { img: "test" },
    { img: "test" },
  ],
  background: {
    color: "#FF6363",
    shadow: "rgba(255, 119, 119, 0.3)",
  },
};
</script>

<style scoped lang="scss"></style>
