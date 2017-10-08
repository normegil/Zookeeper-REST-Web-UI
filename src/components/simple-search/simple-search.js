export default {
  name: "simple-search",
  props: [
    "input"
  ],
  data: function() {
    return {
      input:"",
      selected: "Node",
      options:[
        "Node",
        "Value",
        "Node & Value",
      ],
    };
  },
}
