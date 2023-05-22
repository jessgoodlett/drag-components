<template>
  <div class="sort-container" @dragover="initSortableList" @dragenter="e => e.preventDefault()" ref="sortable">
    <div class="sort" draggable="true" @dragstart="dragStart" @dragend="dragEnd">drag me 1</div>
    <div class="sort" draggable="true" @dragstart="dragStart" @dragend="dragEnd">drag me 2</div>
    <div class="sort" draggable="true" @dragstart="dragStart" @dragend="dragEnd">drag me 3</div>
    <div class="sort" draggable="true" @dragstart="dragStart" @dragend="dragEnd">drag me 4</div>
    <div class="sort" draggable="true" @dragstart="dragStart" @dragend="dragEnd">drag me 5</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const sortable = ref(null)

const dragStart = (e) => {
  e.target.className += ' hold'
  setTimeout(() => e.target.className += ' dragging', 0)
}

const dragEnd = (e) => {
  e.target.className = 'sort'
}

const initSortableList = (e) => {
  e.preventDefault();
  const siblings = [...sortable.value.querySelectorAll(".sort:not(.dragging)")];
  const draggingItem = [...sortable.value.querySelectorAll(".sort.dragging")][0];

  let nextSibling = siblings.find(sibling => {
    return e.clientY <= sibling.offsetTop + sibling.offsetHeight / 2
  });

  sortable.value.insertBefore(draggingItem, nextSibling);
}
</script>

<style>
  .sort-container {
    display: flex;
    flex-direction: column;
    background-color: darkgray;
    padding: 10px;
  }

  .sort {
    width: 350px;
    height: 100px;
    background-color: lightslategray;
    margin: 5px 0;
    border: 2px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .sort.dragging {
    opacity: 0;
  }

  .hold {
    border: 2px solid #ccc;
  }

  .hovered {
    background: blue;
    border-style: dashed;
  }

  .invisble {
    display: none;
  }
</style>