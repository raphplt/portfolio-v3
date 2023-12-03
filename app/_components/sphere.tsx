import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere as NativeSphere } from "@react-three/drei";

export default function SphereSun(props: any) {
	const mesh: any = useRef();

	useFrame(() => (mesh.current.rotation.x = mesh.current.rotation.y += 0.01));

	return (
		<group>
			{/* Sphere with emissive material */}
			<NativeSphere args={[1, 32, 32]} {...props} ref={mesh} scale={[20, 20, 20]}>
				<meshStandardMaterial
					attach="material"
					color={"#ff8c00"} // Orange color
					emissive={"#ff8c00"} // Emissive color for glowing effect
					emissiveIntensity={0.1} // Adjust the intensity of the glowing effect
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
