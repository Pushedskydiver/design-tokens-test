import { Link } from '@remix-run/react';
import { Hero } from '~/components/02-molecules/hero/hero';
import { Cards } from '~/components/03-organisms/cards/cards';

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
			<Hero
				id="hillarys-hero"
				title="Extra savings are here"
				bodyText="We've up to 40% off selected styles PLUS there's 10% off everything for a limited time. And remember, we always take care of the measuring and fitting so you can be sure of a job well done."
			/>

			<Cards
				id="hillarys-cards"
				cards={[
					{
						id: 'hillarys-sale-card-1',
						title: 'Summer Savings',
						bodyText:
							'Our in-home service has been transforming windows... lorem ipsum dolor sit amet consectetur. Vehicula interdum orci sodales.',
						cta: {
							type: 'cta',
							href: '#',
							label: 'More about electric blinds',
						},
					},
					{
						id: 'hillarys-sale-card-2',
						title: 'Summer Savings',
						bodyText:
							'Our in-home service has been transforming windows... lorem ipsum dolor sit amet consectetur. Vehicula interdum orci sodales.',
						cta: {
							type: 'cta',
							href: '#',
							label: 'More about electric blinds',
						},
					},
					{
						id: 'hillarys-sale-card-3',
						title: 'Summer Savings',
						bodyText:
							'Our in-home service has been transforming windows... lorem ipsum dolor sit amet consectetur. Vehicula interdum orci sodales.',
						cta: {
							type: 'cta',
							href: '#',
							label: 'More about electric blinds',
						},
					},
				]}
			/>

			<Link to="/thomas-sanderson">Thomas Sanderson brand</Link>
		</main>
	);
}
