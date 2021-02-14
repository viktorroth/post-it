<template>
  <Board
      v-for="note in notes"
      :key="note.id"
      :text="note.text"
      :color="note.color"
      :boxWidth="note.width"
      :boxHeight="note.height"
      :posX="note.posX"
      :posY="note.posY">
  </Board>

<!--  <ul>-->
<!--    <li v-for="note in notes">-->
<!--        <Board-->
<!--            v-for="note in notes"-->
<!--            :key="note.id"-->
<!--            v-bind="note">-->
<!--        </Board>-->
<!--    </li>-->
<!--  </ul>-->

<!--  <Board-->
<!--      v-for="note in notes"-->
<!--      :key="note.id"-->
<!--      v-bind="note">-->
<!--  </Board>-->

  <div class="optionHandlers">
    <button @click="addNote" class="fixed bottom-10 right-10 p-4 rounded-full bg-blue-500 shadow-lg">
      <img src="./assets/add-24px.svg" alt="plus button">
    </button>
    <div ref="colorPickerButton" class="fixed bottom-28 right-10 px-3 py-2 bg-blue-500 rounded-full">Color</div>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Board from './components/Board.vue';
import Picker from 'vanilla-picker';

// This starter template is using Vue 3 experimental <script setup> SFCs
// Check out https://github.com/vuejs/rfcs/blob/script-setup-2/active-rfcs/0000-script-setup.md
export default {
  components: {
    Board
  },
  data() {
    return {
      lastId: 0,
      notes: [],
      keyStack: null,
      color: 'RGBA(252, 211, 77, 1)',
      colorPicker: null
    }
  },
  methods: {
    randomNumber(min, max) {
      const r = Math.random() * (max-min) + min;
      return Math.floor(r)
    },
    addNote() {
      this.lastId++;
      this.notes.push({
        id: this.lastId,
        text: '',
        color: this.color,
        width: 210,
        height: 220,
        posX: this.randomNumber(0, 800),
        posY: this.randomNumber(0, 800)
      })
      this.colorPicker.closeHandler();
    }
  },
  mounted() {
    this.$nextTick(function () {
      document.addEventListener('keydown', (e) => {
        if (!this.keyStack) {
          this.keyStack = e.key;
        } else {
          if ((this.keyStack == 'Control' && e.key == 'n') || (this.keyStack == 'n' && e.key == 'Control')) {
            this.addNote();
          }
        }
      })

      document.addEventListener('keyup', (e) => {
        this.keyStack = null;
      })

      this.colorPicker = new Picker({
        parent: this.$refs.colorPickerButton,
        popup: 'top'
      });

      this.colorPicker.onChange = (color) => {
        this.color = color.rgbaString;
      }
    })
  }
}
</script>

<style>

</style>