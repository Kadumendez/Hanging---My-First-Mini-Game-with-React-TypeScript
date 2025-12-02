

let words: string[] = [
    'COMPUTADORA', 'PROGRAMACION', 'JAVASCRIPT',
    'TYPESCRIPT', 'REACT', 'ANGULAR', 'VUE',
    'NODEJS', 'PYTHON', 'DESARROLLO', 'FRONTEND',
    'BACKEND', 'FULLSTACK',
    'ALGORITMO', 'FUNCION', 'VARIABLE', 'OBJETO',
    'CLASE', 'COMPILADOR', 'INTERPRETE', 'UI', 'UX',
    'GITHUB', 'GITLAB', 'API', 'FRAMEWORK', 'LIBRERIA', 'COMPONENTE',
]

export function getRandomWord() {

    const randomIndex = (Math.floor(Math.random() * words.length));


    return words[randomIndex];
}

