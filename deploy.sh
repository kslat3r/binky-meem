#!/bin/sh

git add .
git commit -m "Deploy"
git push origin master

ssh -t root@edkelly.co.uk 'cd /var/www/binkymeem; git pull origin master; exit'

