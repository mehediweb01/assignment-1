const filterEvenNumbers = (arr: Array<number>): Array<number> =>
  arr.filter((num: number) => num % 2 === 0);

filterEvenNumbers([1, 2, 3, 4, 5, 6]);

const reverseString = (str: string): string => str.split("").reverse().join("");

reverseString("typescript");

type StringOrNumber = string | number;

const checkType = (value: StringOrNumber) => {
  return typeof value === "string" ? "String" : "Number";
};

checkType("Hello");
checkType(42);

const getProperty = <T>(obj: T, key: keyof T): T[keyof T] => {
  return obj[key];
};

const user = {
  id: 1,
  name: "John Doe",
  age: 21,
};

getProperty(user, "name");

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

const toggleReadStatus = (obj: Book) => {
  return {
    ...obj,
    isRead: true,
  };
};

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};

toggleReadStatus(myBook);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}

const student = new Student("Alice", 20, "A");

student.getDetails();

const getIntersection = (arr1: number[], arr2: number[]): number[] => {
  const commonNumber = arr1.filter((num: number) => arr2.includes(num));

  return [...new Set(commonNumber)];
};

getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
