// import React from "react";

// import { Responsive as ResponsiveGridLayout } from "react-grid-layout";

// export const MyResponsiveGrid = () => {
//   const layouts = [
//     { i: "a", x: 0, y: 0, w: 1, h: 2, static: true },
//     { i: "b", x: 1, y: 0, w: 3, h: 2, minW: 2, maxW: 4 },
//     { i: "c", x: 4, y: 0, w: 1, h: 2 },
//   ];

//   return (
//     <ResponsiveGridLayout
//       className="layout"
//       layouts={layouts}
//       width={1200}
//       breakpoint={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
//       cols={{ lg: 12, md: 10, sm: 6, xs: 4, xxs: 2 }}
//       style={{ background: "yellow" }}
//     >
//       <div key={"1"} style={{ background: "green" }}>1</div>
//       <div key={"2"} style={{ background: "green" }}>2</div>
//       <div key={"3"} style={{ background: "green" }}>3</div>
//     </ResponsiveGridLayout>
//   )
// }

import { Responsive, WidthProvider } from "react-grid-layout";
const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

// styled-components definition removed for brevity...
export const MyResponsiveGrid = () => {
  return (
    <ResponsiveGridLayout
      layouts={{ lg: layout }}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      width={1000}
      style={{ background: "orange" }}
    >
      <div style={{ background: "beige" }} key="blue-eyes-dragon">
        <div>Blue Eyes Dragon</div>
      </div>
      <div style={{ background: "beige" }} key="dark-magician">
        <div>Dark Magician</div>
      </div>
      <div style={{ background: "beige" }} key="kuriboh">
        <div>Kuriboh</div>
      </div>
      <div style={{ background: "beige" }} key="spell-caster">
        <div>Spell Caster</div>
      </div>
      <div style={{ background: "beige" }} key="summoned-skull">
        <div>Summoned Skull</div>
      </div>
    </ResponsiveGridLayout>

  );
};