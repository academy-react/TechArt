import { useState } from "react";

export default function TabsComponent() {
  const [openTab, setOpenTab] = useState(1);

  return (
    <div>
      <h1>Headding component</h1>
    </div>
  );
}
