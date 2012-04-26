#!/bin/bash
# Normalize MPEG files volume

for file in "$@"; do
  mp3gain -r -k "$file" >/dev/null
done
