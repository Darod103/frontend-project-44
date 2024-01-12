install:
	npm ci

brain-games:
	node /home/darod/frontend-project-44/bin/brain-games.js
brain-evev:
	node /home/darod/frontend-project-44/bin/brain-even.js
brain-gcd:
	node /home/darod/frontend-project-44/bin/brain-gcd.js
brain-prime:
	node /home/darod/frontend-project-44/bin/brain-prime.js
brain-calc:
	node /home/darod/frontend-project-44/bin/brain-calc.js
brain-progression:
	node /home/darod/frontend-project-44/bin/brain-progression.js
publish:
	npm publish --dry-run

lint:
	npx eslint .