import { LazyExoticComponent, Suspense } from "react";

const lazyLoad = (Element: LazyExoticComponent<any>) => {
  console.log(Element);
  return (
    <Suspense fallback={<div>loading...</div>}>
      <Element />
    </Suspense>
  );
};

export default lazyLoad;
