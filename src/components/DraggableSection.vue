<template>
  <div class="drag-section">
    <div class="empty" @dragover="dragOver" @dragenter="dragEnter" @dragleave="dragLeave" @drop="drop">
      <div
        class="fill"
        draggable="true"
        ref="fill"
        @dragstart="dragStart"
        @dragend="dragEnd"
      > <h2>DRAG ME</h2></div>
    </div>
    <div class="empty" @dragover="dragOver" @dragenter="dragEnter" @dragleave="dragLeave" @drop="drop"></div>
    <div class="empty" @dragover="dragOver" @dragenter="dragEnter" @dragleave="dragLeave" @drop="drop"></div>
    <div class="empty" @dragover="dragOver" @dragenter="dragEnter" @dragleave="dragLeave" @drop="drop"></div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const fill = ref(null)
const empty = ref([])


const dragStart = () => {
  fill.value.className += ' hold'
  setTimeout(() => fill.value.className = ' invisible', 0)
}

const dragEnd = () => {
  fill.value.className = 'fill'
}

const dragOver = (e) => {
  e.preventDefault()
}

const dragEnter = (e) => {
  e.preventDefault()
  e.target.className += ' hovered'
}

const dragLeave = (e) => {
  e.target.className = 'empty'
}

const drop = (e) => {
  e.target.className = "empty"
  e.target.append(fill.value)
}

</script>

<style scoped>
  .drag-section {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    width: 500px;
    height: 500px;
  }

  .fill {
    background-color: red;
    border: 2px solid yellow;
    position: relative;
    width: 200px;
    height: 200px;
    cursor: move;
  }

  .empty {
    width: 200px;
    height: 200px;
    border: 2px solid yellow;
    background-color: rgba(255, 255, 255, .5);
    /* border: 2px solid yellow; */
  }

  .hold {
    border: 2px solid #ccc;
  }

  .hovered {
    background: blue;
    border-style: dashed;
  }

  .invisible {
    display: none;
  }
</style>
