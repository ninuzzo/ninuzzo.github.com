#!/bin/bash
# Batch convert MPEG files to OGG

for file in "$@"; do
  dirname=$(dirname "$file")
  filename=$(basename "$file")
  filename=${filename%.*}
  lame --quiet --decode "$file" - | oggenc -Qo "$filename.ogg" -
done

