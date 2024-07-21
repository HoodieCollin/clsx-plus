build: src/*.ts pnpm-lock.yaml tsconfig.json
	# type-checking and declaration file generation
	pnpm tsc

	# bundling and minification
	pnpm esbuild src/index.ts \
	--bundle --minify --sourcemap \
	--target=chrome119,firefox115,safari17,edge119 \
	--packages=external \
	--outfile=index.js --allow-overwrite