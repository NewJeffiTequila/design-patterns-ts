import { MyDatabaseClassic } from "../db/my-database-classic";
import {myDatabaseClassic as myDatabaseCLassicFromModule1} from "./module1"
const myDatabaseClassic = MyDatabaseClassic.instance;
// myDatabaseClassic.add({ name: "Sara", age: 21 });
// myDatabaseClassic.add({ name: "Jeff", age: 21 });
// myDatabaseClassic.add({ name: "Joao", age: 21 });
myDatabaseClassic.remove(1);
myDatabaseClassic.show();
console.log(myDatabaseCLassicFromModule1 == myDatabaseClassic)