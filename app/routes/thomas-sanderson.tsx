import { Card } from '~/components/02-molecules/card/card';

import styles from '../styles/themes/_thomas-sanderson.css?url';
import typography from '../styles/typography/thomas-sanderson-typography.css?url';

import type { LinksFunction, MetaFunction } from '@remix-run/node';

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

export default function ThomasSanderson(): JSX.Element {
	return (
		<main id="main">
			<h1>Welcome to Thomas Sanderson design tokens</h1>

			<Card
				id="thomas-sanderson-card"
				title="Awning for a Welsh home renovation"
				bodyText="We were delighted when chef and Saturday Kitchen presenter Matt Tebbutt and his wife Lisa came to us looking for help with their beautiful Welsh home. Having helped them with shutter solutions for an unusual-shaped window, their attention switched to the outside, where our luxury patio awning could help create an exterior space that everyone would enjoy."
				withPadding={false}
			/>
		</main>
	);
}
