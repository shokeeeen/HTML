function menu(){
    var html = "";
    html = '<ul class = "ddmenu">';
    html += '<li><a href="index.html">トップ</a></li>';
    html += '<li><a href="physics.html">物理</a>';
    html += '<ul>';
    html += '<li><a href="physics/basephysics.html">基礎物理</a></li>';
    html += '<li><a href="physics/baseexperiment.html">基礎実験</a></li>';
    html += '<li><a href="physics/nuclear.html">原子核</a></li>';
    html += '<li><a href="physics/gr.html">巨大共鳴</a></li>';
    html += '<li><a href="physics/reaction.html">反応論</a></li>';
    html += '</ul>';
    html += '</li>';
    html += '<li><a href="rcnp.html">RCNP関連</a>';
    html += '<ul>';
    html += '<li><a href="rcnp/tamiiana.html">analysis</a></li>';
    html += '<li><a href="rcnp/ws.html">西実験室</a></li>';
    html += '</ul>';
    html += '</li>';
    html += '<li><a href="acc.html">加速器</a></li>';
    html += '<li><a href="geant.html">geant4</a></li>';
    html += '<li><a href="book.html">本</a></li>';
    html += '<li><a href="others.html">その他</a></li>';
    html += '<li><a href="link.html">link</a></li>';
    html += '</ul>';
    document.write(html);
}
