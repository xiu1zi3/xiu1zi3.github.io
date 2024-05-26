(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{339:function(a,s,t){"use strict";t.r(s);var v=t(8),e=Object(v.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("p"),s("div",{staticClass:"table-of-contents"},[s("ul",[s("li",[s("a",{attrs:{href:"#编译运行流程"}},[a._v("编译运行流程")]),s("ul",[s("li",[s("a",{attrs:{href:"#两个阶段-编译和运行"}},[a._v("两个阶段：编译和运行")])]),s("li",[s("a",{attrs:{href:"#运行的3个步骤-理解"}},[a._v("运行的3个步骤(理解)")])])])]),s("li",[s("a",{attrs:{href:"#类与方法"}},[a._v("类与方法")]),s("ul",[s("li",[s("a",{attrs:{href:"#类体"}},[a._v("类体")])]),s("li",[s("a",{attrs:{href:"#psvm-主方法"}},[a._v("psvm 主方法")])]),s("li",[s("a",{attrs:{href:"#public-class-和-class"}},[a._v("public class 和 class")])])])])])]),s("p"),a._v(" "),s("h2",{attrs:{id:"编译运行流程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译运行流程"}},[a._v("#")]),a._v(" 编译运行流程")]),a._v(" "),s("blockquote",[s("p",[a._v("Java 先编译，再解释，2 个环节都有，同时具有编译型语言和解释型语言的特点")])]),a._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[a._v("有这样的说法：")]),a._v(" "),s("p",[a._v("一次编译，到处运行")])]),a._v(" "),s("h3",{attrs:{id:"两个阶段-编译和运行"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#两个阶段-编译和运行"}},[a._v("#")]),a._v(" 两个阶段：编译和运行")]),a._v(" "),s("h4",{attrs:{id:"编译阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编译阶段"}},[a._v("#")]),a._v(" 编译阶段")]),a._v(" "),s("p",[a._v("为了检查是否有语法错误,生成"),s("code",[a._v(".class")]),a._v(" 字节码\n(1). "),s("code",[a._v(".java")]),a._v(" 源文件 --\x3e(编译) "),s("code",[a._v(".class")]),a._v(" 字节码\n--字节码文件不是纯粹二进制,无法直接执行")]),a._v(" "),s("p",[a._v("(2). "),s("strong",[a._v("javac.exe")]),a._v(" (JDK 中自带的一个 "),s("strong",[a._v("Java 编译器")]),a._v("工具)")]),a._v(" "),s("p",[a._v("(3).一个 java 源文件可以编译生成多个"),s("code",[a._v(".class")]),a._v(" 文件")]),a._v(" "),s("p",[a._v("(4).生成了"),s("code",[a._v(".class")]),a._v(" 文件,即使删除源文件并不影响 Java 运行,但一般不删除.")]),a._v(" "),s("p",[a._v("(5).注意: 生成的 "),s("code",[a._v(".class")]),a._v(" 文件可以直接拷贝到不同操作系统上使用,因为 JVM 忽略了操作系统的差异性(跨平台性)")]),a._v(" "),s("h4",{attrs:{id:"运行阶段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行阶段"}},[a._v("#")]),a._v(" 运行阶段")]),a._v(" "),s("p",[a._v("(1)对于 A.class，A 就是一个类，A 是个类名\n(2)JDK 自带 javac 之外,还有 "),s("code",[a._v("java.exe.")]),a._v("，"),s("code",[a._v("java.exe")]),a._v(" 主要负责运行阶段")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("javac.exe")]),a._v(" 编译:")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("javac 指定到达的java源文件\n")])])]),s("p",[a._v("比如")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("javac "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("java\n")])])]),s("ul",[s("li",[s("strong",[a._v("java.exe")]),a._v(" 运行:")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("java java类名(比如 A.class， A 就是类名，A 就够了)\n")])])]),s("p",[a._v("比如 硬盘上有"),s("code",[a._v("A.class")]),a._v("，使用时是")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("java "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("A")]),a._v("\n")])])]),s("p",[a._v("就可以，并不是")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[a._v("java "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("A")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v("\n")])])]),s("h3",{attrs:{id:"运行的3个步骤-理解"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行的3个步骤-理解"}},[a._v("#")]),a._v(" 运行的3个步骤(理解)")]),a._v(" "),s("p",[a._v("打开 DOS 命令窗口，输入 "),s("code",[a._v("java java类名")]),a._v(" ，敲回车，接下来：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("java.exe")]),a._v(" 启动 "),s("strong",[a._v("JVM")])]),a._v(" "),s("li",[s("strong",[a._v("JVM")]),a._v(" 启动 "),s("strong",[a._v("类加载器")]),a._v(" 在硬盘上寻找 "),s("strong",[a._v("类名.class")]),a._v(" 文件")]),a._v(" "),s("li",[s("strong",[a._v("类加载器")]),a._v(" 把找到的 "),s("strong",[a._v(".class")]),a._v(" 文件并将其加载到 "),s("strong",[a._v("JVM")]),a._v(" 中,然后转换成二进制指令")]),a._v(" "),s("li",[a._v("二进制指令和底层硬件相互交互")])]),a._v(" "),s("h2",{attrs:{id:"类与方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类与方法"}},[a._v("#")]),a._v(" 类与方法")]),a._v(" "),s("h3",{attrs:{id:"类体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#类体"}},[a._v("#")]),a._v(" 类体")]),a._v(" "),s("p",[a._v("定义 public 的类，名字是 HelloWorld")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("HelloWorld")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//类体")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("里面叫类体\n除了声明变量之外，类体中不允许直接编写 java 语句")]),a._v(" "),s("h3",{attrs:{id:"psvm-主方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#psvm-主方法"}},[a._v("#")]),a._v(" psvm 主方法")]),a._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("public")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("static")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("void")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("string"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" xxx"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//方法体")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("p",[a._v("psvm 是主方法，是程序的入口")]),a._v(" "),s("p",[a._v("方法里面叫方法体")]),a._v(" "),s("h3",{attrs:{id:"public-class-和-class"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#public-class-和-class"}},[a._v("#")]),a._v(" public class 和 class")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("1 对多")]),a._v("：一个 Java 源文件中可以有多个 class")]),a._v(" "),s("li",[a._v("public class 并不是必须要有的")]),a._v(" "),s("li",[a._v("一个 class 文件对应生成一个.class 字节码文件")]),a._v(" "),s("li",[s("strong",[a._v("至多 1")]),a._v("：如果源文件中要定义公共的类(public class),有且只能有一个,并且该源文件的名称一定要与类名一致")]),a._v(" "),s("li",[s("strong",[a._v("1 对 1")]),a._v("：每一个 class 中都可以编写 main 方法,都可设定程序的入口\n例: 想执行 B.class 中的 main 方法\n"),s("code",[a._v("java B")])]),a._v(" "),s("li",[a._v("注意:当在命令窗口执行 B.class 时,那么要求 B.class 当中必须要有主方法")])]),a._v(" "),s("p",[s("img",{attrs:{src:"https://ice2604-navi.github.io/assets/JavaClass.png",alt:""}})])])}),[],!1,null,null,null);s.default=e.exports}}]);