export default {
  name: "explore",
  data: function() {
    return {
      showTree: true,
      searchInput: "",
      nodeContent: ``,
    };
  },
  computed: {
    showTreeButtonType: function() {
      return this.showTree ? "primary" : "";
    }
  },
  methods: {
    toggleTree: function() {
      this.showTree = !this.showTree;
    }
  }
}
