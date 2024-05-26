(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{358:function(v,t,_){"use strict";_.r(t);var a=_(8),r=Object(a.a)({},(function(){var v=this,t=v._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[t("p"),t("div",{staticClass:"table-of-contents"},[t("ul",[t("li",[t("a",{attrs:{href:"#回顾-jvm-的-上下级"}},[v._v("回顾：JVM 的“上下级”")])]),t("li",[t("a",{attrs:{href:"#jvm-结构"}},[v._v("JVM 结构")])])])]),t("p"),v._v(" "),t("h3",{attrs:{id:"回顾-jvm-的-上下级"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#回顾-jvm-的-上下级"}},[v._v("#")]),v._v(" 回顾：JVM 的“上下级”")]),v._v(" "),t("p",[v._v("比较: jvm jre jdk")]),v._v(" "),t("blockquote",[t("p",[t("code",[v._v(".java")]),v._v(" 被执行预编译，得到"),t("code",[v._v(".class")]),v._v("中间代码，叫做 java 字节码。jvm 将字节码转换成机器码")])]),v._v(" "),t("p",[v._v("已经知道，Java 既要编译也要解释。在 JVM 内，.class java 字节码完成"),t("strong",[v._v("解释")])]),v._v(" "),t("p",[v._v("自测：")]),v._v(" "),t("ul",[t("li",[v._v("和操作系统打交道的是"),t("strong",[v._v("JVM")])]),v._v(" "),t("li",[v._v("第一个开始包含"),t("strong",[v._v("编译")]),v._v("的是 JDK")]),v._v(" "),t("li",[v._v("有应用服务器才叫 JavaEE")])]),v._v(" "),t("h3",{attrs:{id:"jvm-结构"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-结构"}},[v._v("#")]),v._v(" JVM 结构")]),v._v(" "),t("p",[v._v("JVM 主要能分成 3 部分：\n"),t("strong",[v._v("类加载器、JVM 内存、JVM 执行引擎")])]),v._v(" "),t("p",[v._v("JVM 面对的是 Java 二进制字节码.class 文件")]),v._v(" "),t("h4",{attrs:{id:"类被加载在-jvm-内存中"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#类被加载在-jvm-内存中"}},[v._v("#")]),v._v(" 类被加载在 JVM 内存中")]),v._v(" "),t("p",[t("strong",[v._v("类加载器、JVM 内存")])]),v._v(" "),t("p",[v._v("注意，JVM 内存大致划分仍然是方法区、堆内存、栈内存。")]),v._v(" "),t("blockquote",[t("p",[v._v("在"),t("code",[v._v("this关键字和大致内存.md")]),v._v("中，初步记录了方法区、堆内存、栈内存。类在方法区，实例对象在堆区，方法（包括 main 方法）如果运行会到栈区来")])]),v._v(" "),t("p",[v._v("具体：除了这 3 者，还有程序计数器。栈可以细分为 "),t("strong",[v._v("虚拟机栈")]),v._v(" 和 "),t("strong",[v._v("本地方法栈")])]),v._v(" "),t("p",[v._v("类在方法区中，实例对象在堆区。对象在调用方法时，会用到：虚拟机栈、程序计数器、本地方法栈")]),v._v(" "),t("p",[t("strong",[v._v("JVM 内存更细的划分：")])]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("中文名称")]),v._v(" "),t("th",[v._v("英文名称")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("方法区")]),v._v(" "),t("td",[v._v("Method Area")])]),v._v(" "),t("tr",[t("td",[v._v("堆区")]),v._v(" "),t("td",[v._v("Heap Area")])]),v._v(" "),t("tr",[t("td",[v._v("程序计数器")]),v._v(" "),t("td",[v._v("Program Counter")])]),v._v(" "),t("tr",[t("td",[v._v("虚拟机栈")]),v._v(" "),t("td",[v._v("Java Virtual Machine Stack")])]),v._v(" "),t("tr",[t("td",[v._v("本地方法栈")]),v._v(" "),t("td",[v._v("Native Method Stack")])])])]),v._v(" "),t("h4",{attrs:{id:"方法由执行引擎逐行执行"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#方法由执行引擎逐行执行"}},[v._v("#")]),v._v(" 方法由执行引擎逐行执行")]),v._v(" "),t("p",[v._v("方法由执行引擎逐行执行\n即时编译器（JIT Compiler） 即时编译（优化执行）方法中的热点代码（被频繁调用的代码）")]),v._v(" "),t("h4",{attrs:{id:"jvm-存储引擎"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#jvm-存储引擎"}},[v._v("#")]),v._v(" JVM 存储引擎")]),v._v(" "),t("table",[t("thead",[t("tr",[t("th",[v._v("中文名称")]),v._v(" "),t("th",[v._v("英文名称")])])]),v._v(" "),t("tbody",[t("tr",[t("td",[v._v("解释器")]),v._v(" "),t("td",[v._v("Interpreter")])]),v._v(" "),t("tr",[t("td",[v._v("即时编译器")]),v._v(" "),t("td",[v._v("Just-In-Time (JIT) Compiler")])]),v._v(" "),t("tr",[t("td",[v._v("垃圾回收")]),v._v(" "),t("td",[v._v("Garbage Collector")])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);