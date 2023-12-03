import type { Metadata } from "next";
import "../_styles/globals.css";

export const metadata: Metadata = {
	title: "Raph Portfolio",
	description: "Generated by create next app",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="fr">
			<body>{children}</body>
		</html>
	);
}
