// tipagem com objetos opcional


type UserOptional = {
  name: string;
  email: string;
  age: number;
  isAdmin?: boolean; 
  // isAdmin não será obrigatória na sua declaração
}

let newUser2: UserOptional = {
  name: 'João',
  email: 'joao@email.com',
  age: 18,
}