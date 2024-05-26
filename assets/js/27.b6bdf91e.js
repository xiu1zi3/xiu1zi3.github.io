(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{354:function(t,s,a){"use strict";a.r(s);var v=a(8),n=Object(v.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#用法示例"}},[t._v("用法示例")])]),s("li",[s("a",{attrs:{href:"#线程同步机制-synchronized-执行过程"}},[t._v("线程同步机制-synchronized 执行过程")])]),s("li",[s("a",{attrs:{href:"#为什么要线程的-共享对象"}},[t._v("为什么要线程的“共享对象”")])]),s("li",[s("a",{attrs:{href:"#对线程的共享对象的控制"}},[t._v("对线程的共享对象的控制")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"用法示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#用法示例"}},[t._v("#")]),t._v(" 用法示例")]),t._v(" "),s("p",[t._v("synchronized(){}一句话：\n"),s("code",[t._v("{}")]),t._v("框起来线程同步代码块，参数填多线程共享的数据")]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("synchronized")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),t._v("、类名、 字符串 或其他共享的数据"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//线程同步代码块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),t._v(" "),s("blockquote",[s("p",[t._v("关于"),s("code",[t._v("排他锁")]),t._v("，详见"),s("code",[t._v("死锁与解决")])])]),t._v(" "),s("h3",{attrs:{id:"线程同步机制-synchronized-执行过程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#线程同步机制-synchronized-执行过程"}},[t._v("#")]),t._v(" 线程同步机制-synchronized 执行过程")]),t._v(" "),s("p",[s("strong",[t._v("想要哪几个线程共享,就传进去这几个线程所共享的对象!")])]),t._v(" "),s("p",[t._v('java 中,任何一个对象都有"一把锁"其实这把锁就是标记(只是把它叫做锁).')]),t._v(" "),s("p",[t._v('比如， t1 线程遇到 synchronized 之后,就会去锁池中寻找这个对象的那把锁,并占有小括号中的那个"共享对象"的那一把锁,然后去执行这个同步代码块.')]),t._v(" "),s("p",[t._v('当 t2 线程遇到 synchronized 之后,也想要占有后面小括号中的"共享对象"的那一把锁,但是已经被 t1 占有了,所以只能等排队等待 t1 线程执行结束后才能执行 t2 线程.在 t1 线程执行结束后会归还这个共享对象的这把锁,然后在外面等待的 t2 线程就会开始执行.')]),t._v(" "),s("p",[t._v("这样就达到了线程排队执行.")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("打比方")]),t._v(" "),s("p",[t._v("原理类似于：大楼里只有一个洗手间，synchronized 代表几个线程要等线程共享对象的这把锁")])]),t._v(" "),s("p",[t._v("这里需要注意的是:共享对象 一定要选好了.")]),t._v(" "),s("h3",{attrs:{id:"为什么要线程的-共享对象"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么要线程的-共享对象"}},[t._v("#")]),t._v(" 为什么要线程的“共享对象”")]),t._v(" "),s("blockquote",[s("p",[t._v("在银行的例子里，对有可能同时操作我这个账户的线程来说，他们必须做到线程同步!!")]),t._v(" "),s("p",[t._v("而对于不操作该账户的线程，它们完全不必要等待。")])]),t._v(" "),s("p",[t._v("自己的理解：让同步等待的其他线程的范围不能小，小会出现线程安全问题\n也最好不要过大，最好减少不必要的等待。\n"),s("strong",[t._v('想要哪几个线程共享,传进去这几个线程的"共享对象"就可以!')])]),t._v(" "),s("h3",{attrs:{id:"对线程的共享对象的控制"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#对线程的共享对象的控制"}},[t._v("#")]),t._v(" 对线程的共享对象的控制")]),t._v(" "),s("p",[t._v("synchronized(){} 括号里如果放的是")]),t._v(" "),s("ul",[s("li",[s("p",[t._v("常量字符串：完全共享\n"),s("code",[t._v('"AAA"')]),t._v("、"),s("code",[t._v('"abc"')]),t._v("这样的字符串，都在"),s("strong",[t._v("字符串常量池")]),t._v("，真的是所有线程共享。无需控制，必会同步")])]),t._v(" "),s("li",[s("p",[t._v("this：最直观的关系\n在创建线程时，写哪个账户这个线程就能操作哪个。对应现实当中归属关系，需要谁控制")])]),t._v(" "),s("li",[s("p",[t._v("局部变量：等于没有同步机制，可能出现线程安全问题")])])]),t._v(" "),s("p",[t._v("详见“扩大同步范围”")])])}),[],!1,null,null,null);s.default=n.exports}}]);