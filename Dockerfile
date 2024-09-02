FROM node:20-alpine
WORKDIR /rick-and-morty
COPY package.json .
COPY src src
COPY config config
COPY .env.production .
COPY tailwind.config.js .
COPY postcss.config.js .
COPY public public
COPY gatsby-config.js .
COPY gatsby-node.js .
COPY gatsby-browser.js .
RUN npm install && \
	npm run build
CMD ["npm", "run", "serve", "--", "-H", "0.0.0.0"]
