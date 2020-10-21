let str: string = "111";
console.log(str);
let boolean: boolean = true;

let h: string | number = "1";
h = 2;
console.log(h, "混合类型");

let arr: string[] = ["1"];
let arr_num: Array<string> = [];
console.log(arr, arr_num, "数组");

let tuple: [number, string] = [1, "2"];
console.log(tuple[0], "元组");

enum User {
  NAME = "lhf",
  AGE = 12,
  SEX = "男",
}
let names: User = User.NAME;
console.log(names);
