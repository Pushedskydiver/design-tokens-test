import {
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from '@remix-run/react';

import styles from './styles/globals.css?url';

import type { LinksFunction, MetaFunction } from '@remix-run/node';

export const links: LinksFunction = () => [
	{
		rel: 'preload',
		href: styles,
		as: 'style',
	},
	{ rel: 'stylesheet', href: styles },
];

export const meta: MetaFunction = () => [
	{
		title: 'Hillarys & Thomas Sanderson design tokens demo',
	},
	{
		name: 'description',
		content:
			'Testing design tokens between Hillarys and Thomas Sanderson brands',
	},
];

export function Layout({
	children,
}: {
	children: React.ReactNode;
}): JSX.Element {
	return (
		<html lang="en-GB">
			<head>
				<meta charSet="utf-8" />
				<meta
					name="viewport"
					content="width=device-width,minimum-scale=1,user-scalable=yes,initial-scale=1,viewport-fit=cover"
				/>
				<link
					rel="shortcut icon"
					type="image/x-icon"
					href="favicon.ico"
				/>

				<Meta />
				<Links />
			</head>

			<body>
				{children}

				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <Outlet />;
}

export function HydrateFallback() {
	return <p>Loading...</p>;
}
