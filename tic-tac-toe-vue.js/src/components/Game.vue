<template>
  <div class="game-container">
    <div class="reset-container">
      <p class="message">{{ message }}</p>
      <button class="reset-button" @click="resetGame">Reset</button>
    </div>
    <div class="board">
      <div v-for="(row, rowIndex) in board" :key="rowIndex" class="row">
        <div
          v-for="(cell, cellIndex) in row"
          :key="cellIndex"
          class="cell"
          @click="makeMove(rowIndex, cellIndex)"
        >
          {{ cell }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";

const props = defineProps({
  size: {
    type: Number,
    default: 3,
  },
});

const board = ref(Array(props.size).fill(null));

const message = ref("It is X turn");
const currentPlayer = ref("X");

function makeMove(rowIndex, cellIndex) {
  console.log(rowIndex, cellIndex);
}
</script>

<style lang="css" scoped>
/* General styles for the game container */
.game-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
  max-width: 400px; /* Adjust based on board size */
}

/* Styles for the game board */
.board {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
  gap: 10px;
  width: 100%;
  max-width: 400px; /* Adjust based on board size */
}

.row {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

/* Styles for the game cells */
.cell {
  width: 100px;
  height: 100px;
  display: flex;

  align-items: center;
  justify-content: center;
  font-size: 2em;
  font-weight: bold;
  background-color: white;
  color: red;
  border: 1px solid black;
  /* color: #fff; */
  /* background-color: #333; */
  border-radius: 5px;
  cursor: pointer;
  /* box-shadow: 0 0 5px rgba(255, 255, 255, 0.5), 0 0 10px rgba(255, 0, 0, 0.5),
    0 0 20px rgba(255, 153, 0, 0.5), 0 0 40px rgba(255, 255, 0, 0.5),
    0 0 80px rgba(0, 255, 0, 0.5); */
  transition: box-shadow 0.3s ease;
}

.cell:hover {
  /* box-shadow: 0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 0, 0, 0.5),
    0 0 30px rgba(255, 153, 0, 0.5), 0 0 50px rgba(255, 255, 0, 0.5),
    0 0 90px rgba(0, 255, 0, 0.5); */
}

.reset-container {
  display: flex;
  gap: 12px;
  margin-bottom: 12px;
}

/* Styles for the reset button */
.reset-button {
  /* margin-top: 20px;  */
  padding: 4px 4px;
  font-size: 1.2em;
  background-color: #333;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: 50px;
}

.reset-button:hover {
  background-color: #444;
}

/* Styles for the message */
.message {
  margin-top: 20px;
  font-size: 1.5em;
  text-align: center;
}
</style>
