<template>
  <div class="todo-footer">
    <div class="number-left">{{ $store.getters.count }}item left</div>
    <button @click="$emit('all')">All</button>
    <button @click="$emit('active')">Active</button>
    <button @click="$emit('completed')">Completed</button>
    <button @click="$emit('clearComplete')">Clear completed</button>
  </div>
</template>
