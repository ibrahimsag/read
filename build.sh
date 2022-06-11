rollup -c rollup.min.config.js

cp build/experiment.js public/build/ && echo "copied experiment.js"
cp home.html public/index.html && echo "copied index.html"
cp -r img public/ && echo "copied images"
