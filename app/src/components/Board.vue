<template>
  <div
      ref="note"
      @mousedown="mouseDown"
      @mousemove="elementDrag"
      @mouseup="closeDragElement"
      v-bind:style="{
        top: boxOffsetTop + 'px',
        left: boxOffsetLeft + 'px',
        backgroundColor: color,
        width: boxWidth + 'px',
        height: boxHeight + 'px'}"
      class="absolute rounded-sm shadow-xl overflow-y-auto cursor-move">
    <div class="w-full h-full relative">
      <p
          ref="boxText"
          contenteditable
          @keydown="onKeyDown"
          @dblclick="onDoubleClicked"
          class="p-2 outline-none w-full h-full">{{ text }}
      </p>
      <div
          @mousedown="startResizing"
          @mousemove="elementDrag"
          @mouseup="stopResizing"
          class="absolute bottom-0 right-0 w-4 h-4 bg-green-500 cursor-se-resize"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Board",
  props: ['text', 'color', 'boxWidth', 'boxHeight', 'posX', 'posY'],
  data() {
    return {
      dragging: false,
      posClickedX: 0,
      posClickedY: 0,
      boxOffsetTop: this.posY,
      boxOffsetLeft: this.posX,
      xDiff: 0,
      yDiff: 0,
      keyStack: null,
      resize: {
        x: 0,
        y: 0
      }
    }
  },
  methods: {
    mouseDown(e) {
      e.preventDefault();
      this.posClickedX = e.clientX;
      this.posClickedY = e.clientY;
      this.xDiff = this.posClickedX - this.boxOffsetLeft;
      this.yDiff = this.posClickedY - this.boxOffsetTop;
      this.dragging = true;
    },
    elementDrag(e) {
      e.preventDefault();
      if (this.dragging) {
        this.boxOffsetLeft = e.clientX - this.xDiff;
        this.boxOffsetTop = e.clientY - this.yDiff;
      } else {
        this.boxWidth += e.clientX - this.resize.x;
        this.boxHeight += e.clientY - this.resize.y;
      }
    },
    closeDragElement(e) {
      this.dragging = false;
    },
    onKeyDown(e) {
      if (e.key == 'Escape') {
        this.$refs.boxText.blur();
      }
    },
    onDoubleClicked(e) {
      // Focus on element
      this.$refs.boxText.focus();
      // Move cursor to end of text block
      const range = document.createRange();
      range.selectNodeContents(this.$refs.boxText);
      range.collapse(false);
      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
    },
    startResizing(e) {
      this.$refs.note.removeEventListener("mousedown", this.mouseDown);
      this.$refs.note.removeEventListener("mousemove", this.elementDrag);
      this.$refs.note.removeEventListener("mouseup", this.closeDragElement);
      this.dragging = false;
      this.resize.x = e.clientX;
      this.resize.y = e.clientY;
    },
    stopResizing(e) {
      console.log(e);
      this.$refs.note.addEventListener("mousedown", this.mouseDown);
      this.$refs.note.addEventListener("mousemove", this.elementDrag);
      this.$refs.note.addEventListener("mouseup", this.closeDragElement);
    }
  },
  mounted() {
    this.$refs.boxText.focus();
  }
}
</script>

<style scoped>

</style>