<template>
  <h1>Hello sub1 vue test page</h1>

  <div id="colorful">
    <div
      class="el_contextArea"
      @click.left="() => (show = false)"
      @click.right.prevent="
        (e) => {
          menu_position.top = e.pageY - 15;
          menu_position.left = e.pageX - 40;
          show = true;
          console.log(e.pageX);
        }
      "
    >
      右クリックでコンテキストメニュー表示
    </div>
    <ul
      class="el_contextMenu el_contextMenu__colorful"
      :style="{
        top: menu_position.top + 'px',
        left: menu_position.left + 'px',
      }"
      v-show="show"
    >
      <li>
        <a href="#"><i class="fas fa-hamburger"></i>menu1</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-pizza-slice"></i>menu2</a>
      </li>
      <li>
        <a href="#"><i class="fas fa-ice-cream"></i>menu3</a>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
const show = ref(false);

const menu_position = ref({
  left: 0,
  top: 0,
});

console.log(JSON.stringify(menu_position));
</script>

<style scoped>
.el_contextArea {
  width: 80%;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #000;
  position: relative;
}
.el_contextMenu {
  position: absolute;
  border-radius: 20px;
  &.el_contextMenu__colorful {
    > li {
      border-radius: 20px;
      list-style: none;
      transition: box-shadow 0.1s;
      &:hover {
        box-shadow: 0 0 4px #000;
      }
      &:nth-child(3n + 1) {
        background-color: #3e979b;
      }
      &:nth-child(3n + 2) {
        background-color: #6db464;
      }
      &:nth-child(3n) {
        background-color: #f3c14e;
      }
      > a {
        padding: 0.5em 2em;
        color: #fff;
        text-decoration: none;
        display: block;
        height: 100%;
      }
      i {
        margin-right: 0.25em;
      }
    }
  }
}
</style>
