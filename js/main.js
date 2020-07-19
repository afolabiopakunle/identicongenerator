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
  }
})