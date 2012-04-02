#!/bin/bash
# Batch convert MPEG files to OGG

for file in "$@"; do
  dirname=$(dirname "$file")
  filename=$(basename "$file")
  filename=${filename%.*}
  mpg123 -qw - "$file" | oggenc -Qo "$filename.ogg" -
done

