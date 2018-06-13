class Usuario {
    constructor(
        public nombre: string,
        public apellido: string,
    ) {}
}

const adrian = new Usuario('Adrian', 'Eguez');
console.log('Usuario:', adrian);