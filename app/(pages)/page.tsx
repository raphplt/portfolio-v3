"use client";
import { useRef, useState, useEffect } from "react";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Box from "@/app/_components/box";
import * as THREE from "three";

export default function BoxesPage() {
	const controlsRef = useRef();
	const [zoomValue, setZoomValue] = useState(0);
	const [environmentTexture, setEnvironmentTexture] = useState(null);

	const handleZoomChange = () => {
		const newZoomValue = controlsRef.current?.getDistance();
		setZoomValue(newZoomValue);
	};

	useEffect(() => {
		const textureLoader = new THREE.TextureLoader();
		textureLoader.load("/assets/space_bg.png", (spaceBgTexture) => {
			console.log("Texture loaded successfully");
			setEnvironmentTexture(spaceBgTexture);
		});
	}, []);

	return (
		<div className="h-[100vh] v-[100vw] text-white overflow-hidden">
			<p>Zoom value: {zoomValue}</p>
			{zoomValue < 20 ? <p>OUAIS CEST GREG</p> : <p>CEST PAS GREG</p>}
			<Canvas camera={{ position: [0, 0, 35] }}>
				<ambientLight intensity={2} />

				{/* Utilisez la primitive sphere directement */}
				<mesh>
					<sphere args={[50, 60, 60]} />
					{environmentTexture && (
						<meshStandardMaterial
							map={environmentTexture}
							metalness={1} // Reflective material
							roughness={0} // Smooth surface
							side={THREE.BackSide} // Affiche la texture à l'intérieur de la sphère
						/>
					)}
				</mesh>

				<pointLight position={[40, 40, 40]} />
				<Box position={[0, 0, 0]} />
				<OrbitControls ref={controlsRef} onChange={handleZoomChange} />
			</Canvas>
		</div>
	);
}
