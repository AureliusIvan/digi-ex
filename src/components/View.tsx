import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";

import ExampleImage3 from "../assets/images/example-street-view.jpg";
const View = () => {
  const projection = useMemo(() => new EquirectProjection({
    src: ExampleImage3

  }), []);

  return <View360 className="is-16by9" projection={projection} />
}

export default View;