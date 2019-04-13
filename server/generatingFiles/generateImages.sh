#!/bin/bash

for file in `ls ../product | awk '{print $1}'`
  do wget -i ../product/$file/$file.txt -P ../product/$file/images
done