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
	const heroImageWebPSrcSets = `
		/design-tokens-test/images/hillarys/bespoke/bespoke-200.webp 200w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-850.webp 850w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-990.webp 990w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-1241.webp 1241w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-1440.webp 1440w
	`;

	const heroImageSrcSets = `
		/design-tokens-test/images/hillarys/bespoke/bespoke-200.png 200w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-850.png 850w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-990.png 990w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-1241.png 1241w,
		/design-tokens-test/images/hillarys/bespoke/bespoke-1440.png 1440w
	`;

	return (
		<main id="main">
			<Hero
				id="hillarys-hero"
				title="Extra savings are here"
				bodyText="We've up to 40% off selected styles PLUS there's 10% off everything for a limited time. And remember, we always take care of the measuring and fitting so you can be sure of a job well done."
				webPSrcSet={heroImageWebPSrcSets}
				srcSet={heroImageSrcSets}
				src="/design-tokens-test/images/hillarys/bespoke/bespoke-200.png"
				webPSrc="/design-tokens-test/images/hillarys/bespoke/bespoke-200.webp"
				ctas={[
					{
						href: '#',
						label: 'Blinds',
					},
					{
						href: '#',
						label: 'Curtains',
					},
					{
						href: '#',
						label: 'Shutters',
					},
				]}
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
						sizes: '(max-width: 432px) 100vw, 432px',
						webPSrcSet: `
							/design-tokens-test/images/hillarys/blinds/blinds-3-200.webp 200w,
							/design-tokens-test/images/hillarys/blinds/blinds-3-333.webp 333w,
							/design-tokens-test/images/hillarys/blinds/blinds-3-432.webp 432w,
						`,
						srcSet: `
							/design-tokens-test/images/hillarys/blinds/blinds-3-200.png 200w,
							/design-tokens-test/images/hillarys/blinds/blinds-3-333.png 333w,
							/design-tokens-test/images/hillarys/blinds/blinds-3-432.png 432w,
						`,
						webPSrc:
							'/design-tokens-test/images/hillarys/blinds/blinds-3-200.webp',
						src: '/design-tokens-test/images/hillarys/blinds/blinds-3-200.png',
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
						sizes: '(max-width: 1200px) 100vw, 1200px',
						webPSrcSet: `
							/design-tokens-test/images/hillarys/blinds/blinds-5-200.webp 200w,
							/design-tokens-test/images/hillarys/blinds/blinds-5-817.webp 817w,
							/design-tokens-test/images/hillarys/blinds/blinds-5-1200.webp 1200w,
						`,
						srcSet: `
							/design-tokens-test/images/hillarys/blinds/blinds-5-200.png 200w,
							/design-tokens-test/images/hillarys/blinds/blinds-5-817.png 817w,
							/design-tokens-test/images/hillarys/blinds/blinds-5-1200.png 1200w,
						`,
						webPSrc:
							'/design-tokens-test/images/hillarys/blinds/blinds-5-200.webp',
						src: '/design-tokens-test/images/hillarys/blinds/blinds-5-200.png',
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
						sizes: '(max-width: 1200px) 100vw, 1200px',
						webPSrcSet: `
							/design-tokens-test/images/hillarys/curtains/curtains-1-200.webp 200w,
							/design-tokens-test/images/hillarys/curtains/curtains-1-816.webp 816w,
							/design-tokens-test/images/hillarys/curtains/curtains-1-1200.webp 1200w,
						`,
						srcSet: `
							/design-tokens-test/images/hillarys/curtains/curtains-1-200.png 200w,
							/design-tokens-test/images/hillarys/curtains/curtains-1-816.png 816w,
							/design-tokens-test/images/hillarys/curtains/curtains-1-1200.png 1200w,
						`,
						webPSrc:
							'/design-tokens-test/images/hillarys/curtains/curtains-1-200.webp',
						src: '/design-tokens-test/images/hillarys/curtains/curtains-1-200.png',
					},
				]}
			/>

			<Link to="/thomas-sanderson">Thomas Sanderson brand</Link>
		</main>
	);
}
