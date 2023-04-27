
const name ="juanfran";



class Persona {
    constructor(nombre, apellidos, DNI) {
      this._nombre = nombre;
      this._apellidos = apellidos;
      this._DNI = DNI;
    }
  
    get nombre() {
      return this._nombre;
    }
  
    set nombre(nuevoNombre) {
      this._nombre = nuevoNombre;
    }
  
    get apellidos() {
      return this._apellidos;
    }
  
    set apellidos(nuevosApellidos) {
      this._apellidos = nuevosApellidos;
    }
  
    get DNI() {
      return this._DNI;
    }
  
    set DNI(nuevoDNI) {
      this._DNI = nuevoDNI;
    }
  }

  const persona1 = new Persona('Juan', 'Pérez García', '12345678A');
console.log(persona1.nombre); // 'Juan'
console.log(persona1.apellidos); // 'Pérez García'
console.log(persona1.DNI); // '12345678A'

persona1.nombre = 'Pedro';
persona1.apellidos = 'González Sánchez';
persona1.DNI = '87654321B';

console.log(persona1.nombre); // 'Pedro'
console.log(persona1.apellidos); // 'González Sánchez'
console.log(persona1.DNI); // '87654321B'