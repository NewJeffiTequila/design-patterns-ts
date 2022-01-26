
export class MyDatabaseClassic {
  private static _instance: MyDatabaseClassic | null = null;
  private users: User[] = [];

  private constructor() {}
  /**
   * getInstace
   */
    static get instance(): MyDatabaseClassic {
    if (MyDatabaseClassic._instance === null) {
      MyDatabaseClassic._instance = new MyDatabaseClassic();
    }
    return MyDatabaseClassic.instance;
  }
  add(user: User) {
    this.users.push(user);
  }
  remove(index: number) {
    this.users.splice(index, 1);
  }
  show() {
    console.log(this.users);
  }
}


