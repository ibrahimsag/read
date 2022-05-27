function make(cs, fext)
{
  let contents = `
<h4>Book 1 - Fundamentals of Plane Geometry Involving Straight-Lines</h4>
<p>
Start with <a pref="1.d">Definitions</a> or <a pref="1.1">First proposition</a>.
<br>
Interesting proofs:
<a pref="1.43">Complements in parallelograms</a>,
<a pref="1.47">Pythagorean theorem</a>
</p>
<h4>Book 2 - Fundamentals of Geometric Algebra</h4>
<p>
Start with <a pref="2.d">Definitions</a> or <a pref="2.1">First proposition</a>.
<br>
Interesting construction:
<a pref="2.11">Golden section</a>
</p>
<h4>Book 3 - Fundamentals of Plane Geometry Involving Circles</h4>
<p>
Start with <a pref="3.d">Definitions</a> or <a pref="3.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="3.20">Angles at center and circumference</a>,
<a pref="3.36">Relations of lines from outside a circle</a>
</p>
<h4>Book 4 - Construction of Rectilinear Figures In and Around Circles</h4>
<p>
Start with <a pref="4.d">Definitions</a> or <a pref="4.1">First proposition</a>.
<br>
Interesting construction: <a pref="4.11">Regular Pentagon</a>
</p>
<h4>Book 5 - Proportion</h4>
<p>
Start with <a pref="5.d">Definitions</a> or <a pref="5.1">First proposition</a>.
<br>
Interesting proof:
<a pref="5.23">Commutativity of multiplication</a>
</p>
<h4>Book 6 - Similar Figures</h4>
<p>
Start with <a pref="6.d">Definitions</a> or <a pref="6.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="6.19">Ratios of similar areas</a>,
<a pref="6.30">Solution of a quadratic equation</a>
</p>
<h4>Book 7 - Elementary Number Theory</h4>
<p>
Start with <a pref="7.d">Definitions</a> or <a pref="7.1">First proposition</a>.
<br>
Interesting propositions: <a pref="7.2">Greatest common divisor algorithm</a>
</p>
<h4>Book 8 - Continued Proportion</h4>
<p>
Start with <a pref="8.1">First proposition</a>.
<br>
Interesting proof: <a pref="8.10">Prime factors in series</a>
</p>
<h4>Book 9 - Applications of Number Theory</h4>
<p>
Start with <a pref="9.1">First proposition</a>.
<br>
Interesting proof: <a pref="9.20">Infinity of primes</a>
</p>
<h4>Book 10 - Incommensurable Magnitudes</h4>
<p>
Start with <a pref="10.d1">Definitions I</a>, <a pref="10.d2">Definitions II</a> or <a pref="10.d3">Definitions III</a>.
<br>
Interesting proof: <a pref="10.1">Method of exhaustion</a>
</p>
<h4>Book 11 - Elementary Stereometry</h4>
<p>
Start with <a pref="11.d">Definitions</a> or <a pref="11.1">First proposition</a>.
</p>
<h4>Book 12 - Proportional Stereometry</h4>
<p>
Start with <a pref="12.1">First proposition</a>.
<br>
Interesting proof: <a pref="12.7">Pyramid as the third of a prism</a>
</p>
<h4>Book 13 - The Platonic Solids</h4>
<p>
Start with <a pref="13.1">First proposition</a>.
<br>
Interesting propositions: <a pref="13.16">Icosahedron</a>, <a pref="13.17">Dodecahedron</a>, <a pref="13.18">Finitude of regular polyhedra</a>
</p>
<br>
`

  let pg = `
<div id="pg" class="${cs.pg}">
  <div style="text-align: center;">
    <h1>The Elements of Euclid</h1>
    <h3 class=${cs.c_dim}>with <span class="${cs.c_sentence}">high</span><span class="${cs.c_bright}">lights</span></h3>
  </div>

  <div class="${cs.pgFigures}">
    <div class="${cs.pgFiguresLeft}">
      <svg viewBox="-7 -7 473 537" width="473" height="537">${fext.smpl1}</svg>
      <svg viewBox="-130 -131 461 341" width="461" height="341">${fext.smpl3}</svg>
      <svg viewBox="0 0 477 338" width="477" height="338">${fext.smpl6}</svg>
      <svg viewBox="0 -5 385 210" width="385" height="210">${fext.smpl7}</svg>
    </div>
    <div>
      <svg style="margin-top: -25px;" class="large" viewBox="-229 -207 458 498" width="458" height="498">${fext.smpl13}</svg>
    </div>
    <div class="${cs.pgFiguresLeft}">
      <svg viewBox="-0 0 430 230" width="430" height="230">${fext.smpl9}</svg>
      <svg viewBox="-51 -50 501 225" width="501" height="225">${fext.smpl10}</svg>
      <svg viewBox="-189 -190 378 357" width="378" height="357">${fext.smpl11}</svg>
      <svg viewBox="-184 -298 302 423" width="302" height="423">${fext.smpl12}</svg>
    </div>
  </div>

  <div class="pgBorder"></div>
</div>`;

  let cover = `
<div id="cover" style="">
<div class="${cs.logoBar}">
  <div style="display: flex;align-items:center;"class="${cs.logoWrap}">
  <a class="${cs.logo}" href="/"><span class=${cs.b_dim}>re</span><span class="${cs.b_sentence}">a</span><span class="${cs.b_bright}">d</span></a>
<div id="palette" style="display:flex; margin-left: auto; padding: 15px;margin-right:15px;">
${sun}
</div>
  </div>
</div>
<div class="${cs.coverWrap}">
  <div class="${cs.coverHead}">
    <h1 style="line-height: 1.5em; font-size: 2.5em;">The Elements of Euclid</h1>
  <h2 id="hla" style="margin-top: -0.6em"><span class=${cs.c_dim}>with </span><span class="${cs.c_sentence}">high</span><span class="${cs.c_bright}">lights</span></h2>
    <h3 style="margin-top: 2em; font-style: oblique; font-weight:lighter;">An interactive rendering of the renowned 2300 year-old textbook on Geometry<br>--- with all 482 figures</h3>
  </div>
<div id="preview" class="${cs.preview}">
  <div id="progress" class="${cs.progress}"></div>
  <div id="arrows" class="${cs.arrows}">
    <div class="${cs.arrowsColumn}">
      <div>${arrowl}</div>
    </div>
    <div class="${cs.arrowsColumn}">
      <div>${arrowu}</div>
      <div id="downArrow">${arrowd}</div>
    </div>
    <div class="${cs.arrowsColumn}">
      <div>${arrowr}</div>
    </div>
  </div>
  <div class="${cs.figPreview}">
    <svg id="previewFigure" viewbox="0 0 512 512"></svg>
  </div>
  <div class="prose-container ${cs.prosePreview}">
    <div class="proseTitle ${cs.proseTitle}"></div>
    <div class="proseContent"></div>
  </div>
  <div id="previewOverlay" class="${cs.previewOverlay}">
  ${fext.clickhere}
  ${play}
  </div>
</div>
<div class="${cs.hero}">
<p>Read at your own pace.</p>
 <a id="readNow">${anglesDown}</a>
</div>
<div class="${cs.quoteTitle}">
<h4>At the ages old difficulties of communication</h4>
</div>
<div class="${cs.coverQuotes}">
  <div>
  <p>"As for ancient geometrical analysis and modern algebra, even apart from the fact that they deal only in highly abstract matters that seem to have no practical application, the former is so closely tied to the consideration of figures that it is unable to exercise the intellect without greatly tiring the imagination, while in the latter case one is so much a slave to certain rules and symbols that it has been turned into a confused and obscure art that bewilders the mind instead of being a form of knowledge that cultivates it."</p>
  <p><em>— R. Descartes, A Discourse on the Method, 1637</em></p>
  </div>
  <div>
  <p>"... geometry is nothing other than that part of universal mechanics which reduces the art of measuring to exact propositions and demonstrations. But geometry is commonly used in reference to magnitude, and mechanics in reference to motion. In this sense rational mechanics will be the science, expressed in exact propositions and demonstrations, of the motions that result from any forces whatever and of the forces that are required for any motions whatever."</p>
  <p><em>— I. Newton, Preface to Principia, 1687</em></p>
  </div>
</div>
<div id="coverStart" class="${cs.coverContents}">
  <div class="${cs.contents}">
    <h3 style="text-align: center; margin-bottom: 50px;"> <a pref="toc">Full Table of Contents</a></h3>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-7 -7 473 537" width="473" height="537">${fext.smpl1}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 1 - Fundamentals of Plane Geometry Involving Straight-Lines</h4>
<p>
Start with <a pref="1.d">Definitions</a> or <a pref="1.1">First proposition</a>.
<br>
Interesting proofs:
<a pref="1.43">Complements in parallelograms</a>,
<a pref="1.47">Pythagorean theorem</a>
</p>
<h4>Book 2 - Fundamentals of Geometric Algebra</h4>
<p>
Start with <a pref="2.d">Definitions</a> or <a pref="2.1">First proposition</a>.
<br>
Interesting construction:
<a pref="2.11">Golden section</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-130 -131 461 341" width="461" height="341">${fext.smpl3}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 3 - Fundamentals of Plane Geometry Involving Circles</h4>
<p>
Start with <a pref="3.d">Definitions</a> or <a pref="3.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="3.20">Angles at center and circumference</a>,
<a pref="3.36">Relations of lines from outside a circle</a>
</p>
<h4>Book 4 - Construction of Rectilinear Figures In and Around Circles</h4>
<p>
Start with <a pref="4.d">Definitions</a> or <a pref="4.1">First proposition</a>.
<br>
Interesting construction: <a pref="4.11">Regular Pentagon</a>
</p>
<h4>Book 5 - Proportion</h4>
<p>
Start with <a pref="5.d">Definitions</a> or <a pref="5.1">First proposition</a>.
<br>
Interesting proof:
<a pref="5.23">Commutativity of multiplication</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="0 0 477 338" width="477" height="338">${fext.smpl6}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 6 - Similar Figures</h4>
<p>
Start with <a pref="6.d">Definitions</a> or <a pref="6.1">First proposition</a>.
<br>
Interesting propositions:
<a pref="6.19">Ratios of similar areas</a>,
<a pref="6.30">Solution of a quadratic equation</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="0 -5 385 210" width="385" height="210">${fext.smpl7}</svg>

      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 7 - Elementary Number Theory</h4>
<p>
Start with <a pref="7.d">Definitions</a> or <a pref="7.1">First proposition</a>.
<br>
Interesting propositions: <a pref="7.2">Greatest common divisor algorithm</a>
</p>
<h4>Book 8 - Continued Proportion</h4>
<p>
Start with <a pref="8.1">First proposition</a>.
<br>
Interesting proof: <a pref="8.10">Prime factors in series</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-0 0 430 230" width="430" height="230">${fext.smpl9}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 9 - Applications of Number Theory</h4>
<p>
Start with <a pref="9.1">First proposition</a>.
<br>
Interesting proof: <a pref="9.20">Infinity of primes</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-51 -50 501 225" width="501" height="225">${fext.smpl10}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 10 - Incommensurable Magnitudes</h4>
<p>
Start with <a pref="10.d1">Definitions I</a>, <a pref="10.d2">Definitions II</a> or <a pref="10.d3">Definitions III</a>.
<br>
Interesting proof: <a pref="10.1">Method of exhaustion</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-189 -190 378 357" width="378" height="357">${fext.smpl11}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 11 - Elementary Stereometry</h4>
<p>
Start with <a pref="11.d">Definitions</a> or <a pref="11.1">First proposition</a>.
<br>
Interesting construction: <a pref="11.23">Solid angle</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-184 -298 302 423" width="302" height="423">${fext.smpl12}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 12 - Proportional Stereometry</h4>
<p>
Start with <a pref="12.1">First proposition</a>.
<br>
Interesting proof: <a pref="12.7">Pyramid as the third of a prism</a>
</p>
      </div>
    </div>
    <div class="${cs.contentsRow}">
      <div class="${cs.contentsColumn} fig">
        <svg viewBox="-229 -207 458 498" width="458" height="498">${fext.smpl13}</svg>
      </div>
      <div class="${cs.contentsColumn} title">
<h4>Book 13 - The Platonic Solids</h4>
<p>
Start with <a pref="13.1">First proposition</a>.
<br>
Interesting propositions: <a pref="13.16">Icosahedron</a>, <a pref="13.17">Dodecahedron</a>, <a pref="13.18">Finitude of regular polyhedra</a>
</p>
      </div>
    </div>
    <h3 style="text-align: center; margin-bottom: 50px;"> <a pref="toc">Full Table of Contents</a></h3>
  </div>
</div>
  <div class="${cs.coverFoot}">
    <div>
      <p>Based on <a target="new" href="http://farside.ph.utexas.edu/books/Euclid/Euclid.html">this translation</a>.</p>
      <p>Care by <a target="new" href="http://github.com/ibrahimsag">@ibrahimsag</a> as <a href="https://github.com/ibrahimsag/canberead/">code</a> to be <a href="/">read</a>.</p>
    </div>
  </div>
</div>
</div>`;

  let toc = `
<div id="toc" class="${cs.toc}">
  <div class="${cs.tocColumns}">
    <div id="sectionsColumn" class="${cs.sectionsColumn}">
    </div>
    <div id="booksColumn" class="${cs.booksColumn}">
      <h1><a pref="cover">${larrowl}</a> Euclid's Elements</h1>
      ${contents}
    </div>
  </div>
</div>`;

  let section = `
<div id="section" class="${cs.section}">
  <div class="${cs.header}">
    <a class="${cs.homeLink}" pref="cover">Elements</a> <a class="${cs.bookTitle}" id="bookTitle"></a>
  </div>
  <div id="figColumn" class="${cs.figColumn}">
    <svg id="figure" viewbox="0 0 512 512"></svg>
  </div>
  <div class="${cs.prose}">
    <div class="${cs.proseHeading}">
      <div class="${cs.sectionNav} ${cs.link}" id="prev-section">${larrowl}</div>
      <div class="${cs.sectionNav} ${cs.link}" id="next-section">${larrowr}</div>
      <div id="proseTitle" class="${cs.proseTitle}"></div>
    </div>
    <div id="proseContent"></div>
  </div>
  <div class="${cs.movement}">
    <a id="move-back" class="${cs.moveBack}"></a>
    <a id="move-on" class="${cs.moveOn}"></a>
  </div>
</div>`;

  let landscapeDictate = `
<div id="landscapeDictate" class="${cs.landscapeDictate}">
  <p>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50"><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/></svg>
    <br>
    Designed for a wider screen.
    <br>
    Try turning your phone.
    <br>
    <a pref="cover">Home</a>
  </p>
</div>`;

  return { pg, cover, section, toc, arrowu, arrowd, landscapeDictate };
}

let anglesDown = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 384 512"><path d="M169.4 278.6C175.6 284.9 183.8 288 192 288s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25s-32.75-12.5-45.25 0L192 210.8L54.63 73.38c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25L169.4 278.6zM329.4 265.4L192 402.8L54.63 265.4c-12.5-12.5-32.75-12.5-45.25 0s-12.5 32.75 0 45.25l160 160C175.6 476.9 183.8 480 192 480s16.38-3.125 22.62-9.375l160-160c12.5-12.5 12.5-32.75 0-45.25S341.9 252.9 329.4 265.4z"/></svg>';

let play = '<svg class="play" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. --><path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z"/></svg>'

let srotate = '<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M16.48 2.52c3.27 1.55 5.61 4.72 5.97 8.48h1.5C23.44 4.84 18.29 0 12 0l-.66.03 3.81 3.81 1.33-1.32zm-6.25-.77c-.59-.59-1.54-.59-2.12 0L1.75 8.11c-.59.59-.59 1.54 0 2.12l12.02 12.02c.59.59 1.54.59 2.12 0l6.36-6.36c.59-.59.59-1.54 0-2.12L10.23 1.75zm4.6 19.44L2.81 9.17l6.36-6.36 12.02 12.02-6.36 6.36zm-7.31.29C4.25 19.94 1.91 16.76 1.55 13H.05C.56 19.16 5.71 24 12 24l.66-.03-3.81-3.81-1.33 1.32z"/></svg>'

let arrowu = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 246.6C368.4 252.9 360.2 256 352 256s-16.38-3.125-22.62-9.375L224 141.3V448c0 17.69-14.33 31.1-31.1 31.1S160 465.7 160 448V141.3L54.63 246.6c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160C387.1 213.9 387.1 234.1 374.6 246.6z"/></svg>';

let arrowd = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z"/></svg>';

let arrowl = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M447.1 256C447.1 273.7 433.7 288 416 288H109.3l105.4 105.4c12.5 12.5 12.5 32.75 0 45.25C208.4 444.9 200.2 448 192 448s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H416C433.7 224 447.1 238.3 447.1 256z"/></svg>';

let arrowr = '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M438.6 278.6l-160 160C272.4 444.9 264.2 448 256 448s-16.38-3.125-22.62-9.375c-12.5-12.5-12.5-32.75 0-45.25L338.8 288H32C14.33 288 .0016 273.7 .0016 256S14.33 224 32 224h306.8l-105.4-105.4c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l160 160C451.1 245.9 451.1 266.1 438.6 278.6z"/></svg>'

let larrowl = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512"><path d="M9.375 233.4l128-128c12.5-12.5 32.75-12.5 45.25 0s12.5 32.75 0 45.25L109.3 224H480c17.69 0 32 14.31 32 32s-14.31 32-32 32H109.3l73.38 73.38c12.5 12.5 12.5 32.75 0 45.25c-12.49 12.49-32.74 12.51-45.25 0l-128-128C-3.125 266.1-3.125 245.9 9.375 233.4z"/></svg>'
let larrowr = '<svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 0 512 512"><path d="M502.6 278.6l-128 128c-12.51 12.51-32.76 12.49-45.25 0c-12.5-12.5-12.5-32.75 0-45.25L402.8 288H32C14.31 288 0 273.7 0 255.1S14.31 224 32 224h370.8l-73.38-73.38c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0l128 128C515.1 245.9 515.1 266.1 502.6 278.6z"/></svg>'

let sun = '<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>'


export default make;
