import Theme from "vitepress/theme";
// import "./styles/vars.scss";
// import "./styles/styles.scss";

import "vitepress-markdown-timeline/dist/theme/index.css";

export default {
    ...Theme,
    enhanceApp(ctx) {
        Theme.enhanceApp(ctx);
    },
}