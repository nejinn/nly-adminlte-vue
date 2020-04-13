import { nlyPluginFactory } from "../utils/plugins";
import { collapseSidebarDirectivePlugin } from "./sidebarcollapse";
import { cardDirectivePlugin } from "./card";
import { toggleDirectivePlugin } from "./toggle";
import { yNlyModalPlugin } from "./modal";

export const directivesPlugin = nlyPluginFactory({
  plugins: {
    cardDirectivePlugin,
    collapseSidebarDirectivePlugin,
    toggleDirectivePlugin,
    yNlyModalPlugin
  }
});
