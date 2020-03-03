import { NlyContentWrapper } from "./content-wrapper";
import { NlyContentHeader } from "./content-header";
import { NlyContent } from "./content";

const contentPlugin = {
  NlyContentWrapper: NlyContentWrapper,
  NlyContentHeader: NlyContentHeader,
  NlyContent: NlyContent
};
export { contentPlugin, NlyContentWrapper, NlyContentHeader, NlyContent };
