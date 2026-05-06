## Topic name:

### How do `Generics` allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

## উত্তরঃ

### `Generics` কী?

- `Generics` হলো এমন একটি `type` যেখানে variable এর মতো করে `type` দিতে পারি । `Generics` reusable code লিখতে দিয়ে থাকে ।

---

### `Generics` কিভাবে কাজ করে ?

- `Generics` শুরুতে placeholder type নিয়ে থাকে । পরে যখন কল করা হয় তখন যে type দেওয়া হয় সেই type অনুযায়ী data return করে থাকে ।
  যেমনঃ-

```js
const genericFun = <T>(value: T): T => {
  return value;
};

console.log(genericFun<string>("mehedi"));
console.log(genericFun<number>(45));
console.log(genericFun<boolean>(true));
```

এখানে দেখেন আমি ৩ ধরনের type value দিয়েছি কিন্তু function লিখছি শুধু একটি । কিন্তু কোন রকম error না দিয়ে run করছে ভালোভাবে । তাহলে এখন প্রশ্ন `এটি কিভাবে কাজ করল?`

`Generics` function এ `<T>` নিয়েছি এইটি `Generics` কে নির্দেশ করেছে এবং `value: T ` দিয়েছি তখন value এর type হবে যখন যেই value দিয়ে কল করব সেই value type পেয়ে যাবে । যখন কল করছি তখন যেকোনো ধরনের value দিতে পারছি আর ওই value টি return করছি ।

---

### `Generics` কিভাবে reusable ভাবে কাজ করছে ?

- `genericFun<string>("string")` `genericFun<number>(24)` `genericFun<boolean>(true)`
- এখানে ৩ ধরনের type ব্যবহার করছি। কিন্তু ১টি মাত্র function এর মাধ্যমে control করা হচ্ছে। এইটাই হচ্ছে `Generics` এর শক্তি । type সেফটি দিয়ে থাকে আবার flexibility ও দিয়ে থাকে । আমার আলাদা আলাদা function create করা লাগছে না ।

---

### `Generics` কিভাবে strict typing বজায় রাখে ?

- `Generics` ইনপুট থেকে type capture করে থাকে এবং সেই type অনুযায়ী সম্পূর্ণ function এ সেই type maintain করে থাকে ।

```js
function getFirstIndexValue<T>(arr: T[]): T {
  return arr[0];
}

const num = getFirstIndexValue<number>([1, 2, 3]);
const str = getFirstIndexValue<string>(["a", "b", "c"]);
console.log(num, str);

```

দেখতে পারছি যে যখন কল করছি function টি তখন কিসের array হবে এইটি বলে দিতেছি কিন্তু এখন যদি mixed কিছু array দেই তাহলে error দিবে ।

```js
const mixed = getFirstIndexValue < string > ["mehedi", 45, "hsan"];
```

এইখানে mixed array দিচ্ছি তাই error দিবে । কারণ `T` একবার যেই type নিয়ে থাকে ওইটি নিয়েই সম্পূর্ণ function এ কাজ করে থাকে, তাই mismatch হতে পারে । কোন type এর array যাবে তা আমি বলে দিতে পারছি ।

যদি array না দিয়ে `number`, `string` এই ধরনের type value দেই তাহলে error দিবে কারণ এখানে বলে দিছি যে এইটি array হবে ।

তাই `Generics` strict typing বজায় রেখেছে ।

---

## `interface` এর মাধ্যমে `Generics` ব্যবহার করা যায় ।

```js
interface Name<T extends { length: number }> {
 name: T;
}

const value: Name<string> = {
 name: "mehedi",
};

```

এখানে `Generics` কে `extends` করছি `length` দিয়ে । এখন `Generics` type টি শুধুমাত্র যার `length` property আছে সেই type গুলো receive করবে । এইখানে যদি `number` type value দিয়ে থাকি তাহালে error দেখাবে । বলবে নাম্বার এর length নেই ।

```js
Type 'number' does not satisfy the constraint '{ length: number; }'
```

এই error টি দেখাবে । এখানে দেখেই বুঝতে পারছি যে `Generics` যেমন reusability দিচ্ছে তেমন type সেফটি ও দিচ্ছে ।

#### আরেক টি `Generics` fucntion দেখতে পারি যেইটি `length` print করবে ।

```js
function printLength<T extends { length: number }>(item: T) {
  console.log(item.length);
}
printLength<string>("mehedi")
```

এখানে যদি `number` type value দিতাম তাহালে আগের মতোই error দেখাতো ।

```js
Type 'number' does not satisfy the constraint '{ length: number; }'
```

## উপসংহারঃ

`Generics` আমাদের reusablity code লিখতে সাহায্য করে থাকে । পাশাপাশি flexibility ও দিয়ে থাকে । একবার একটি code লিখে বহু type এর data দিতে পারি কোন রকম error ছাড়া । বহু type এর data দিতে পারি বলে যে type সেফটি দিবে না তা নয় `Generics` আমাদের code এ strict typing বজায় রাখে ।

`Generics` automatic type টি দরে নিয়ে থাকে । যেই type পেয়ে থাকে সেই data অনুযায়ী কাজ করে । `string` data দিলে `string` এর মতো কাজ করবে, `number` type data দিলে `number` এর কাজ করবে ইত্যাদি ।
