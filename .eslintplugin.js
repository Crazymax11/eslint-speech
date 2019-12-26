const noRestrictedSyntaxRule = require('eslint/lib/rules/no-restricted-syntax');

module.exports = {
    rules: {
        'strict-names': {
            create(context) {
                return {
                    'TSInterfaceDeclaration[id.name="Props"] TSMethodSignature[returnType.typeAnnotation.typeName.name="ReactNode"][key.name!=/render/]'(node) {
                        console.log(node);
                        if (Math.random() > 0.5)
                            context.report({
                                node: node.parent,
                                message: 'ты не прав'
                            })
                    }
                }
            }
        },
        'no-restricted-proxy': noRestrictedSyntaxRule,
        'no-restricted-proxy-2': noRestrictedSyntaxRule
    }
}

function createSimpleRule(selector, message) {
    return {
        create(context) {
            return {
                [selector]: node => context.report({node, message})
            }
        }
    }
}