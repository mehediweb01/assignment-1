## Topic name:

### Why is `any` labeled a "type safety hole," and why is `unknown` the safer choice for handling unpredictable data? Explain the concept of `type narrowing`.

## উত্তরঃ

## ১. `any` কেন 'type safety hole'?

উত্তরঃ `any` সব ধরনের টাইপ নিয়ে থাকে । অর্থাৎ `any` এর নির্দিষ্ট কোন `type` নেই । যেমনঃ- `string`, `number`, `boolean` etc.
এখানে যেকোনো ধরনের value দিতে পারি typescript কোন error দেখাবে না ।

```js
let value: any = 20;
value.toUpperCase();
```

এখানে দেখা যাচ্ছে যে `any` ব্যবহার করার কারণে একটি নাম্বার কে `toUpperCase()` method ব্যবহার করার পর ও কোন error দেখায় নাই । এইটা runtime এ error দিবে এবং সার্ভার ক্রাশ ও করতে পারে । `any` কোন `type` সেফটি দিচ্ছে না।

---

## ২. `unknown` কেন বেশি নিরাপদ `any` এর তুলনায় ?

`unknown` যখন ব্যাবহার করা হবে তখন এটি `type` guard ব্যবহার করবে । যদি `type` check না করি তাহলে error দেখাবে । `unknown` must `type` check করতেই হবে ।

```js
let username: unknown = "mehedi";
username.toUpperCase()
```

এখানে কোন `type` check করা হয় নাই তাই এইখানে একটি error দেখাবে । এখানে username এ error দেখাবে কারণ `type` check না করেই variable টি দিয়ে কিছু করে ফেলছি । আগে `type` check করতে হবে তারপর method দিতে পারব ।

```js
let username: unknown = "mehedi";
if (typeof username === "string") {
  username.toUpperCase();
}
```

এখানে `unknown` আমাকে বাধ্য করছে যে আমাকে `type` check করতেই হবে ।

---

## ৩. type narrowing কী?

`type narrowing` হলো এমন একটি পদ্ধতি যেখানে ভ্যারিয়াবেল এর সম্ভাব্য `type` কে একটি নির্দিষ্ট `type` এ নিয়ে আসা ।

`typeof` check এর মাধ্যমে `type` narrow করতে পারি । যেমনঃ-

```js
function typeCheck(value: string | number) {
  if (typeof value === "number") {
    return value.toFixed();
  } else {
    return value.toString();
  }
}

```

এখানে `typeof` দিয়ে `type` check করছি তারপর `type` অনুযায়ী সব কিছু করছি । অর্থাৎ এখানে একটি নির্দিষ্ট `type` এর উপর ডিপেন্ড করে কিছু return করতে পারছি । আর এইটাই হচ্ছে `type` narrowing ।

এখানে `type` narrowing এর মাধ্যমে ভ্যারিয়াবেল এর নির্দিষ্ট `type` বের করতে পারছি ।

---

## উপসংহারঃ-

১. `any`: `type` সেফটি দেয় না । এইটি যত সম্ভব কম ব্যবহার করতে হবে ।

২. `unknown`: `type` সেফটি দিয়ে থাকে । আগে `type` check করতে হবে । তা নাহলে error দেখাবে ।

৩. `type narrowing`: এইটার মাধ্যমে ভ্যারিয়াবেল এর `type` কে একটি নির্দিষ্ট `type` এ নিয়ে আসে ।
