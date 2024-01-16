import "@/styles/globals.css";
import { Metadata } from "next";
import { fontSans } from "@/config/fonts";
import { Providers } from "./providers";
import clsx from "clsx";

export const metadata: Metadata = {
	title: "ToDo",
	description: "A simple todo app",
	authors: {
		name: "Takam Alex Christian"
	}
	
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en" suppressHydrationWarning>
			<head />
			<body
				className={clsx(
					"min-h-screen bg-background font-sans antialiased",
					fontSans.variable
				)}
			>
				<Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
					<div className="relative flex flex-col h-screen">
						
						<main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
							<div className="h-full relative">
								{children}
							</div>
							
						</main>
						
					</div>
				</Providers>
			</body>
		</html>
	);
}
