rollup -c rollup.prepare.config.js

rollup -c rollup.min.config.js
cp build/main.js public/build/ && echo "copied main.js"
cp build/books.js public/build/ && echo "copied books.js"
cp build/experiment.js public/build/ && echo "copied experiment.js"

cp elements.html public/ && echo "copied elements.html"
cp index.html public/ && echo "copied index.html"
cp -r img public/ && echo "copied images"
