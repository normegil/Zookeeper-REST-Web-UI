export default {
  name: "zk-tree",
  data: function() {
    return {
      selected: "/ULG1/TEST",
      tree: {
        path: "/",
        childs: [
          {
            path: "/ULG1",
            childs: [
              {
                path: "/ULG1/TEST",
                childs: [     ],
              },
              {
                path: "/ULG1/UNITTEST",
                childs: [],
              },
            ],
          },
          {
            path: "/SPW",
            childs: [
              {
                path: "/SPW/TEST",
                childs: [
                  {
                    path: "/SPW/TEST/LC",
                    childs: [],
                  },
                ],
              },
            ],
          },
        ],
      },
    };
  }
}
