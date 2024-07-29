import { CtaContent, LinkButton } from '~/components/01-atoms/cta/cta';
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
	const heroImageWebPSrcSets = `
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-200.webp 200w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-975.webp 975w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1294.webp 1294w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1627.webp 1627w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1920.webp 1920w
	`;

	const heroImageSrcSets = `
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-200.png 200w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-975.png 975w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1294.png 1294w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1627.png 1627w,
		/design-tokens-test/images/thomas-sanderson/awnings/awnings-1920.png 1920w
	`;

	return (
		<main id="main">
			<Hero
				id="thomas-sanderson-hero"
				title="Beautifully bespoke solutions"
				bodyText="Since Thomas Sanderson began over 30 years ago we've been passionate about designing, crafting and installing superior custom-made shutters, blinds, awnings and garage doors. Precision, expertise and service are at the heart of what we do, from in-home consultation to expert installation. Our extraordinary solutions help you master the light and specialist products help you reduce heat loss at your windows."
				webPSrcSet={heroImageWebPSrcSets}
				srcSet={heroImageSrcSets}
				src="/design-tokens-test/images/thomas-sanderson/awnings/awnings-200.png"
				webPSrc="/design-tokens-test/images/thomas-sanderson/awnings/awnings-200.webp"
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
						sizes: '(max-width: 1200px) 100vw, 1200px',
						webPSrcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-200.webp 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-816.webp 816w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-1200.webp 1200w,
						`,
						srcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-200.png 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-816.png 816w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-1200.png 1200w,
						`,
						webPSrc:
							'/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-200.webp',
						src: '/design-tokens-test/images/thomas-sanderson/blinds/blinds-1-200.png',
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
						sizes: '(max-width: 1200px) 100vw, 1200px',
						webPSrcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-200.webp 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-815.webp 815w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-1200.webp 1200w,
						`,
						srcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-200.png 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-815.png 815w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-1200.png 1200w,
						`,
						webPSrc:
							'/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-200.webp',
						src: '/design-tokens-test/images/thomas-sanderson/blinds/blinds-2-200.png',
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
						sizes: '(max-width: 1200px) 100vw, 1200px',
						webPSrcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-200.webp 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-816.webp 816w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-1200.webp 1200w,
						`,
						srcSet: `
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-200.png 200w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-816.png 816w,
							/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-1200.png 1200w,
						`,
						webPSrc:
							'/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-200.webp',
						src: '/design-tokens-test/images/thomas-sanderson/blinds/blinds-4-200.png',
					},
				]}
			/>

			<LinkButton href="/" className="brand-link">
				<CtaContent.Text>Hillarys brand</CtaContent.Text>
			</LinkButton>
		</main>
	);
}
