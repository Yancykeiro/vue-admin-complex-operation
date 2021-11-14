
export const debounce = {
  props: {
    time: {
      type: Number,
      default: 400
    }
  },
  data() {
    return {
      record: 0
    }
  },
  mounted() {
    console.log('mixins succeed')
  },
  methods: {
    debounce() {
      const newTime = new Date()
      if (newTime.getTime() - this.record > this.time) {
        this.$emit('click')
        console.log('debounce')
      }
      this.record = (new Date()).getTime()
    }
  }
}
