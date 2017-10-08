export default {
  name: "simple-search",
  props: [
    "input"
  ],
  data: function() {
    return {
      selected: "Node",
      options:[
        "Node",
        "Value",
        "Node & Value",
      ],
    };
  },
  methods: {
    fetchSubPaths: function(query, cb) {
      cb([
        {value: "/ULG1"},
        {value: "/LIEV"},
      ]);
    },
    select: function(item) {
      console.log("Selected: " + item.value)
    }
  },
}
