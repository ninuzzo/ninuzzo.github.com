#!/bin/bash
# Check if files in audio subdirs are well distributed.

# Default dir is the current dir.
[ -z "$1" ] && set .

for dir in "$@"; do
  if [ -d "$dir" ]; then
    cd "$dir"
    for subdir in *; do
      first="${subdir:0:1}"
      if [ -d "$subdir" ]; then
        cd "$subdir"
        for subsubdir in *; do
          second="${subsubdir:0:1}"
          if [ -d "$subsubdir" ]; then
            cd "$subsubdir"
            for file in *; do
              if [ -d "$file" ]; then
                echo "Warning: directory $file found in $dir/$subdir/$subsubdir"
              elif [ "$first$second" != "${file:0:2}" ]; then
                echo "Warning: file $file found in $dir/$subdir/$subsubdir"
              fi
            done
            cd ..
          elif [ "$first" != "${subsubdir:0:1}" ]; then
            echo "Warning: file $subsubdir found in $dir/$subdir"
          fi
        done
        cd ..
      else
        echo "Warning: file $subdir found in $dir"
      fi
    done
  else
    echo "Warning: $dir is not a directory"
  fi
done
