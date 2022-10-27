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

// Insercção de tipos

type UserInsert = {
  id: number,
  name: string,
}

type Char = {
  nickname: string,
  level: number
}

type PlayerInfo = UserInsert & Char;

let info: PlayerInfo = {
  id: 1,
  name: 'João Inácio',
  nickname: 'birobirobiro',
  level: 50
}

// Interface

interface IUser {
  id: number
  name: string,
}

// newUserI é utilizado o I no final para indicar que é da interface, sem o I daria conflito com outra variavel que foi criada por min anteriormente com o mesmo nome, mas tanto faz o nome só não pode ser duplicada

let newUserI: IUser = {
  id: 1,
  name: "João"
}

function registerNewUser(newUser: User){
  newUserI.id
  newUserI.name
}
