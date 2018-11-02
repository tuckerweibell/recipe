FROM node:8.9.4

USER root
RUN mkdir /home/node/app && chown node:node /home/node/app

USER node
WORKDIR /home/node/app

COPY --chown=node:node package.json package-lock.json /home/node/app/
RUN npm install --silent --production=false --frozen-lockfile

COPY --chown=node:node . /home/node/app
RUN NODE_ENV=production npm run build