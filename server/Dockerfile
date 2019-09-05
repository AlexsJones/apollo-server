FROM node:10-alpine
EXPOSE 4000
COPY package.json package-lock.json ../
RUN npm install && npm cache clean --force
COPY . ./src/
USER 1000
WORKDIR ./src/
CMD ["node", "index.js"]
