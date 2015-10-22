# CoffeeScript-Void

~~~coffee
# the only difference from coffeescript is that there are
# no more implicit returns

x = -> 3 # var x = function () { 3; }
x = ->= 3 # var x = function () { return 3; }
x = -> return 3 # var x = function () { return 3; }

# by adding '=' after '->' you keep original coffeescript behaviour
# same rules apply to bound arrows (=>)
~~~

            {
         }   }   {
        {   {  }  }
         }   }{  {
        {  }{  }  }                    _____       __  __
       { }{ }{  { }                   / ____|     / _|/ _|
     .- { { }  { }} -.               | |     ___ | |_| |_ ___  ___
    (  { } { } { } }  )              | |    / _ \|  _|  _/ _ \/ _ \
    |`-..________ ..-'|              | |___| (_) | | | ||  __/  __/
    |                 |               \_____\___/|_| |_| \___|\___|
    |                 ;--.
    |                (__  \            _____           _       _
    |                 | )  )          / ____|         (_)     | |
    |                 |/  /          | (___   ___ _ __ _ _ __ | |_
    |                 (  /            \___ \ / __| '__| | '_ \| __|
    |                 |/              ____) | (__| |  | | |_) | |_
    |                 |              |_____/ \___|_|  |_| .__/ \__|
     `-.._________..-'                                  | |
                                                        |_|

CoffeeScript is a little language that compiles into JavaScript.

## Installation

If you have the node package manager, npm, installed:

```shell
npm install -g coffee-script-void
```

Leave off the `-g` if you don't wish to install globally.

## Getting Started

Execute a script:

```shell
coffee-void /path/to/script.coffee
```

Compile a script:

```shell
coffee-void -c /path/to/script.coffee
```

To suggest a feature or report a bug: http://github.com/coffee-void/coffeescript/issues

The source repository: https://github.com/coffee-void/coffeescript.git
