"use client";

import React, { useRef, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

function Sphere({ progress, position }: any) {
	return (
		<mesh rotation-y={progress} rotation-x={progress} position={position}>
			<sphereGeometry args={[1.25, 32, 32]} />
			<meshStandardMaterial color="orange" roughness={0.5} metalness={0.5} />
		</mesh>
	);
}

export default function Index() {
	const container = useRef(null);
	const orbitControlsRef = useRef(null);

	return (
		<div ref={container}>
			<div className="h-[100vh]">
				<p className="text-white">Some content outside Canvas : !</p>
				<Canvas>
					<OrbitControls
						ref={orbitControlsRef}
						enableZoom={true}
						enablePan={false}
						zoomSpeed={1}
					/>
					<ambientLight intensity={0.5} />
					<directionalLight position={[2, 1, 1]} intensity={1} />
					{/* Composant Sphere avec la sphère centrée */}
					<Sphere progress={0} position={[0, 0, 0]} />
				</Canvas>
			</div>
		</div>
	);
}
