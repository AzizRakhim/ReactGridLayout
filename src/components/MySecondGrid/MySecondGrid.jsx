import React from "react";

import GridLayout from "react-grid-layout";

export const MySecondGrid = () => {

  return (
    <GridLayout
      className="layout"
      cols={12}
      rowHeight={30}
      width={1200}
      style={{ background: "red" }}
    >
      <div
        key={"a"}
        data-grid={{ x: 0, y: 0, w: 1, h: 2, static: true }}
        style={{ background: "blue" }}
      >
        a
      </div>
      <div
        key={"b"}
        data-grid={{ x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 }}
        style={{ background: "blue" }}
      >
        b
      </div>
      <div
        key={"c"}
        data-grid={{ x: 4, y: 0, w: 1, h: 2 }}
        style={{ background: "blue" }}
      >
        c
      </div>
    </GridLayout>
  )
}