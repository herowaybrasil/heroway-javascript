export const sayHello = () => {
    console.log('hello!');
}

export function sayGoodBye() {
    console.log('good bye!');
}

export const object = {
    name: 'Heroway',
    objective: 'Help you achieve your first job =)'
}

export default {
    sayHello: sayHello,
    sayGoodBye,
    object
};