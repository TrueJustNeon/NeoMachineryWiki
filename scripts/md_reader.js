// Opción B: Cargar un archivo .md externo
     fetch('content.md')
       .then(r => r.text())
       .then(md => {
         document.getElementById('md-content').innerHTML = marked.parse(md);
       });