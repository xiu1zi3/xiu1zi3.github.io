(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{357:function(t,v,_){"use strict";_.r(v);var s=_(8),a=Object(s.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("p"),v("div",{staticClass:"table-of-contents"},[v("ul",[v("li",[v("a",{attrs:{href:"#死锁的执行表现"}},[t._v("死锁的执行表现")])]),v("li",[v("a",{attrs:{href:"#锁的简单分类"}},[t._v("锁的简单分类")])]),v("li",[v("a",{attrs:{href:"#线程安全的习惯"}},[t._v("线程安全的习惯")])]),v("li",[v("a",{attrs:{href:"#synchronized-缺点"}},[t._v("synchronized(){}缺点")])])])]),v("p"),t._v(" "),v("p",[v("strong",[v("code",[t._v("==")]),t._v("与"),v("code",[t._v("equals")]),t._v("的区别")])]),t._v(" "),v("ul",[v("li",[v("code",[t._v("==")]),t._v(" 在基本数据类型：值内容, 引用类型：地址")]),t._v(" "),v("li",[v("code",[t._v("equals")]),t._v(" 具体看各个类是否重写"),v("code",[t._v("equals")]),t._v("： 不重写 equals，比较的是地址；重写后，一般是比较值内容")])]),t._v(" "),v("h3",{attrs:{id:"死锁的执行表现"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#死锁的执行表现"}},[t._v("#")]),t._v(" 死锁的执行表现")]),t._v(" "),v("p",[t._v("关于"),v("code",[t._v("排他锁")]),t._v("，关键字"),v("code",[t._v("synchronized")]),t._v("的锁就是排他锁")]),t._v(" "),v("p",[t._v("t1 线程在锁池中寻找共享对象的锁并把占有锁,然后继续执行.")]),t._v(" "),v("p",[t._v('此时若 t2 线程也想要占有"共享对象"的那一把锁,但是锁已经被 t1 占有了,所以t2只能等排队等待，')]),t._v(" "),v("p",[t._v("在 t1 线程执行结束后，t1线程归还该共享对象的锁，然后 t2 线程占有这把锁，开始执行.")]),t._v(" "),v("p",[t._v("出现死锁的执行表现：")]),t._v(" "),v("blockquote",[v("p",[t._v("不出现异常，不出现错误，程序僵在原地")])]),t._v(" "),v("h3",{attrs:{id:"锁的简单分类"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#锁的简单分类"}},[t._v("#")]),t._v(" 锁的简单分类")]),t._v(" "),v("p",[t._v("类锁：类锁永远只有 1 把，与类创建了多少个实例对象无关\n对象锁：每个实例对象都有自己的 1 把对象锁")]),t._v(" "),v("h3",{attrs:{id:"线程安全的习惯"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#线程安全的习惯"}},[t._v("#")]),t._v(" 线程安全的习惯")]),t._v(" "),v("p",[t._v('第一:尽量使用局部变量代替"实例变量和静态变量"')]),t._v(" "),v("p",[t._v("第二:如果必须是实例变量，那么可以考虑创建多个对象，这样实例变量的内存就不共享了，(一个线程对应 1 个对象，100 个线程对应 100 个对象对象不共享，就没有数据安全问题了")]),t._v(" "),v("p",[t._v("第三:如果不能使用局部变量，对象也不能创建多个，这时选择 synchronized。采取线程同步机制保证线程安全。")]),t._v(" "),v("h3",{attrs:{id:"synchronized-缺点"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-缺点"}},[t._v("#")]),t._v(" synchronized(){}缺点")]),t._v(" "),v("p",[t._v("使代码执行效率降低\n并发用户数少，用户吞吐量低")])])}),[],!1,null,null,null);v.default=a.exports}}]);