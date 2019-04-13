import "./styles/main.pcss";
if (process.env.NODE_ENV === "development") {
  require("file-loader!./index.pug");
}

import "./scripts/skills";
import "./scripts/works";
import "./scripts/scroll";
import "./scripts/feedback";
import "./scripts/parallax";
import "./scripts/feedback";
import "./scripts/menu";
import "./scripts/form";
import "./scripts/reviews";