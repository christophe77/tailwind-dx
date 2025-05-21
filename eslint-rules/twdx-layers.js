export default {
  meta: {
    type: 'problem',
    docs: {
      description: 'Enforce proper class placement in twDX layers',
      category: 'Possible Errors',
      recommended: true,
    },
    schema: [],
  },
  create(context) {
    const classGroups = {
      layout: ['flex', 'grid', 'block', 'inline', 'items-', 'justify-'],
      spacing: ['p-', 'm-', 'gap-', 'space-'],
      effects: ['shadow-', 'opacity-', 'blur-'],
      borders: ['rounded-', 'border-'],
      typography: ['font-', 'tracking-', 'leading-', 'text-lg', 'text-base', 'text-sm', 'text-xs', 'text-xl', 'text-2xl', 'text-3xl', 'text-4xl', 'text-5xl', 'text-6xl', 'text-7xl', 'text-8xl', 'text-9xl'],
    };

    function getLayerForClass(className) {
      // First check for exact matches
      for (const [layer, classes] of Object.entries(classGroups)) {
        if (classes.includes(className)) {
          return layer;
        }
      }

      // Then check for prefixes
      for (const [layer, prefixes] of Object.entries(classGroups)) {
        if (prefixes.some(prefix => className.startsWith(prefix))) {
          return layer;
        }
      }

      return null;
    }

    function validateClasses(node, layer, classString) {
      if (!classString) return;

      const classes = classString.split(' ');
      classes.forEach(className => {
        const correctLayer = getLayerForClass(className);
        if (correctLayer && correctLayer !== layer) {
          context.report({
            node,
            message: `Class "${className}" should be in the "${correctLayer}" layer, not "${layer}"`,
          });
        }
      });
    }

    return {
      CallExpression(node) {
        if (node.callee.name === 'twDX') {
          const arg = node.arguments[0];
          if (arg && arg.type === 'ObjectExpression') {
            arg.properties.forEach(prop => {
              if (prop.key && prop.value) {
                const layer = prop.key.name;
                const classString = prop.value.value;
                validateClasses(prop, layer, classString);
              }
            });
          }
        }
      },
    };
  },
}; 