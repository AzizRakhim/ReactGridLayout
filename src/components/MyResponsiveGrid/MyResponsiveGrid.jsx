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