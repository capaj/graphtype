import typescript from 'rollup-plugin-typescript2'

export default {
  inputs: './src/index.ts',
  plugins: [
    typescript({
      tslib: require('tslib')
    })
  ],
  external: (id) => !id.startsWith('.') && !id.startsWith('/'),
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      name: 'graphtype',
      sourcemap: true
    },
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ]
}
