import eslint from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsparser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';
import tailwindPlugin from 'eslint-plugin-tailwindcss';
import twdxPlugin from './eslint-rules/index.js';

export default [
  {
    ignores: ['dist/**', 'node_modules/**', 'test/**']
  },
  eslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      parser: tsparser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true
        }
      },
      globals: {
        document: 'readonly',
        window: 'readonly'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
      'tailwindcss': tailwindPlugin,
      'twdx': twdxPlugin
    },
    rules: {
      'tailwindcss/classnames-order': 'error',
      'tailwindcss/no-custom-classname': 'error',
      'tailwindcss/no-contradicting-classname': 'error',
      'twdx/layers': 'error',
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off'
    },
    settings: {
      react: {
        version: 'detect'
      },
      tailwindcss: {
        config: './tailwind.config.js',
        classGroups: {
          layout: ['flex', 'grid', 'block', 'inline', 'items-*', 'justify-*'],
          spacing: ['p-*', 'm-*', 'gap-*', 'space-*'],
          effects: ['shadow-*', 'opacity-*', 'blur-*'],
          borders: ['rounded-*', 'border-*'],
          typography: ['font-*', 'tracking-*', 'leading-*', 'text-*']
        }
      }
    }
  }
]; 