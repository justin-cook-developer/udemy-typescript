type BankAccount = {
  money: number;
  deposit: (depos: number) => void;
};

const myAccount: BankAccount = {
  money: 1000,
  deposit(value: number): void {
    this.money += value;
  },
};

type Person = {
  name: string;
  bankAccount: BankAccount;
  hobbies: string[];
};

const mySelf: Person = {
  name: 'Justin',
  bankAccount: myAccount,
  hobbies: ['Computing', 'Surfing'],
};

mySelf.bankAccount.deposit(1000);

console.log(mySelf);

// const sayHi = () => console.log('heyyyyo');

class sayHi {
  speak(mesage = 'hey'): void {
    console.log('say hiiii' + mesage);
  }
}

const yo = new sayHi();
yo.speak();
