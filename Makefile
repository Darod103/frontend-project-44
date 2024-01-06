install:
	npm ci

brain-games:
	node /home/darod/frontend-project-44/bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .