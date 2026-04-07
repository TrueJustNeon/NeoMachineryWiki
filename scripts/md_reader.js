 // PEGA AQUÍ LA URL RAW, NO la normal de github.com
    // Ejemplo correcto: https://raw.githubusercontent.com/usuario/repo/main/README.md

    fetch('content.md')
      .then(r => {
        if (!r.ok) throw new Error();
        return r.text();
      })
      .then(md => {
        document.getElementById('md-content').innerHTML = marked.parse(md);
      })
      .catch(err => {
        document.getElementById('md-content').innerHTML = 
          `<p class="error">No se pudo cargar el Markdown.<br>${err.message}<br>
          Tip: usa la URL "Raw" de GitHub (botón Raw → copiar enlace).</p>`;
      });