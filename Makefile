build: src/*.ts pnpm-lock.yaml tsconfig.json tsconfig.build.json
	# type-checking and declaration file generation
	pnpm tsc -p tsconfig.build.json

	# doc generation and API checking
	pnpm api-extractor run \
	--local \
	--verbose \
	--typescript-compiler-folder ./node_modules/.bin/tsc

	# bundling and minification
	pnpm esbuild src/index.ts \
	--bundle --minify --sourcemap \
	--target=chrome119,firefox115,safari17,edge119 \
	--packages=external \
	--outfile=dist/index.js --allow-overwrite