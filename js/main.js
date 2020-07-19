new Vue({
  el: "#root",
  data: {
    inputData: ''
  },
  methods: {
    onInput(e) {
      this.inputData = e.target.value
    }
  },
  computed: {
    identicon() {
      return jdenticon.toSvg(this.inputData, 340)
    }
  },
  template: `
  <div>
  <div>
  <h1 style="font-family: Sacramento;">Identicon Icon Generator</h1>
  <input placeholder="Enter some texts..." type="text" v-on:input="onInput" autofocus>
</div>
<div class="display">
  <p v-html="identicon"></p>
</div>
</div>
  `
})