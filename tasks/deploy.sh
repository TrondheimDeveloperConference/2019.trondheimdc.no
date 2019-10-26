#!/bin/bash

set -e

if [[ $TRAVIS_PULL_REQUEST = "true" ]];
then
    echo "Pull request, not deploying"
    exit 0
fi;

if [[ $TRAVIS_BRANCH != "develop" && $TRAVIS_BRANCH != "master" ]];
then
    echo "Skipped deploying, because build is not triggered from develop branch"
    exit 0
fi;

echo "Starting deploy"

cp build/index.html build/program.html
cp build/index.html build/partners.html
cp build/index.html build/tickets.html
cp build/index.html build/startups.html
cp build/index.html build/conduct.html
cp build/index.html build/404.html

cp -R build $HOME/dist

cd $HOME
git config --global user.email "travic@travis-ci.org"
git config --global user.name "Travis"

if [[ $TRAVIS_BRANCH == "master" ]]; then
    git clone --quiet https://${GITHUB_TOKEN}@github.com/${GH_USER}/${GH_REPO_PROD}.git 2019.trondheimdc.no > /dev/null
else
    git clone --quiet https://${GITHUB_TOKEN}@github.com/${GH_USER}/${GH_REPO_TEST}.git 2019.trondheimdc.no > /dev/null
fi;

cd 2019.trondheimdc.no
rm -rf *
git checkout CNAME

cp -R $HOME/dist/* .

echo "Allow files with underscore https://help.github.com/articles/files-that-start-with-an-underscore-are-missing/" > .nojekyll

git add -f .
git commit -m "Travis build $TRAVIS_BUILD_NUMBER"
git push -fq origin master > /dev/null

echo "Done deploying"

if [[ $TRAVIS_BRANCH == "master" ]]; then
    curl -X POST --data-urlencode 'payload={"channel": "#website", "username": "[PROD] Deploy-bot", "text": "https://2019.trondheimdc.no ble deployet :)", "icon_emoji": ":heart:"}' ${slackuri} > /dev/null
else
    curl -X POST --data-urlencode 'payload={"channel": "#website", "username": "[TEST] Deploy-bot", "text": "http://test.trondheimdc.no ble deployet :)", "icon_emoji": ":yellow_heart:"}' ${slackuri} > /dev/null
fi;

echo "Done slack-notifying"
