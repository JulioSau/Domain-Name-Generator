

    let pronoun = ["mi", "nuestra", "la", "tu"];
    let adj = ["gran", "magnifica", "eterna", "historica", "aplaudida", "oscura", "loca"];
    let noun = ["pesadilla", "ruta", "andadura", "verdad", "promesa", "cena", "fiesta"];
    let extension = [".es", ".com", ".uk", ".net", ".us"];

    for(i=0; i < pronoun.length;i++) {
        for(j=0; j < adj.length; j++) {
            for(k=0; k <noun.length; k++) {
                for(l=0; l < extension.length; l++)
                console.log(pronoun[i].concat(adj[j], noun[k], extension[l]));
            }
        }
    }
