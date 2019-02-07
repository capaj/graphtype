import typescript from 'rollup-plugin-typescript2'

export default {
  input: './src/index.ts',
  plugins: [
    typescript({
      tslib: require('tslib')
    })
  ],
  external: (id) => !id.startsWith('.') && !id.startsWith('/'),
  output: [
    {
      file: 'dist/index.es.js',
      format: 'es',
      sourcemap: true
    }
  ]
}
