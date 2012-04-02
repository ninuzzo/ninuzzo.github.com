#!/bin/bash
# Batch convert SVG files to PNG

for file in "$@"; do
  dirname=$(dirname "$file")
  filename=$(basename "$file")
  filename=${filename%.*}
  rsvg-convert -h 14 "$file" >"$filename.png"
done
