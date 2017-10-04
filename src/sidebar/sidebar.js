export default {
  name: 'sidebar',
  props: [
    "collapse"
  ],
  methods: {
    handleOpen: function(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose: function(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
