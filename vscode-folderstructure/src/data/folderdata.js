const explorer = {
  name: "root",
  isFolder: true,
  items: [
    {
      name: "public",
      isFolder: true,
      items: [
        { name: "index.html", isFolder: false },
        { name: "public nested", isFolder: false },
      ],
    },

    {
      name: "src",
      isFolder: true,
      items: [
        { name: "App.js", isFolder: false },
        { name: "main.js", isFolder: false },
      ],
    },
    {
      name: "package.json",
      isFolder: false,
    },
    {
      name: "index.html",
      isFolder: false,
    },
  ],
};

export default explorer;
