all: clean test/built.js Readme.md

test:
	@node_modules/.bin/mocha test/index.test.js

test/built.js: src/* test/*
	@node_modules/.bin/sourcegraph.js test/browser.js \
		--plugins mocha,nodeish,javascript \
		| node_modules/.bin/bigfile \
		 	--leave-paths \
		 	--export null \
		 	--plugins nodeish > test/built.js

clean:
	@rm -rf test/built.js

Readme.md: src/index.js docs/head.md docs/tail.md
	@cat docs/head.md > Readme.md
	@dox --api < src/index.js >> Readme.md
	@cat docs/tail.md >> Readme.md

.PHONY: all test clean
