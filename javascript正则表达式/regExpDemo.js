/***
 * 1. String对象的正则方法
 */
// var str = 'hello javascript,hello RegExp!';
// console.log(str.search(/hello/));  // 0
// console.log(str.search(/regexp/i)); //23
//
// console.log(str.match(/hello/));  //[ 'hello', index: 0, input: 'hello javascript,hello RegExp!' ]
// console.log(str.match(/hello/g));  //[ 'hello', 'hello' ]
//
// var str2 = str.replace(/hello/, 'hi');
// var str3 = str.replace(/hello/g, 'hi');
// console.log(str2);  //hi javascript,hello RegExp!
// console.log(str3);  //hi javascript,hi RegExp!
// console.log(str);   //hello javascript,hello RegExp!
//
// var a = str.split(/hello/);  //[ '', ' javascript,', ' RegExp!' ]
// console.log(a);

/**
 * 2. RegExp对象的方法
 * */
// var r = /hello/i;
// console.log(r.test('Hello js!'));
// console.log(r.test('hello js!'));
//
// console.log(r.exec('Hello js, hello RegExp'));//[ 'Hello', index: 0, input: 'Hello js, hello RegExp' ]
//
// r = /hello/g;
// console.log(r.exec('Hello js, hello RegExp'));//[ 'hello', index: 10, input: 'Hello js, hello RegExp' ]


/**
 * 3. 正则中的方括号
 * */

// var r = /[12345]/;
// console.log(r.test('aaa12'));//true
//
// r = /[^0a]/;
// console.log(r.test('123')); // true
// console.log(r.test('a')); // false
// console.log(r.test('123a')); // true
//
// var str = "abcde";
// console.log(str.match(/[bcd][bcd]/)); // [“bc”, index: 1, input: “abcde”]
