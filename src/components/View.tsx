import { useMemo } from "react";
import View360, { EquirectProjection } from "@egjs/react-view360";
import "@egjs/react-view360/css/view360.min.css";
import ExampleImage from "../assets/images/example.jpg";
import Hotspot from '../libs/egjs/hotspot';

const View = () => {
  const projection = useMemo(() => new EquirectProjection({
    src: ExampleImage
  }), []);

  return (
    <View360 className="is-16by9" projection={projection}>\
      <div className="container">
        <h1 className="title">Virtual Exhibition</h1>
      </div>
      <div className="view360-hotspots">
        {/* <!-- Hotspots --> */}
        <Hotspot yaw={0} pitch={0}>
          1
        </Hotspot>

        <Hotspot yaw={-90} pitch={0}>
          2
        </Hotspot>

        <Hotspot yaw={0} pitch={90}>
          3
        </Hotspot>
      </div>
    </View360>
  )
}



export default View;