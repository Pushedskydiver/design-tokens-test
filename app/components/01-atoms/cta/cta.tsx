import { Link } from '@remix-run/react';
import clsx from 'clsx';

import styles from './cta.module.css';

export type TButton = React.ButtonHTMLAttributes<HTMLButtonElement> & CtaShared;

export type TLinkButton = {
	href: string;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, 'href'> &
	CtaShared;

type CtaShared = React.PropsWithChildren<{
	varaint?: 'primary' | 'secondary';
	className?: string;
}>;

export const Button: React.FC<TButton> = ({
	children,
	type = 'button',
	varaint = 'primary',
	className,
	onClick,
	...buttonAttributes
}) => {
	const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
		if (onClick) {
			onClick(e);
		}
	};

	return (
		<button
			type={type}
			className={clsx(styles.cta, styles[varaint], className)}
			onClick={handleClick}
			{...buttonAttributes}
		>
			{children}
		</button>
	);
};

export const LinkButton: React.FC<TLinkButton> = ({
	href,
	varaint = 'primary',
	className,
	onClick,
	children,
	...linkAttributes
}) => {
	const isExternal = href?.includes('http');

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>): void => {
		if (onClick) {
			onClick(e);
		}
	};

	if (isExternal) {
		return (
			<a
				href={href}
				className={clsx(styles.cta, styles[varaint], className)}
				onClick={handleClick}
				{...linkAttributes}
			>
				{children}
			</a>
		);
	}

	return (
		<Link
			to={href}
			className={clsx(styles.cta, styles[varaint], className)}
			onClick={handleClick}
			{...linkAttributes}
		>
			{children}
		</Link>
	);
};

type TCtaText = {
	children: React.ReactNode;
	className?: string;
};

const CtaText: React.FC<TCtaText> = ({ children, className }) => (
	<span role="presentation" className={clsx(styles.content, className)}>
		{children}
	</span>
);

export const CtaContent = {
	Text: CtaText,
};
