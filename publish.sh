#!/usr/bin/env bash
GIT_REPO=$(git remote get-url --push origin)

## Detect pack file name
PACK_NAME=$(node -p "require('./package.json').name.replace('@', '').replace('/', '-')")
PACK_VERSION=$(node -p "require('./package.json').version")
PACK_FILE=$PACK_NAME-$PACK_VERSION.tgz

## Pack resoucre
PUBLISH_FOLDER=publish
rm -rf $PUBLISH_FOLDER
mkdir -p $PUBLISH_FOLDER
npm pack --pack-destination $PUBLISH_FOLDER

## Unpack resoucre
cd $PUBLISH_FOLDER
tar -xf $PACK_FILE
cd package
git init
git config --local user.name sh-38
git config --local user.email sunnyhelen0308@gmail.com
git add .
git commit -m "publish v${PACK_VERSION}"
git branch -M main
git remote add origin $GIT_REPO
git push -u -f origin main

## Clear publish folder
cd ../..
rm -rf $PUBLISH_FOLDER
