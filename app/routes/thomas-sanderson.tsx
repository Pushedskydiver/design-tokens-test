import type { LinksFunction, MetaFunction } from '@remix-run/node';

import styles from '../styles/themes/_thomas-sanderson.css?url';
import typography from '../styles/typography/thomas-sanderson-typography.css?url';

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
		{ title: 'Thomas Sanderson brand' },
		{
			name: 'description',
			content: 'Design tokens of Thomas Sanderson brand',
		},
	];
};

export default function ThomasSanderson() {
	return (
		<main id="main">
			<h1>Welcome to Thomas Sanderson design tokens</h1>
		</main>
	);
}
