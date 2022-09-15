import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

const layout = [
  { i: "blue-eyes-dragon", x: 0, y: 0, w: 1, h: 1 },
  { i: "dark-magician", x: 1, y: 0, w: 1, h: 1 },
  { i: "kuriboh", x: 2, y: 0, w: 1, h: 1 },
  { i: "spell-caster", x: 3, y: 0, w: 1, h: 1 },
  { i: "summoned-skull", x: 4, y: 0, w: 1, h: 1 }
];

const getLayouts = () => {
  const savedLayouts = localStorage.getItem("grid-layout");

  return savedLayouts ? JSON.parse(savedLayouts) : { lg: layout };
};

export const MyLocalStorageGrid = () => {
  const handleLayoutChange = (layout, layouts) => {
    localStorage.setItem("grid-layout", JSON.stringify(layouts));
  };

  return (

    <ResponsiveGridLayout
      layouts={getLayouts()}
      breakpoints={{ lg: 1200, md: 996, sm: 768, xs: 480, xxs: 0 }}
      cols={{ lg: 5, md: 4, sm: 3, xs: 2, xxs: 1 }}
      rowHeight={300}
      width={1000}
      onLayoutChange={handleLayoutChange}
      style={{ background: "tomato" }}
    >
      <div key="blue-eyes-dragon" style={{ background: "beige" }} >
        <div>Blue Eyes Dragon</div>
      </div>
      <div key="dark-magician" style={{ background: "beige" }} >
        <div>Dark Magician</div>
      </div>
      <div key="kuriboh" style={{ background: "beige" }} >
        <div>Kuriboh</div>
      </div>
      <div key="spell-caster" style={{ background: "beige" }} >
        <div>Spell Caster</div>
      </div>
      <div key="summoned-skull" style={{ background: "beige" }} >
        <div>Summoned Skull</div>
      </div>
    </ResponsiveGridLayout>

  );
};