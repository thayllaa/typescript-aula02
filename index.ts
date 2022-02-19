// Import stylesheets
import { Person } from './person';
import './style.css';

let pessoa = new Person('Mario', 'Rocha', 'da Silva', 40);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1> TypeScript's World </h1>
<div>${pessoa.getFullName()}</div>
<div>${pessoa.getBirthdayYear()}</div>
`;
