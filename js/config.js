MathJax.Hub.Config({
  tex2jax: {
    inlineMath: [ ['$','$'], ["\\(","\\)"] ],
    displayMath: [ ['$$','$$'], ["\\[","\\]"] ]
  },
	displayAlign:"left",
  TeX: {
    Macros: {
			vec:['{{\\boldsymbol #1}}',1]
      C: '{\\mathbb C}',
      R: '{\\mathbb R}',
      Q: '{\\mathbb Q}',
      Z: '{\\mathbb Z}',
      diag: '\\mathop{\\mathrm{diag}}\\nolimits',
      np: ['{#1}#2{#1}', 2]
    }
  }
});

MathJax.Ajax.loadComplete("https://www.rcnp.osaka-u.ac.jp/~shoken/js/config.js");
