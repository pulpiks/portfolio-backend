FROM node:10.15

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
# A wildcard is used to ensure both package.json AND package-lock.json are copied
# where available (npm@5+)
COPY package*.json ./

RUN npm i
# If you are building your code for production
# RUN npm install --only=production

# Bundle app source
COPY . .

ENV LC_ALL="C.utf-8" LANGUAGE="C.utf-8" LANG="C.utf-8" DEBUG="sequelize" NODE_ENV="docker" SERVE_STATIC="1"

EXPOSE 8080
CMD ["./run.sh"]