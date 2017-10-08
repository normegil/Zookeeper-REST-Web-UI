import Vue from 'vue'

export default {
  name: "main-menu",
  props: [
    "router"
  ],
  data: function() {
    return {
      collapsed: true,
      menus: [
        {
          index: "/dashboard",
          icon: "el-icon-menu",
          title: "Dashboard"
        },
        {
          index: "/explore",
          icon: "el-icon-edit",
          title: "Explore"
        },
        {
          index: "/search",
          icon: "el-icon-search",
          title: "Search"
        },
        {
          index: "/history",
          icon: "el-icon-time",
          title: "History"
        },
      ],
      bottomMenus: [
        {
          index: "/settings",
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
    },
    isRouterActive: function() {
      return nil === this.router
    },
  }
}
