#!/usr/bin/env bash

SVG_FLAGS=("flags/1x1"/*.svg)
PNG_FLAGS=("flags/1x1"/*.png)

for svg in "${SVG_FLAGS[@]}"; do
  png="${svg:0:${#svg} - 3}"png

  found=false
  for file in "${PNG_FLAGS[@]}"; do
    if [[ $file == $png ]]; then
      found=true
      break
    fi
  done
  if ! $found; then
    echo "not found $png"
    npm run export:png $svg "$png"
  fi
done
