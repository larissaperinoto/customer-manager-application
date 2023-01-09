FROM node:16.14-alpine
WORKDIR /backend
COPY . /backend/
EXPOSE 3001
RUN npm install
ENTRYPOINT [ "npm", "run", "dev"]