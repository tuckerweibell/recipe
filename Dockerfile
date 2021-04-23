FROM node:12.16.3

USER root
RUN mkdir /home/node/app && chown node:node /home/node/app

USER node
WORKDIR /home/node/app

COPY --chown=node:node . /home/node/app

RUN npm run build:dependencies --silent
RUN npm install --silent --production=false --frozen-lockfile
RUN NODE_ENV=production npm run build