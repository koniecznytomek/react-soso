#!/usr/bin/env bash

git fetch --all
git checkout --force "origin/master"
yarn install
cd /backend
yarn install
