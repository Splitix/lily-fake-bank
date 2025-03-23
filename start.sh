#!/bin/bash

screen -d -m bash -c "cd Frontend/ && npm run dev"
screen -d -m bash -c "cd Backend/ && npm start"