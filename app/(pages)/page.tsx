"use client";
// Importez useRef, useState, useEffect et Canvas
import { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Sphere as NativeSphere } from "@react-three/drei";
import SphereSun from "@/app/_components/sphere";
import * as THREE from "three";
import SpherePlanet from "../_components/planet";

// Fonction utilitaire pour charger la texture
const loadTexture = async (texturePath:any) => {
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

export default function BoxesPage() {
	const controlsRef: any = useRef();
	const [zoomValue, setZoomValue] = useState(0);
	const [environmentTexture, setEnvironmentTexture] = useState(null);

	const handleZoomChange = () => {
		const newZoomValue = controlsRef.current?.getDistance();
		setZoomValue(newZoomValue);
	};

	useEffect(() => {
		const loadEnvironmentTexture = async () => {
			try {
				const spaceBgTexture :any = await loadTexture("/assets/space_bg.png");
				setEnvironmentTexture(spaceBgTexture);
				console.log("Texture loaded successfully");
			} catch (error) {
				console.error("Error loading texture", error);
			}
		};

		loadEnvironmentTexture();
	}, []);

	return (
		<div className="h-[100vh] v-[100vw] text-white overflow-hidden bg-blue-200">
			<p>Zoom value: {zoomValue}</p>

			<Canvas camera={{ position: [0, 50, 120] }}>
				<ambientLight intensity={1} />
				<directionalLight intensity={0.5} position={[1, 0, 0]} />

				{/* Soleil */}
				<SphereSun position={[0, 0, 0]} />

				<SpherePlanet position={[80, 0, 0]} />

				<SpherePlanet position={[0, 0, 50]} />

				<SpherePlanet position={[-60, 0, 0]} />

				<SpherePlanet position={[-10, 0, -80]} />

				<SpherePlanet position={[40, 0, -60]} />


				{/* Arrière-plan étoilé */}
				{environmentTexture && (
					<NativeSphere args={[150, 160, 160]}>
						<meshBasicMaterial map={environmentTexture} side={THREE.BackSide} />
					</NativeSphere>
				)}
				

				<pointLight position={[40, 40, 40]} />
				<OrbitControls ref={controlsRef} onChange={handleZoomChange} />
			</Canvas>
		</div>
	);
}