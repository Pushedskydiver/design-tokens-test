import { Link } from '@remix-run/react';
import { Hero } from '~/components/02-molecules/hero/hero';
import { Cards } from '~/components/03-organisms/cards/cards';

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
			<Hero
				id="thomas-sanderson-hero"
				title="Beautifully bespoke solutions"
				bodyText="We've up to 40% off selected styles PLUS there's 10% off everything for a limited time. And remember, we always take care of the measuring and fitting so you can be sure of a job well done."
			/>

			<Cards
				id="thomas-sanderson-cards"
				cards={[
					{
						id: 'thomas-sanderson-card-1',
						title: 'Awning for a Welsh home renovation',
						bodyText:
							'We were delighted when chef and Saturday Kitchen presenter Matt Tebbutt and his wife Lisa came to us looking for help with their beautiful Welsh home. Having helped them with shutter solutions for an unusual-shaped window, their attention switched to the outside, where our luxury patio awning could help create an exterior space that everyone would enjoy.',
						cta: {
							type: 'textLink',
							href: '#',
							label: "Matt Tebbutt's outdoor awning",
						},
					},
					{
						id: 'thomas-sanderson-card-2',
						title: 'Awning for a Welsh home renovation',
						bodyText:
							'We were delighted when chef and Saturday Kitchen presenter Matt Tebbutt and his wife Lisa came to us looking for help with their beautiful Welsh home. Having helped them with shutter solutions for an unusual-shaped window, their attention switched to the outside, where our luxury patio awning could help create an exterior space that everyone would enjoy.',
						cta: {
							type: 'textLink',
							href: '#',
							label: "Matt Tebbutt's outdoor awning",
						},
					},
					{
						id: 'thomas-sanderson-card-3',
						title: 'Awning for a Welsh home renovation',
						bodyText:
							'We were delighted when chef and Saturday Kitchen presenter Matt Tebbutt and his wife Lisa came to us looking for help with their beautiful Welsh home. Having helped them with shutter solutions for an unusual-shaped window, their attention switched to the outside, where our luxury patio awning could help create an exterior space that everyone would enjoy.',
						cta: {
							type: 'textLink',
							href: '#',
							label: "Matt Tebbutt's outdoor awning",
						},
					},
				]}
			/>

			<Link to="/">Hillarys brand</Link>
		</main>
	);
}
