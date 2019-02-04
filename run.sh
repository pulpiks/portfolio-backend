#!/bin/bash

echo 1
sleep 10
./node_modules/.bin/sequelize db:migrate
npm run run-server
