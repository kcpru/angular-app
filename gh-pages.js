var ghpages = require("gh-pages");

ghpages.publish("dist/angular-app", {
  branch: "gh-pages",
  repo: "https://github.com/KacperSlusarczyk/angular-app.git"
});
