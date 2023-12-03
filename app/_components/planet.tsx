import { useEffect, useRef, useState } from "react";
import { useFrame } from "@react-three/fiber";
import { Sphere as NativeSphere } from "@react-three/drei";
import * as THREE from "three";

export default function SpherePlanet(props: any) {
	const mesh: any = useRef();
	const [environmentTexture, setEnvironmentTexture] = useState(null);

	useFrame(() => {
		mesh.current.rotation.x += 0.002; // Ajustez la valeur ici pour ralentir ou accélérer la rotation
		mesh.current.rotation.y += 0.002; // Ajustez la valeur ici pour ralentir ou accélérer la rotation
	});

	// Fonction utilitaire pour charger la texture
	const loadTexture = async (texturePath: any) => {
		return new Promise((resolve, reject) => {
			const textureLoader = new THREE.TextureLoader();
			textureLoader.load(
				texturePath,
				(texture) => resolve(texture),
				undefined,
				(error) => reject(error)
			);
		});
	};

	useEffect(() => {
		const loadEnvironmentTexture = async () => {
			try {
				const world: any = await loadTexture("/assets/carte-monde-satellite.jpg");
				setEnvironmentTexture(world);
				console.log("Texture loaded successfully");
			} catch (error) {
				console.error("Error loading texture", error);
			}
		};

		loadEnvironmentTexture();
	}, []);

	return (
		<group>
			{/* Sphere with emissive material */}
			{environmentTexture && (
				<NativeSphere args={[1, 32, 32]} {...props} ref={mesh} scale={[6, 6, 6]}>
					<meshBasicMaterial map={environmentTexture} side={THREE.BackSide} />
				</NativeSphere>
			)}

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
