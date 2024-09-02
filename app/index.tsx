import {
  Viro3DObject,
  ViroAmbientLight,
  ViroARPlane,
  ViroARScene,
  ViroARSceneNavigator,
} from "@reactvision/react-viro";

const HelloWorldSceneAR = () => {
  return (
    <ViroARScene>
      <ViroAmbientLight color="#FFFFFF" intensity={250} />

      <ViroARPlane minHeight={0.3} minWidth={0.3} alignment={"Horizontal"}>
        <Viro3DObject
          source={require("../assets/models/cat/12221_Cat_v1_l3.obj")}
          resources={[
            require("../assets/models/cat/12221_Cat_v1_l3.mtl"),
            require("../assets/models/cat/Cat_diffuse.jpg"),
            require("../assets/models/cat/Cat_bump.jpg"),
          ]}
          type="OBJ"
          highAccuracyEvents={true}
          position={[0, 0, 0]}
          height={0.1}
          width={0.1}
          length={0.1}
          scale={[0.005, 0.005, 0.005]}
          rotation={[270, 90, 0]}
          onError={(err) => console.log(err)}
        />
      </ViroARPlane>
    </ViroARScene>
  );
};

export default function Index() {
  return (
    <ViroARSceneNavigator
      autofocus={true}
      initialScene={{
        scene: HelloWorldSceneAR,
      }}
      style={{ flex: 1 }}
    />
  );
}
