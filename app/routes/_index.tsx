import type { LinksFunction, MetaFunction } from '@remix-run/node';

import styles from '../styles/themes/_hillarys.css?url';
import typography from '../styles/typography/hillarys-typography.css?url';

export const links: LinksFunction = () => [
	{
		rel: 'preload',
		href: typography,
		as: 'style',
	},
	{
		rel: 'preload',
		href: styles,
		as: 'style',
	},
	{ rel: 'stylesheet', href: typography },
	{ rel: 'stylesheet', href: styles },
];

export const meta: MetaFunction = () => {
	return [
		{ title: 'Hillarys brand' },
		{ name: 'description', content: 'Design tokens of Hillarys brand' },
	];
};

export default function Index() {
	return (
		<main id="main">
			<h1>Welcome to Hillarys design tokens</h1>
		</main>
	);
}
