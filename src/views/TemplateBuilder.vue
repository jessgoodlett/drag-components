<template>
  <div class="available-elements">
    <div class="element" draggable="true" @dragstart="dragStart">
      <h3>Heading</h3>
      <div class="hide">
        <h1>Amazing Title</h1>
      </div>
    </div>
    <div class="element" draggable="true" @dragstart="dragStart">
      <h3>Paragraph</h3>
      <div class="hide">
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime, alias. Aliquid deleniti dolorem officiis iusto distinctio eveniet voluptates veniam reprehenderit ab vero ratione, libero neque quae natus! Quasi, eum aliquid.</p>
      </div>
    </div>
    <div class="element" draggable="true" @dragstart="dragStart">
      <h3>Button</h3>
      <div class="hide">
        <button>Button</button>
      </div>
    </div>
    <div class="drop" @dragover="dragOver" @dragenter="dragEnter" @dragleave="dragLeave" @drop="drop" ref="dropSection"></div>
  </div>
  
</template>

<script setup>
import { ref } from 'vue'

const dropSection = ref(null)
const currentElement = ref(null);

const dragStart = (e) => {
  currentElement.value = e.target;
}

const dragOver = (e) => {
  e.preventDefault()
}

const dragEnter = () => {
  dropSection.value.classList.add('hover');
}

const dragLeave = () => {
  dropSection.value.classList.remove('hover');
}

const drop = (e) => {
  dropSection.value.classList.remove('hover');
  let element = currentElement.value.querySelector('.hide').cloneNode(true);
  element.className = '';
  dropSection.value.append(element);
}

</script>

<style>
  .available-elements {
    position: fixed;
    left: 0;
    top: 0;
  }

  .drop {
    background-color: darksalmon;
    opacity: .75;
    width: 80vw;
    height: 100vh;
    position: fixed;
    right: 0;
    top: 0;
  }

  .hover {
    opacity: 1;
  }

  .hide {
    display: none;
  }

  .element {
    background-color: darkslategray;
    width: 150px;
    height: 150px;
    padding: 10px;
    margin: 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }

</style>
