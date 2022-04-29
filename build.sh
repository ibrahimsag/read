rollup -c rollup.prepare.config.js

rollup -c rollup.min.config.js
cp build/elements.js public/build/ && echo "copied elements.js"
cp build/elements-content.js public/build/ && echo "copied elements-content.js"
cp build/experiment.js public/build/ && echo "copied experiment.js"

cp src/elements/index.html public/elements.html && echo "copied elements.html"
cp index.html public/ && echo "copied index.html"
cp -r img public/ && echo "copied images"
