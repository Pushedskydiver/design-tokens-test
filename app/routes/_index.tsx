import { Link } from '@remix-run/react';
import { Card } from '~/components/02-molecules/card/card';

import styles from '../styles/themes/_hillarys.css?url';
import typography from '../styles/typography/hillarys-typography.css?url';

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
		{ title: 'Hillarys brand' },
		{ name: 'description', content: 'Design tokens of Hillarys brand' },
	];
};

export default function Index(): JSX.Element {
	return (
		<main id="main">
			<h1>Welcome to Hillarys design tokens</h1>

			<Card
				id="hillarys-sale-card"
				title="Summer Savings"
				bodyText="Our in-home service has been transforming windows... lorem ipsum dolor sit amet consectetur. Vehicula interdum orci sodales."
			/>

			<Link to="/thomas-sanderson">Thomas Sanderson</Link>
		</main>
	);
}
