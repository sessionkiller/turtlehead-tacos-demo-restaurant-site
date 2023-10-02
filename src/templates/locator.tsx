// locator.tsx

import * as React from "react";
import "../index.css";
import {
  GetHeadConfig,
  GetPath,
  Template,
  TemplateProps,
  TemplateRenderProps,
} from "@yext/pages";
import PageLayout from "../components/PageLayout";
import {
  provideHeadless,
  Environment,
  SandboxEndpoints,
  SearchHeadlessProvider,
} from "@yext/search-headless-react";
import StoreLocator from "../components/StoreLocator";

export const getPath: GetPath<TemplateProps> = () => {
  return `locator`;
};

export const getHeadConfig: GetHeadConfig<TemplateRenderProps> = () => {
  return {
    title: "Turtlehead Tacos Locations",
    charset: "UTF-8",
    viewport: "width=device-width, initial-scale=1",
  };
};

const searcher = provideHeadless({
  apiKey: YEXT_PUBLIC_SEARCH_API_KEY,
  // make sure your experience key matches what you see in the platform
  experienceKey: "turtlehead-tacos-locator",
  environment: Environment.SANDBOX,
  endpoints: SandboxEndpoints,
  verticalKey: "locations",
});

const Locator: Template<TemplateRenderProps> = () => {
  return (
    <PageLayout>
      <SearchHeadlessProvider searcher={searcher}>
        <div className="mx-auto max-w-7xl px-4">
          <StoreLocator />
        </div>
      </SearchHeadlessProvider>
    </PageLayout>
  );
};

export default Locator;
