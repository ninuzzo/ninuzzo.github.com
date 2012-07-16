#!/bin/bash
# Organizes audio files in subdirs

for file in "$@"; do
  filename=$(basename "$file")
  destdir="$(dirname "$file")/${filename:0:1}/${filename:1:1}"
  mkdir -p "$destdir"
  mv -i "$file" "$destdir"
done
