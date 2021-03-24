import React from "react";
import { useRouteData } from "react-static";

export default () => {
  const { test }: { test: any[] } = useRouteData();
  console.log(test);
  return (
    <div>
      <br />
      Tests:
      <ul>
        {test.map((item, index) => {
          return (
            <li key={index}>
            Page name: {item.data.pageName}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
