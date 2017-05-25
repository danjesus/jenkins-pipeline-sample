FROM node:7.10
RUN mkdir -p /usr/src/app
COPY index.js /usr/src/app
COPY package.json /usr/src/app
WORKDIR /usr/src/app
RUN npm install
EXPOSE 8080
CMD ["npm", "start"]
