export default {
  name: "tree-item",
  props: {
    model: Object,
    selected: String,
  },
  data: function() {
    return {
      open: false,
    };
  },
  computed: {
    name: function() {
      if (null === this.model.path || "" === this.model.path) {
        console.error("Empty path given by model")
      }
      if ("/" === this.model.path) {
        return "/";
      }
      let splitted = this.model.path.split("/");
      return splitted[splitted.length - 1];
    },
    hasChilds: function() {
      return this.model.childs && 0 !== this.model.childs.length;
    },
    itemState: function() {
      return {
        "tree-item-open": this.open && this.hasChilds,
        "tree-item-close": !this.open && this.hasChilds,
        "tree-item-no-child": !this.hasChilds,
        "tree-item-selected": this.isSelected(),
      };
    },
    itemIcon: function() {
      if (this.open && this.hasChilds) {
        return "el-icon-chevron-circle-down"
      } else if (!this.open && this.hasChilds) {
        return "el-icon-chevron-circle-right";
      } else if (this.isSelected()) {
        return "el-icon-circle"
      } else if (!this.hasChilds) {
        return "el-icon-circle-o"
      }
      return {}
    },
  },
  methods: {
    toggle: function() {
      this.open = !this.open;
    },
    addChild: function() {
      console.log("AddChild " + this.model.path)
    },
    edit: function() {
      console.log("Edit " + this.model.path)
    },
    remove: function() {
      console.log("Remove " + this.model.path)
    },
    isSelected: function() {
      return this.model.path == this.selected;
    },
  }
}
