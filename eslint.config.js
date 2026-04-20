import js from '@eslint/js'
import tslintPlugin from '@typescript-eslint/eslint-plugin'
import tslintParser from '@typescript-eslint/parser'
import { defineConfig } from 'eslint/config'
import pluginReact from 'eslint-plugin-react'
import simpleImportSort from 'eslint-plugin-simple-import-sort'
import globals from 'globals'

export default defineConfig([
  js.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    files: ['**/*.{js,mjs,cjs,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': tslintPlugin,
      'simple-import-sort': simpleImportSort
    },
    languageOptions: {
      globals: globals.browser,
      parser: tslintParser,
    },
    rules: {
      ...tslintPlugin.configs.recommended.rules,
      semi: ['error', 'never'],
      quotes: ['error', 'single'],
      'react/react-in-jsx-scope': 'off',
      'simple-import-sort/imports': 'error',
      'simple-import-sort/exports': 'error',
    }
  },
])
