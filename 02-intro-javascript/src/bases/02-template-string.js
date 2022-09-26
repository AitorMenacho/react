

const nombre   = 'Aitor';
const apellido = 'Menacho';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${nombre} ${apellido}`;

console.log(nombreCompleto);

const nomCompleto = `
${nombre}
${apellido}
${ 1 + 1 }
`;

console.log(nomCompleto);

function getSaludo(nombre) {
    return 'Hola ' + nombre;
}

console.log(`Este es un texto: ${ getSaludo(nombre) }`);