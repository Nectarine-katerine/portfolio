import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/parallax";
import "./scripts/works";
import "./scripts/menu";
import "./scripts/reviews";
import "./scripts/scroll";
import "./scripts/form";
import "./scripts/feedback";