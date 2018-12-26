// https://eslint.org/docs/user-guide/configuring

module.exports = {
    root: true,
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: 'babel-eslint',
        ecmaVersion: 6,
        sourceType: 'module'
    },
    env: {
        browser: true,
        node: true,
        es6: true,
        mocha: true
    },
    extends: ['plugin:vue/recommended', 'standard'],
    // parserOptions: {
    //     parser: 'babel-eslint'
    // },
    // env: {
    //     browser: true
    // },
    // https://github.com/vuejs/eslint-plugin-vue#priority-a-essential-error-prevention
    // consider switching to `plugin:vue/strongly-recommended` or `plugin:vue/recommended` for stricter rules.
    // extends: ['plugin:vue/essential'],
    // required to lint *.vue files
    plugins: ['vue'],
    // add your custom rules here
    rules: {
        // allow debugger during development
        'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
        'no-undef': 0, // 未定义校验
        'space-before-function-paren': ['error', 'never'], // 函数声明时括号与函数名间加空格，不允许有空格
        indent: [
            'error',
            4,
            {
                SwitchCase: 1,
                MemberExpression: 1
            }
        ], // 使用四个空格进行缩进
        semi: ['error', 'always'], // 结束语句需要分号
        'arrow-parens': 0,
        'arrow-body-style': ['error', 'as-needed'],
        'generator-star-spacing': 0, // allow async-await
        'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0, // 开发允许debugger，生产报错
        'no-new': 0, // new 创建对象实例后需要赋值给变量
        'space-unary-ops': 0, // 一元运算符后面跟一个空格
        'func-call-spacing': 0,
        'no-useless-escape': 0, // 禁用不必要的转义
        'standard/computed-property-even-spacing': 0,
        'vue/html-indent': ['error', 4],
        'vue/require-default-prop': 0,
        'vue/require-prop-types': 0, // props定义类型
        'vue/no-side-effects-in-computed-properties': 0,
        'vue/no-confusing-v-for-v-if': 0,
        'vue/prop-name-casing': ['error', 'camelCase'],
        'vue/html-closing-bracket-spacing': 'error',
        'vue/html-self-closing': [
            'error',
            {
                html: {
                    void: 'never',
                    normal: 'any',
                    component: 'any'
                }
            }
        ]
    }
};
