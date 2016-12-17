#! /bin/bash

root_folder=`pwd`
mydate=`date`

cd ${root_folder}/.. && \
git add dnstime.log && \
git add mdllogger.log && \
git commit -m "${mydate}: Cron upload" && \
git push origin
