#!/bin/bash

screen -d -m bash -c "cd Backend/ && npm start"
screen -d -m bash -c "cd Frontend/ && npm run dev"
sleep  15
screen -d -m bash -c "DISPLAY=:0.0 firefox -kiosk -url http://localhost:3000"