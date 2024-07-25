import { CtaContent, LinkButton } from '~/components/01-atoms/cta/cta';
import styles from './hero.module.css';

import type { TLink } from '~/global-types';

export type THero = {
	id: string;
	title: string;
	src: string;
	webPSrc: string;
	srcSet: string;
	webPSrcSet: string;
	bodyText?: string;
	ctas?: TLink[];
};

export const Hero: React.FC<THero> = ({
	id,
	title,
	bodyText,
	ctas,
	src,
	webPSrc,
	srcSet,
	webPSrcSet,
}) => {
	const titleId = `${id}-hero`;

	return (
		<section
			className={styles.hero}
			aria-labelledby={titleId}
			data-e2e-id="hero"
		>
			<picture className={styles.picture}>
				<source
					sizes="(max-width: 1920px) 100vw, 1920px"
					srcSet={webPSrcSet}
					src={webPSrc}
					type="image/webp"
				/>

				<img
					sizes="(max-width: 1920px) 100vw, 1920px"
					srcSet={srcSet}
					src={src}
					loading="lazy"
					decoding="async"
					alt=""
					width="300"
					height="300"
					className={styles.image}
				/>
			</picture>

			<div className={styles.content}>
				<h1 className={styles.title}>{title}</h1>

				{bodyText ? (
					<p className={styles.bodyText}>{bodyText}</p>
				) : null}

				{ctas ? (
					<ul className={styles.list}>
						{ctas.map((cta, i) => (
							<li key={i}>
								<LinkButton href={cta.href} varaint="secondary">
									<CtaContent.Text>
										{cta.label}
									</CtaContent.Text>
								</LinkButton>
							</li>
						))}
					</ul>
				) : null}
			</div>
		</section>
	);
};
