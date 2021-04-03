(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{525:function(t,s,a){"use strict";a.r(s);var e=a(45),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"builtin-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#builtin-function"}},[t._v("#")]),t._v(" Builtin function")]),t._v(" "),a("p",[t._v("There are many builtin functions in ABS.\nTake "),a("code",[t._v("type")]),t._v(", for example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NUMBER")]),t._v("\ntype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ARRAY")]),t._v("\n")])])]),a("p",[t._v('We\'ll reveal to you a secret now: all string, array, number & hash functions\nare actually "generic", but the syntax you see makes you think those are\nspecific to the string, number, etc object.')]),t._v(" "),a("p",[t._v("The trick is very simple; whenever the ABS' interpreter finds a method call\nsuch as "),a("code",[t._v("object.func(arg)")]),t._v(" it will actually translate it to "),a("code",[t._v("func(object, arg)")]),t._v(".")]),t._v(" "),a("p",[t._v("Don't believe us? Try with these examples:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("map"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(", int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1]")]),t._v("\nsort"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# [1, 2, 3]")]),t._v("\nlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abc"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\n")])])]),a("p",[t._v("At the same time, there are some builtin functions that doesn't really\nmake sense to call with the method notation, so we've kept them in a\n\"special\" location in the documentation. "),a("code",[t._v("exit(99)")]),t._v(", for example, exits\nthe program with the status code "),a("code",[t._v("99")]),t._v(", but it would definitely look\nstrange to see something such as "),a("code",[t._v("99.exit()")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"generic-builtin-functions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#generic-builtin-functions"}},[t._v("#")]),t._v(" Generic builtin functions")]),t._v(" "),a("h3",{attrs:{id:"arg-n"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#arg-n"}},[t._v("#")]),t._v(" arg(n)")]),t._v(" "),a("p",[t._v("Returns the "),a("code",[t._v("n")]),t._v("th argument to the current script:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("arg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /usr/bin/abs")]),t._v("\n")])])]),a("h3",{attrs:{id:"args"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#args"}},[t._v("#")]),t._v(" args()")]),t._v(" "),a("p",[t._v("Returns the list of arguments to the current script (including the current script itself)")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ abs --flag1 --flag2 arg1 arg2\nHello user, welcome to the ABS programming language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quit'")]),t._v(" when you"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'re done, '")]),t._v("help' "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you get lost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n⧐   args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"abs"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--flag1"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"--flag2"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg1"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"arg2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n⧐   args"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".len"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n")])])]),a("h3",{attrs:{id:"cd-or-cd-path"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cd-or-cd-path"}},[t._v("#")]),t._v(" cd() or cd(path)")]),t._v(" "),a("p",[t._v("Sets the current working directory to "),a("code",[t._v("homeDir")]),t._v(" or the given "),a("code",[t._v("path")]),t._v("\nin both Linux and Windows.")]),t._v(" "),a("p",[t._v("Note that the path may have a "),a("code",[t._v("'~/'")]),t._v(" prefix which will be replaced\nwith "),a("code",[t._v("'homeDir/'")]),t._v(". Also, in Windows, any "),a("code",[t._v("'/'")]),t._v(" path separator will be\nreplaced with "),a("code",[t._v("'\\'")]),t._v(" and path names are not case-sensitive.")]),t._v(" "),a("p",[t._v("Returns the "),a("code",[t._v("'/fully/expanded/path'")]),t._v(" to the new current working directory and "),a("code",[t._v("path.ok")]),t._v(".\nIf "),a("code",[t._v("path.ok")]),t._v(" is "),a("code",[t._v("false")]),t._v(", that means there was an error changing directory:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("path "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npath.ok     "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# true")]),t._v("\npath        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /home/user or C:\\Users\\user")]),t._v("\n\nhere "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npath "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/path/to/nowhere"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\npath.ok         "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# false")]),t._v("\npath            "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 'chdir /path/to/nowhere: no such file or directory'")]),t._v("\nhere "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),t._v(" pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# true")]),t._v("\n\ncd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/git/abs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /home/user/git/abs or C:\\Users\\user\\git\\abs")]),t._v("\n\ncd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('".."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("        "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /home/user/git or C:\\Users\\user\\git")]),t._v("\n\ncd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/usr/local/bin"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /usr/local/bin")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("dirs")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token variable"}},[a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("ls")]),a("span",{pre:!0,attrs:{class:"token variable"}},[t._v("`")])]),t._v(".lines"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nlen"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("dirs"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("   "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# number of directories in homeDir")]),t._v("\n")])])]),a("h3",{attrs:{id:"echo-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#echo-var"}},[t._v("#")]),t._v(" echo(var)")]),t._v(" "),a("p",[t._v("Prints the given variable:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You can use use placeholders in your strings:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"hello %s"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("h3",{attrs:{id:"env-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#env-str"}},[t._v("#")]),t._v(" env(str)")]),t._v(" "),a("p",[t._v("Returns the "),a("code",[t._v("str")]),t._v(" environment variable:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("env"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"PATH"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "/go/bin:/usr/local/go/bin:/usr/local/sbin:/usr/local/bin:/usr/sbin:/usr/bin:/sbin:/bin"')]),t._v("\n")])])]),a("h3",{attrs:{id:"eval-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#eval-str"}},[t._v("#")]),t._v(" eval(str)")]),t._v(" "),a("p",[t._v("Evaluates the "),a("code",[t._v("str")]),t._v(" as ABS code:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("eval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"1 + 1"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 2")]),t._v("\neval"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'object = {\"x\": 10}; object.x'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 10")]),t._v("\n")])])]),a("h3",{attrs:{id:"exit-code-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#exit-code-message"}},[t._v("#")]),t._v(" exit(code [, message])")]),t._v(" "),a("p",[t._v("Exits the script with status "),a("code",[t._v("code")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("You can specify a message that's going to be outputted right\nbefore exiting:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("⧐  exit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("99")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Got problems..."')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nGot problems"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("h3",{attrs:{id:"flag-str"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#flag-str"}},[t._v("#")]),t._v(" flag(str)")]),t._v(" "),a("p",[t._v("Returns the value of a command-line flag. Both the "),a("code",[t._v("--flag")]),t._v(" and "),a("code",[t._v("-flag")]),t._v("\nform are accepted, and you can specify values with "),a("code",[t._v("--flag=x")]),t._v("\nas well as "),a("code",[t._v("--flag x")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ abs --test --test2 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" --test3"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v(" --test4 -test5\nHello user, welcome to the ABS programming language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quit'")]),t._v(" when you"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'re done, '")]),t._v("help' "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you get lost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test2"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test3"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test4"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test5"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v("\n⧐  flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"test6"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n⧐\n")])])]),a("p",[t._v("If a flag value is not set, it will default to "),a("code",[t._v("true")]),t._v(".\nThe value of a flag that does not exist is "),a("code",[t._v("NULL")]),t._v(".")]),t._v(" "),a("p",[t._v("In all other cases "),a("code",[t._v("flag(...)")]),t._v(" returns the literal string\nvalue of the flag:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ abs --number "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\nHello user, welcome to the ABS programming language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quit'")]),t._v(" when you"),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'re done, '")]),t._v("help' "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you get lost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n⧐  n "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" flag"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"number"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n⧐  n\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n⧐  type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\nSTRING\n")])])]),a("h3",{attrs:{id:"pwd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pwd"}},[t._v("#")]),t._v(" pwd()")]),t._v(" "),a("p",[t._v("Returns the path to the current working directory -- equivalent\nto "),a("code",[t._v('env("PWD")')]),t._v(".")]),t._v(" "),a("p",[t._v("If executed from a script this will initially be the directory\ncontaining the script.")]),t._v(" "),a("p",[t._v("To change the working directory, see "),a("code",[t._v("cd()")]),t._v(".")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("pwd"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# /go/src/github.com/abs-lang/abs")]),t._v("\n")])])]),a("h3",{attrs:{id:"rand-max"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rand-max"}},[t._v("#")]),t._v(" rand(max)")]),t._v(" "),a("p",[t._v("Returns a random integer number between 0 and "),a("code",[t._v("max")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("rand"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 7")]),t._v("\n")])])]),a("h3",{attrs:{id:"require-path-to-file-abs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#require-path-to-file-abs"}},[t._v("#")]),t._v(" require(path_to_file.abs)")]),t._v(" "),a("p",[t._v("Evaluates the script at "),a("code",[t._v("path_to_file.abs")]),t._v(", and makes\nits return value available to the caller.")]),t._v(" "),a("p",[t._v("For example, suppose we have a "),a("code",[t._v("module.abs")]),t._v(" file:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("adder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a, b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a + b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nmultiplier "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("a, b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" a * b "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"adder"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" adder, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"multiplier"')]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(":")]),t._v(" multiplier"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("and a "),a("code",[t._v("main.abs")]),t._v(" such as:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("mod "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" require"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"module.abs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\necho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("mod.adder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 3")]),t._v("\n")])])]),a("p",[t._v("This is mostly useful to create external library\nfunctions, like NPM modules or PIP packages, that\ndo not have access to the global environment. Any\nvariable set outside of the module will not be\navailable inside it, and vice-versa. The only\nvariable available to the caller (the script requiring\nthe module) is the module's return value.")]),t._v(" "),a("p",[t._v("Note that "),a("code",[t._v("require")]),t._v(" uses paths that are relative to\nthe current script. Say that you have 2 files ("),a("code",[t._v("a.abs")]),t._v(" and "),a("code",[t._v("b.abs")]),t._v(")\nin the "),a("code",[t._v("/tmp")]),t._v(" folder, "),a("code",[t._v("a.abs")]),t._v(" can "),a("code",[t._v('require("./b.abs")')]),t._v("\nwithout having to specify the full path (eg. "),a("code",[t._v('require("/tmp/b.abs")')]),t._v(").")]),t._v(" "),a("h3",{attrs:{id:"sleep-ms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sleep-ms"}},[t._v("#")]),t._v(" sleep(ms)")]),t._v(" "),a("p",[t._v("Halts the process for as many "),a("code",[t._v("ms")]),t._v(" you specified:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("sleep"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# sleeps for 1 second")]),t._v("\n")])])]),a("h3",{attrs:{id:"source-path-to-file-abs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#source-path-to-file-abs"}},[t._v("#")]),t._v(" source(path_to_file.abs)")]),t._v(" "),a("p",[t._v("Evaluates the script at "),a("code",[t._v("path_to_file.abs")]),t._v(" in the context of the\nABS global environment. The results of any expressions in the file\nbecome available to other commands in the REPL command line or to other\nscripts in the current script execution chain.")]),t._v(" "),a("p",[t._v("This is very similar to "),a("code",[t._v("require")]),t._v(", but allows the module to access\nand edit the global environment. Any variable set inside the module\nwill also be available outside of it.")]),t._v(" "),a("p",[t._v("This is most useful for creating library functions in a startup script,\nor variables that can be used by many other scripts. Often these library functions\nare loaded via the ABS Init File "),a("code",[t._v("~/.absrc")]),t._v(" (see "),a("a",{attrs:{href:"/introduction/how-to-run-abs-code"}},[t._v("ABS Init File")]),t._v(").")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/abs/lib/library.abs\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Useful function library ~/abs/lib/library.abs")]),t._v("\nadder "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" f"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("n, i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" n + i "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n$ "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("cat")]),t._v(" ~/.absrc\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# ABS init file ~/.absrc")]),t._v("\nsource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/abs/lib/library.abs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n$ abs\nHello user, welcome to the ABS programming language"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\nType "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'quit'")]),t._v(" when you are done, "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'help'")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" you get lost"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),t._v("\n⧐ adder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v(", "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("3")]),t._v("\n⧐\n")])])]),a("p",[t._v("In addition to source file inclusion in scripts, you can also use\n"),a("code",[t._v("source()")]),t._v(" in the interactive REPL to load a script being\ndebugged. When the loaded script completes, the REPL command line\nwill have access to all variables and functions evaluated in the\nscript.")]),t._v(" "),a("p",[t._v("For example:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("⧐  source"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/git/abs/tests/test-strings.abs"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("==")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">>")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" Testing "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),t._v(" and "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),t._v(" strings with expanded LFs:\ns "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" split"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v("b"),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('c"')]),t._v(", "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"'),a("span",{pre:!0,attrs:{class:"token entity",title:"\\n"}},[t._v("\\n")]),t._v('"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\necho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a, b, c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n⧐  s\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("a, b, c"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n⧐\n")])])]),a("p",[t._v("Note well that nested source files must not create a circular\ninclusion condition. You can configure the intended source file\ninclusion depth using the "),a("code",[t._v("ABS_SOURCE_DEPTH")]),t._v(" OS or ABS environment\nvariables. The default is "),a("code",[t._v("ABS_SOURCE_DEPTH=10")]),t._v(". This will prevent\na panic in the ABS interpreter if there is an unintended circular\nsource inclusion.")]),t._v(" "),a("p",[t._v("For example an ABS Init File may contain:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("ABS_SOURCE_DEPTH "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("15")]),t._v("\nsource"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"~/path/to/abs/lib"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("p",[t._v("This will limit the source inclusion depth to 15 levels for this\n"),a("code",[t._v("source()")]),t._v(" statement and will also apply to future "),a("code",[t._v("source()")]),t._v("\nstatements until changed.")]),t._v(" "),a("h3",{attrs:{id:"stdin"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#stdin"}},[t._v("#")]),t._v(" stdin()")]),t._v(" "),a("p",[t._v("Reads from the "),a("code",[t._v("stdin")]),t._v(":")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"What do you like?"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\necho"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Oh, you like %s!"')]),t._v(", stdin"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("))")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# This line will block until user enters some text")]),t._v("\n")])])]),a("p",[t._v("Worth to note that you can read\nthe "),a("code",[t._v("stdin")]),t._v(" indefinitely with:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Will read all input to the")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# stdin and output it back")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" stdin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("input"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Or from the REPL:")]),t._v("\n\n⧐  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token for-or-select variable"}},[t._v("input")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" stdin "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" echo"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("((")]),t._v("input.int"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" / "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".str"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" + "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"...try again:"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("10")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".try again:\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2.5")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".try again:\n\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(".\n")])])]),a("h3",{attrs:{id:"type-var"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#type-var"}},[t._v("#")]),t._v(" type(var)")]),t._v(" "),a("p",[t._v("Returns the type if the given variable:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("type"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('""')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "STRING"')]),t._v("\ntype"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v('# "HASH"')]),t._v("\n")])])]),a("h3",{attrs:{id:"unix-ms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#unix-ms"}},[t._v("#")]),t._v(" unix_ms()")]),t._v(" "),a("p",[t._v("Returns the current unix epoch time, in milliseconds:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("unix_ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 1594049453157")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);