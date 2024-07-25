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
	sizes: string;
	srcSet: string;
	webPSrcSet: string;
	src: string;
	webPSrc: string;
	cta?: TCta;
	withPadding?: boolean;
};

export const Card: React.FC<TCard> = ({
	id,
	title,
	bodyText,
	sizes,
	srcSet,
	webPSrcSet,
	src,
	webPSrc,
	cta,
	withPadding = true,
}) => {
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
					sizes={sizes}
					srcSet={webPSrcSet}
					src={webPSrc}
					type="image/webp"
				/>

				<img
					sizes={sizes}
					srcSet={srcSet}
					src={src}
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
