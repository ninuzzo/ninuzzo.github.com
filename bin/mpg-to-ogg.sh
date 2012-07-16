#!/bin/bash
# Batch convert MPEG files to OGG

for infile in "$@"; do
  dirname=$(dirname "$infile")
  filename=$(basename "$infile")
  filename=${filename%.*}
  outfile="$(dirname "$infile")/$filename.ogg"
  # Generate unexistent ogg files and also
  # re-generate ogg file if mp3 changes.
  [ "$infile" -nt "$outfile" ] && {
    lame --quiet --decode "$infile" - | oggenc -Qo "$outfile" -
  }  
done
