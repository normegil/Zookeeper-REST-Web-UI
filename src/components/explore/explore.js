import SimpleSearch from '../simple-search/simple-search.vue'

export default {
  name: "explore",
  data: function() {
    return {
      showTree: false,
      search: {
        input:"/ULG1/UNITTEST/LC",
        selected: "Node",
        options:[
          "Node",
          "Value",
          "Node & Value",
        ],
      },
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
