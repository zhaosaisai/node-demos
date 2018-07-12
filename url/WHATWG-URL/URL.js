/**
 * URL 是一个类，这个类的构造函数接收两个参数：
 *  - 要解析的url字符串
 *  - 如果url是相对的，则可以通过第二个参数设置base url
 * 
 * 这个方法主要是创建一个url对象。如果input或者base是无效的url，那么会抛出一个错误
 */

 const { URL } = require('url')
 
 const myUrl = new URL('https://user:pass@sub.host.com:8080/p/a/t/h?query=string#hash')

//  url.hash 获取 和 设置 url的hash部分
console.log(`URL的hash是${myUrl.hash}`)

// url.host 获取 和 设置 url.host部分
console.log(`URL的host是${myUrl.host}`)

// url.hostname 获取 和 设置 url的主机名部分。
// 和url.host的主要区别就是，这个属性是不包含端口的
console.log(`url的hostname是${myUrl.hostname}`)

// url.href 获取 和 设置 url的序列化部分
console.log(`url的hostname是${myUrl.href}`)

// url.origin 获取 只读序列化 的URL origin部分。
console.log(`url的origin是${myUrl.origin}`)

// url.password获取和设置url的password部分
console.log(`url的password是${myUrl.password}`)

// url.pathname获取和设置url的路径部分
console.log(`url的pathname是${myUrl.pathname}`)

// url.port 获取和设置url的端口部分
console.log(`url的port是${myUrl.port}`)

// url.protocol 获取和设置url的协议
console.log(`url的协议是${myUrl.protocol}`)

// url.search 获取 和 设置 url的query部分
console.log(`url的search部分是${myUrl.search}`)

// url.searchParams 获取 表示 url 的searchParams 只读属性
console.log(myUrl.searchParams)

// url.username 获取url认证信息中的name属性
console.log(myUrl.username)

// url.toString 获取序列化的url
console.log(myUrl.toString())

// url.toJSON 获取url序列化结果
console.log(myUrl.toJSON())