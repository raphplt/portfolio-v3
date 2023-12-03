import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere as NativeSphere } from "@react-three/drei";
import * as THREE from "three";

export default function SphereSky(props: any) {
	const mesh: any = useRef();

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<group>
			{/* Sphere with emissive material */}
			<NativeSphere {...props} ref={mesh} scale={[12, 12, 12]}>
				<meshStandardMaterial
					attach="material"
					color={"#000"} // Orange color
				/>
			</NativeSphere>

			{/* Ambient light */}
			<ambientLight intensity={0.5} />

			{/* Directional light for shadows */}
			<directionalLight position={[10, 10, 5]} intensity={1} castShadow />

			{/* Point lights */}
			<pointLight position={[-5, 5, 5]} intensity={1} />
			<pointLight position={[5, -5, -5]} intensity={1} />
		</group>
	);
}
