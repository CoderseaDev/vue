<template>
  <v-container grid-list-sm>
    <h2 class="mt-5">This is draggable example </h2>
    <v-layout row wrap>
      <v-flex lg6 xs12>
        <div v-drag-and-drop:options="options">
          <ul>
            <li v-for="index in 3" :key="index">Item {{index}}</li>
          </ul>
        </div>
      </v-flex>
      <v-flex lg6 xs12>
        <div v-drag-and-drop:options="options">
          <ul>
            <li v-for="index in 3" :key="index">Item {{index+3}}</li>
          </ul>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        options: {
          dropzoneSelector: 'ul',
          draggableSelector: 'li',
          excludeOlderBrowsers: true,
          multipleDropzonesItemsDraggingEnabled: true,
          showDropzoneAreas: true,
          onDrop: function (event) {
          },
          onDragstart: function (event) {
          },
          onDragend: function (event) {
          }
        }
      }
    }
  }
</script>
<style>
  .drag-wrapper {
    display: flex;
    justify-content: center;
  }
  ul {
    display: flex;
    flex-direction: column;
    padding: 3px !important;
    float:left;
    list-style-type:none;
    overflow-y:auto;
    border:2px solid #888;
    border-radius:0.2em;
    background:#82b1ff;
    color:#555;
    margin-right: 5px;
    width:100%;
  }
  /* drop target state */
  ul[aria-dropeffect="move"] {
    border-color:#68b;
    background:#fff;
  }
  /* drop target focus and dragover state */
  ul[aria-dropeffect="move"]:focus,
  ul[aria-dropeffect="move"].dragover
  {
    outline:none;
    box-shadow:0 0 0 1px #fff, 0 0 0 3px #68b;
  }
  /* draggable items */
  li {
    font-size: 2rem;
    border: 1px solid white;
    display:block;
    list-style-type:none;
    margin:0 0 2px 0;
    padding:0.2em 0.4em;
    border-radius:0.2em;
    line-height:1.3;
  }
  li:hover {
    box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
  }
  /* items focus state */
  li:focus
  {
    outline:none;
    box-shadow:0 0 0 2px #68b, inset 0 0 0 1px #ddd;
  }
  /* items grabbed state */
  li[aria-grabbed="true"]
  {
    background:#555;
    color:#fff;
  }
  @keyframes nodeInserted {
    from { opacity: 0.2; }
    to { opacity: 0.8; }
  }
  .item-dropzone-area {
    height: 2rem;
    background: #888;
    opacity: 0.8;
    animation-duration: 0.5s;
    animation-name: nodeInserted;
  }
</style>
