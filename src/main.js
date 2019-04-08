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
import "./scripts/feedback";

import Validate from "./scripts/validate";

const validate = new Validate({
    element: '.contactForm'
});

validate.init();