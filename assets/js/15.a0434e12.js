(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{53:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 交互")]),t._v(" "),a("p",[t._v("使用 Rize 您可以很简单地与页面和元素进行交互。")]),t._v(" "),a("p",[t._v("下面所有的例子都假设您已经创建 "),a("code",[t._v("Rize")]),t._v(" 实例并访问到一个有效的页面。")]),t._v(" "),a("h2",{attrs:{id:"与元素交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与元素交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 与元素交互")]),t._v(" "),a("p",[t._v("如果要与元素交互，您必须提供指向您想要进行交互的元素的 CSS 选择器。")]),t._v(" "),a("h3",{attrs:{id:"单击和鼠标悬浮"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#单击和鼠标悬浮","aria-hidden":"true"}},[t._v("#")]),t._v(" 单击和鼠标悬浮")]),t._v(" "),a("p",[t._v("例如，我们有这样一个页面：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("id")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("submit"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n    Submit!\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])]),a("p",[t._v("我们可以单击那个按钮：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("click")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#submit'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("有时候您可能想为了查看某些效果，把鼠标悬浮在其上方而不是单击它，那么您可以调用 "),a("code",[t._v("hover")]),t._v(" 方法：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("hover")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'#submit'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("Rize 还提供 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#rightclick",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("rightClick")]),a("OutboundLink")],1),t._v(" 方法和 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#doubleclick",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("doubleClick")]),a("OutboundLink")],1),t._v(" 方法。")]),t._v(" "),a("h3",{attrs:{id:"输入文本"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#输入文本","aria-hidden":"true"}},[t._v("#")]),t._v(" 输入文本")]),t._v(" "),a("p",[t._v("假设我们有这样一个页面：")]),t._v(" "),a("div",{staticClass:"language-html extra-class"},[a("pre",{pre:!0,attrs:{class:"language-html"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("input")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("name")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("character"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("type")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("text"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("/>")])]),t._v("\n")])])]),a("p",[t._v("利用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#type",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("type")]),a("OutboundLink")],1),t._v(" 方法我们可以向那个 "),a("code",[t._v("<input>")]),t._v(" 元素中输入文本：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'[name=\"character\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Rize'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("如果我们继续调用 "),a("code",[t._v("type")]),t._v(" 方法，它不会清除已有的文本，只会在其后追回文本。")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("type")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'[name=\"character\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("' Tedeza'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// 现在 input 元素的值为“Rize Tedeza”")]),t._v("\n")])])]),a("p",[t._v("您可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#clear",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("clear")]),a("OutboundLink")],1),t._v(" 方法来清除文本：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("clear")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'[name=\"character\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{attrs:{class:"token comment"}},[t._v("// input 元素上什么都没有啦")]),t._v("\n")])])]),a("h3",{attrs:{id:"与表单交互"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#与表单交互","aria-hidden":"true"}},[t._v("#")]),t._v(" 与表单交互")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#check",target:"_blank",rel:"noopener noreferrer"}},[t._v("check"),a("OutboundLink")],1),t._v("（选择） 或 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#uncheck",target:"_blank",rel:"noopener noreferrer"}},[t._v("uncheck"),a("OutboundLink")],1),t._v("（取消选择）一个复选框很简单：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("check")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input#item1[type=\"checkbox\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("uncheck")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input#item2[type=\"checkbox\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("选择一个单选按钮：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("radio")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input#sex[type=\"radio\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'male'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#radio",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("radio")]),a("OutboundLink")],1),t._v(" 方法的第二个参数是您想要选择的单选按钮的值（value）。")]),t._v(" "),a("p",[t._v("选择下拉菜单中的一个或多个选项：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("select")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'select#food'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'vegetables'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 单选")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("select")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'select#character'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v("'Rize'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'Syaro'")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{attrs:{class:"token comment"}},[t._v("// 多选")]),t._v("\n")])])]),a("p",[t._v("往 "),a("code",[t._v('<input type="file" />')]),t._v(" 是添加文件也很简单：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("uploadFile")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'input[type=\"file\"]'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'my-file.png'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h2",{attrs:{id:"使用键盘"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用键盘","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用键盘")]),t._v(" "),a("p",[t._v("Rize 提供了三个方法（"),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#press",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("press")]),a("OutboundLink")],1),t._v("， "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#keydown",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("keyDown")]),a("OutboundLink")],1),t._v(" 和 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#keyup",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("keyUp")]),a("OutboundLink")],1),t._v("）可以让您使用键盘。")]),t._v(" "),a("p",[t._v("按一个键：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("press")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Enter'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("或者根据需要触发 "),a("code",[t._v("keydown")]),t._v(" 事件或 "),a("code",[t._v("keyup")]),t._v(" 事件：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keyDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Enter'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("keyUp")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'Enter'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("若要查看所有可用的按键，请前往 https://github.com/GoogleChrome/puppeteer/blob/master/lib/USKeyboardLayout.js")]),t._v(" "),a("h2",{attrs:{id:"使用鼠标"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用鼠标","aria-hidden":"true"}},[t._v("#")]),t._v(" 使用鼠标")]),t._v(" "),a("p",[t._v("您可以使用 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#mousemoveto",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("mouseMoveTo")]),a("OutboundLink")],1),t._v(" 方法来移动鼠标：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseMoveTo")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("50")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("45")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("按某个鼠标按键：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" button"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'right'")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" clickCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseClick")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("1")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" button"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'right'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" clickCount"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("甚至按下或抬起某个鼠标按键：")]),t._v(" "),a("div",{staticClass:"language-javascript extra-class"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[t._v("rize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("             "),a("span",{attrs:{class:"token comment"}},[t._v("// 按下鼠标左键一次")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'middle'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("     "),a("span",{attrs:{class:"token comment"}},[t._v("// 按下鼠标中键一次")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'right'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("      "),a("span",{attrs:{class:"token comment"}},[t._v("// 按下鼠标右键一次")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'left'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("    "),a("span",{attrs:{class:"token comment"}},[t._v("// 按下鼠标左键两次")]),t._v("\nrize"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("mouseDown")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token string"}},[t._v("'right'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("2")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{attrs:{class:"token comment"}},[t._v("// 按下鼠标右键两次")]),t._v("\n")])])]),a("p",[a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#mouseup",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("mouseUp")]),a("OutboundLink")],1),t._v(" 方法的用法与 "),a("a",{attrs:{href:"https://rize.js.org/api/classes/_index_.rize.html#mousedown",target:"_blank",rel:"noopener noreferrer"}},[a("code",[t._v("mouseDown")]),a("OutboundLink")],1),t._v(" 方法相同。")])])},[],!1,null,null,null);e.options.__file="interaction.md";s.default=e.exports}}]);