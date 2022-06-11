rollup -c rollup.prepare.config.js

rollup -c rollup.min.elements.config.js
cp build/elements.js elements-public/build/ && echo "copied elements.js"
cp build/elements-content.js elements-public/build/ && echo "copied elements-content.js"

cp src/elements/index.html elements-public/index.html && echo "copied elements/index.html"
cp -r public/fonts elements-public/
