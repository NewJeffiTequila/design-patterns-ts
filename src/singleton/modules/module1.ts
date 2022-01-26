import { MyDatabaseClassic } from "../db/my-database-classic";

const myDatabaseClassic = MyDatabaseClassic.instance;


// myDatabaseClassic.add({ name: "Sara", age: 21 });
// myDatabaseClassic.add({ name: "Jeff", age: 21 });
// myDatabaseClassic.add({ name: "Joao", age: 21 });
myDatabaseClassic.remove(2);
myDatabaseClassic.show();

export {myDatabaseClassic}