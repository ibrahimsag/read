rollup -c rollup.prepare.config.js

rollup -c rollup.min.config.js
cp build/main.js public/build/ && echo "copied main.js"
cp build/books.js public/build/ && echo "copied books.js"
cp build/experiment.js public/build/ && echo "copied experiment.js"

sed '/latest.js/d' elements.html > public/elements.html && echo "copied elements.html"
cp index.html public/ && echo "copied index.html"
