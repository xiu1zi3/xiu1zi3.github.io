(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{338:function(t,s,a){"use strict";a.r(s);var n=a(8),e=Object(n.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#什么是变量"}},[t._v("什么是变量?")])]),s("li",[s("a",{attrs:{href:"#变量的分类"}},[t._v("变量的分类")])]),s("li",[s("a",{attrs:{href:"#变量、方法、类的命名"}},[t._v("变量、方法、类的命名")])])])]),s("p"),t._v(" "),s("h3",{attrs:{id:"什么是变量"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#什么是变量"}},[t._v("#")]),t._v(" 什么是变量?")]),t._v(" "),s("p",[t._v("一句话：可以重复的访问一个空间")]),t._v(" "),s("ul",[s("li",[t._v('内存中的开辟的一块空间,这块空间有"数据类型 名字 字面值"\n'),s("ul",[s("li",[t._v("是内存中存储数据的最基本存储单位\n注:数据类型决定了变量的空间大小\n通常访问一个变量包括两种访问方式:\n"),s("ul",[s("li",[t._v("第一种: 读取变量中保存的具体数据")]),t._v(" "),s("li",[t._v("第二种: 修改变量中保存的具体数据")])])])])]),t._v(" "),s("li",[t._v("如果只定义了 int i,并没有初始化变量,不能访问..内存空间并没有开辟出来")])]),t._v(" "),s("h3",{attrs:{id:"变量的分类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量的分类"}},[t._v("#")]),t._v(" 变量的分类")]),t._v(" "),s("p",[t._v("粗浅地，根据声明的位置分类")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("局部变量")]),t._v(" "),s("ul",[s("li",[t._v("在方法体中声明的变量叫局部变量")])])]),t._v(" "),s("li",[s("strong",[t._v("成员变量")]),t._v(" "),s("ul",[s("li",[t._v("在方法体外(类体之内)声明的变量叫做成员变量")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("如果是学生学号这样，无初始值，必须先创建对象才能访问到的变量叫"),s("strong",[t._v("实例变量")]),t._v("\n实例变量和非实例变量的成员变量的区别之一是，实例变量不能通过类直接访问")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VariableExample")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 成员变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("private")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 方法中的局部变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num1 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈中分配的局部变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, world!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈中分配的局部变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 带参数的方法中的局部变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("method2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" sum "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" num2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈中分配的局部变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("sum"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 构造方法中的局部变量")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("public")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("VariableExample")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" name"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对成员变量进行赋值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("age "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" age"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 对成员变量进行赋值")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" num3 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("20")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈中分配的局部变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" str2 "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Hello, "')]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"!"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 栈中分配的局部变量")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("num3"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("System")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("out"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("println")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("str2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("table",[s("thead",[s("tr",[s("th",[t._v("比较项目")]),t._v(" "),s("th",[t._v("成员变量")]),t._v(" "),s("th",[t._v("局部变量")])])]),t._v(" "),s("tbody",[s("tr",[s("td",[t._v("语法形式")]),t._v(" "),s("td",[t._v("属于类，可被 public,private,static 修饰")]),t._v(" "),s("td",[t._v("在代码块或方法中")])]),t._v(" "),s("tr",[s("td",[t._v("final 修饰")]),t._v(" "),s("td",[t._v("可以被 final 修饰，这时候也必须显式地赋值")]),t._v(" "),s("td",[t._v("不能被访问控制修饰")])]),t._v(" "),s("tr",[s("td",[t._v("存储方式")]),t._v(" "),s("td",[t._v("静态成员变量属于类，非静态成员变量属于实例")]),t._v(" "),s("td",[t._v("存在于栈内存")])]),t._v(" "),s("tr",[s("td",[t._v("生存时间")]),t._v(" "),s("td",[t._v("随对象的创建而存在")]),t._v(" "),s("td",[t._v("随方法的调用而生成，方法结束而消亡")])]),t._v(" "),s("tr",[s("td",[t._v("默认值")]),t._v(" "),s("td",[t._v("如果未被赋初始值，则使用类型的默认值")]),t._v(" "),s("td",[t._v("不会自动赋值")])])])]),t._v(" "),s("blockquote",[s("p",[t._v("默认值一切都向 0 看齐！（数值是 0 或 0.0， 布尔值是 false，非基本类型的默认值都是 null）")])]),t._v(" "),s("h3",{attrs:{id:"变量、方法、类的命名"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量、方法、类的命名"}},[t._v("#")]),t._v(" 变量、方法、类的命名")]),t._v(" "),s("p",[t._v("类成员变量、局部变量、方法名：首字母小写、驼峰原则")]),t._v(" "),s("p",[t._v("常量：大写字母和下划线")]),t._v(" "),s("p",[t._v("类名：首字母大写和驼峰原则")])])}),[],!1,null,null,null);s.default=e.exports}}]);