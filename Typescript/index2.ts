// tipagem com objetos opcional


type User2 = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; 
  // isAdmin não será obrigatória na sua declaração
}

let newUser2: User = {
  name: 'João',
  email: 'joao@email.com',
  age: 18,
  // isAdmin: true    NÃO É NECESSARIO USAR POR SER UM TIPO OPCIONAL NA TIPAGEM COM O USO DO "?"
}