#!/bin/bash
# Check broken links using wget as a spider.
# Add --wait 1 for niceness, -o wget.log to log to a file.
cd /tmp
# Or localhost:4000 if using Jekyll integrated server.
wget --spider  -e robots=off -nd -r -p http://localhost/ninuzzo
