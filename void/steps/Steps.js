var Do = require( './Actions' );


var Steps = {

  first: {

    'src/lexer.coffee': [

      Do.replace(

        '  ?: [-=]>             # function',
        '  ?: [-=]>=?           # function'
      
      ),
      Do.replace(

        'CODE       = /^[-=]>/',
        'CODE       = /^[-=]>=?/'

      )

    ],

    'src/grammar.coffee': [

      Do.append(

        "    o '=>',                                     -> 'boundfunc'",
        [
        "    o '->=',                                    -> 'returnfunc'",
        "    o '=>=',                                    -> 'returnboundfunc'"
        ]
      
      )

    ],

    'src/rewriter.coffee': [

      Do.replace(

        "        if prevTag not in ['=>', '->', '[', '(', ',', '{', 'TRY', 'ELSE', '=']",
        "        if prevTag not in ['=>', '->', '=>=', '->=', '[', '(', ',', '{', 'TRY', 'ELSE', '=']"

      ),
      Do.replace(

        "      not (token[0] in ['CATCH', 'FINALLY'] and starter in ['->', '=>']) or",
        "      not (token[0] in ['CATCH', 'FINALLY'] and starter in ['->', '=>', '->=', '=>=']) or"

      ),
      Do.replace(

        "  '@', '->', '=>', '[', '(', '{', '--', '++'",
        "  '@', '->', '=>', '->=', '=>=', '[', '(', '{', '--', '++'"

      ),
      Do.replace(

        "SINGLE_LINERS    = ['ELSE', '->', '=>', 'TRY', 'FINALLY', 'THEN']",
        "SINGLE_LINERS    = ['ELSE', '->', '=>', '->=', '=>=', 'TRY', 'FINALLY', 'THEN']"

      )

    ]

  },

  second: {

    'src/nodes.coffee': [

      Do.replace(

        "    @bound       = tag is 'boundfunc'",
        "    @bound       = tag is 'boundfunc' or tag is 'returnboundfunc'"
      
      ),
      Do.append(

        "    @bound       = tag is 'boundfunc' or tag is 'returnboundfunc'",
        [
        "    @noReturn    = tag is 'func' or tag is 'boundfunc'"
        ]

      )

    ]

  }

};


module.exports = Steps;
