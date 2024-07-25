import clsx from 'clsx';
import { Link } from '@remix-run/react';

import styles from './text-link.module.css';

import type { TLink } from '~/global-types';

export type TTextLink = {
	className?: string;
	isExternal?: boolean;
} & TLink;

export const TextLink: React.FC<TTextLink> = ({
	href,
	label,
	className,
	isExternal = false,
}) => {
	if (isExternal) {
		return (
			<a
				className={clsx(styles.link, className)}
				href={href}
				rel="external noopener"
				data-e2e-id="text-link"
			>
				{label}
			</a>
		);
	}

	return (
		<Link
			className={clsx(styles.link, className)}
			to={href}
			data-e2e-id="text-link"
		>
			{label}
		</Link>
	);
};
