rollup -c rollup.prepare.config.js

rollup -c rollup.min.config.js
cp build/main.js public/build/ && echo "copied main.js"
cp build/books.js public/build/ && echo "copied books.js"
cp build/project.js public/build/ && echo "copied project.js"

sed '/latest.js/d' euclid.html > public/euclid.html && echo "copied euclid.html"
cp index.html public/ && echo "copied index.html"
