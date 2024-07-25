import clsx from 'clsx';
import { TextLink } from '~/components/01-atoms/text-link/text-link';

import styles from './card.module.css';

import type { TLink } from '~/global-types';
import { CtaContent, LinkButton } from '~/components/01-atoms/cta/cta';

type TCta = { type: 'cta' | 'textLink' } & TLink;

export type TCard = {
	id: string;
	title: string;
	bodyText: string;
	cta?: TCta;
	withPadding?: boolean;
};

export const Card: React.FC<TCard> = ({
	id,
	title,
	bodyText,
	cta,
	withPadding = true,
}) => {
	console.log({ cta });

	const renderCta = (element: TCta): JSX.Element => {
		const type = element.type;
		const isTextLink = type === 'textLink';

		if (isTextLink) {
			return (
				<TextLink
					href={element.href}
					label={element.label}
					className={styles.cta}
				/>
			);
		}

		return (
			<LinkButton href={element.href} className={styles.cta}>
				<CtaContent.Text>{element.label}</CtaContent.Text>
			</LinkButton>
		);
	};

	return (
		<article id={id} className={styles.card}>
			<picture className={styles.picture}>
				<source
					srcSet="
					https://picsum.photos/200/133.webp 200w,
					https://picsum.photos/1342/895.webp 1342w,
					https://picsum.photos/2115/1410.webp 2115w,
					https://picsum.photos/2625/1750.webp 2625w,
					https://picsum.photos/2880/1920.webp 2880w
				"
					src="https://picsum.photos/300/200.webp"
					type="image/webp"
				/>

				<img
					sizes="(max-width: 2880px) 100vw, 2880px"
					srcSet="
					https://picsum.photos/200/133.jpg 200w,
					https://picsum.photos/1342/895.jpg 1342w,
					https://picsum.photos/2115/1410.jpg 2115w,
					https://picsum.photos/2625/1750.jpg 2625w,
					https://picsum.photos/2880/1920.jpg 2880w
				"
					src="https://picsum.photos/300/200.jpg"
					loading="lazy"
					decoding="async"
					alt=""
					width="300"
					height="200"
					className={styles.image}
				/>
			</picture>

			<div
				className={clsx(
					styles.content,
					withPadding ? styles.contentWithPadding : false,
				)}
			>
				<h3 className={styles.title}>{title}</h3>

				<p className={styles.bodyText}>{bodyText}</p>

				{cta ? renderCta(cta) : null}
			</div>
		</article>
	);
};
