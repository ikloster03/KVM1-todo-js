export default {
  props: {
    name: {
      type: String,
      default: 'default',
    },
    prefix: {
      type: String,
      default: '',
    },
    classes: {
      type: String,
      default: '',
    },
    description: {
      type: String,
      default: '',
    },
    inputData: {
      type: Object,
      default: () => ({}),
    },
  },
  computed: {
    getPrefix() {
      return this.prefix ? `${this.prefix}-` : ''
    },
    getBlock() {
      return `${this.getPrefix}${this.blockName}`
    },
  },
  data() {
    return {
      blockName: '',
    }
  },
  methods: {
    getClasses() {
      let classes = [this.getBlock, `${this.getBlock}_${this.name}`]
      let extraClasses = []

      if (this.classes) {
        extraClasses = this.classes
          .split(' ')
          .map(cl => `${this.getPrefix}${cl}`)
      }

      return classes.concat(extraClasses)
    },
    getOptions() {
      return {
        [`class`]: this.getClasses(),
        [`id`]: `${this.getBlock}-${this.name}`,
        [`data-name`]: `${this.getBlock}-${this.name}`,
        [`role`]: `${this.componentName}`,
        [`aria-label`]: `${this.description}`,
      }
    },
  },
}
