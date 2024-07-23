import { expandTypesMap, register } from '@tokens-studio/sd-transforms';
import StyleDictionary from 'style-dictionary';
import { promises } from 'fs';

register(StyleDictionary);

async function buildTokens() {
	const themesFile = './design-tokens/$themes.json';
	const $themes = JSON.parse(await promises.readFile(themesFile, 'utf-8'));

	const configs = $themes.map((theme) => {
		const sets = theme.selectedTokenSets;
		const source = Object.entries(sets)
			.filter(([, val]) => val !== 'disabled')
			.map(([tokenset]) => `./design-tokens/${tokenset}.json`);

		return {
			log: { verbosity: 'verbose' },
			source: source,
			preprocessors: ['tokens-studio'],
			expand: {
				typesMap: expandTypesMap,
			},
			platforms: {
				css: {
					// transformGroup: 'tokens-studio',
					transforms: [
						'attribute/cti',
						'name/kebab',
						'border/css/shorthand',
						'fontFamily/css',
						'typography/css/shorthand',
						'ts/color/css/hexrgba',
						'ts/color/modifiers',
						'ts/descriptionToComment',
						'ts/opacity',
						'ts/resolveMath',
						'ts/size/css/letterspacing',
						'ts/shadow/innerShadow',
						'ts/typography/fontWeight',
					],
					buildPath: 'src/styles/themes/',
					files: [
						{
							filter: (token) => {
								const isSource =
									token.filePath.match(/alias|base/);

								return !isSource;
							},
							destination: `_${theme.name}.css`,
							format: 'css/variables',
						},
					],
				},
			},
		};
	});

	async function cleanAndBuild(cfg) {
		const sd = new StyleDictionary(cfg);
		await sd.cleanAllPlatforms(); // optionally, cleanup files first..
		await sd.buildAllPlatforms();
	}

	await Promise.all(configs.map(cleanAndBuild));
}

buildTokens();
