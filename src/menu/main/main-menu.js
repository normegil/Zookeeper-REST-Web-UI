import Vue from 'vue'

export default {
  name: "main-menu",
  data: function() {
    return {
      collapsed: true,
      menus: [
        {
          index: "0",
          icon: "el-icon-menu",
          title: "Dashboard"
        },
        {
          index: "1",
          icon: "el-icon-edit",
          title: "Explore"
        },
        {
          index: "2",
          icon: "el-icon-search",
          title: "Search"
        },
        {
          index: "3",
          icon: "el-icon-time",
          title: "History"
        },
      ],
      bottomMenus: [
        {
          index: "4",
          icon: "el-icon-setting",
          title: "Settings"
        },
      ],
    };
  },
  methods: {
    hide: function() {
      return this.collapsed = true;
    },
    show: function() {
      return this.collapsed = false;
    }
  }
}
