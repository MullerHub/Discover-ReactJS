// GENERICS
function useState<T>() {
  let state: T;

  function get(){
      return state;
  }

  function set(newValue: T){
      state = newValue;
  }

  return { get, set}
}

let newState = useState();
newState.get();
newState.set("João");
newState.set(123);

// TYPE (criar tipagens para serem reutilizadas mais de uma vez)

type IdType = string | number | undefined;

let userId: IdType;
let adminId: IdType;

userId = 1;
userId = '1';
userId = undefined;

adminId = 1;
adminId = '2';
adminId = undefined;

// Type Assertions 

type UserResponse = {
  id: number;
  name: string;
  avatar: string;
}

let userResponse = {} as UserResponse;

// Type com objetos

type Point = {
  x: number;
  y: number;
}

function printCoord(points: Point) {
  console.log(`O eixo x é: ${points.x}`)
  console.log(`O eixo y é: ${points.y}`)
}

printCoord({x: 101, y: 50})

  // Outro exemplo de types com obhetos

type User = {
  name: string;
  email: string;
  age: number;
  isAdmin: boolean;
}

let newUser: User;

newUser.age