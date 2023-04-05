<template>
  <div :class="['draggable-container', {'center': initialState, 'dragging': dragging}]" ref="draggable" @pointerdown="startDrag" @pointerup="stopDrag">
    <h1>DRAG AROUND</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';

let clientX, clientY, movementX, movementY = 0;

const initialState = ref(true)
const dragging = ref();
const draggable = ref();

const startDrag = (event) => {
  event.preventDefault();
  clientX = event.clientX;
  clientY = event.clientY;
  window.addEventListener('pointermove', dragEvent);
  dragging.value = true;
}

const stopDrag = () => {
  window.removeEventListener('pointermove', dragEvent);
  dragging.value = false;
};

const dragEvent = (e) => updateDrag(e);

const updateDrag = (e) => {
  updateMousePosition(e);
  initialState.value = false
  let element = draggable.value;
  let [offsetX, offsetY] = validatePosition(element.offsetLeft, element.offsetTop);
  element.style.left = (offsetX - movementX)+'px';
  element.style.top = (offsetY - movementY)+'px';
}

const updateMousePosition = (e) => {
  movementX = clientX - e.clientX;
  movementY = clientY - e.clientY;
  clientX = e.clientX;
  clientY = e.clientY;
}

const validatePosition = (x, y) => {
  let pos = generatePosition();
  x = (clientX < pos.left) ? 0 : (clientX > pos.right) ? pos.maxWidth : x;
  y = (clientY < pos.top) ? 0 : (clientY > pos.bottom) ? pos.maxHeight : y;
  return [x, y]
}

const generatePosition = () => {
  let [windowHeight, windowWidth] = [window.innerHeight, window.innerWidth];
  let [elHeight, elWidth] = [draggable.value.clientHeight, draggable.value.clientWidth];
  let elementPositions = {
    maxHeight: windowHeight - elHeight,
    maxWidth: windowWidth - elWidth,
    top: (elHeight / 2),
    bottom: windowHeight - (elHeight / 2),
    left: (elWidth / 2 ),
    right: windowWidth - (elWidth / 2),
  }
  return elementPositions;
}
</script>

<style scoped>
.draggable-container {
  border: #fff 1px solid;
  position: absolute;
  padding: 50px;
  cursor: grab;
  transition: border .25s ease-in-out;
}
.draggable-container:hover {
  border: #fff 5px solid;
}

.center {
  position: relative;
}

.dragging {
  cursor: grabbing;
}
</style>