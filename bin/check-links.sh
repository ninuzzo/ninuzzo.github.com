#!/bin/bash
# Check broken links using wget as a spider.
# Add --wait 1 for niceness, -o wget.log to log to a file.
wget --spider  -e robots=off -nd -r -p http://localhost:4000
