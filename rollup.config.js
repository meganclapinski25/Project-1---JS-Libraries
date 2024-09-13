import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',
  output: {
    file: production ? 'dist/my-library.min.js' : 'dist/my-library.js',
    format: 'umd',
    name: 'MyLibrary',
    sourcemap: true,
    },  
  plugins: [
    resolve(),                      // Resolves modules from node_modules
    commonjs(),                     // Converts CommonJS modules to ES6
    typescript({                    // TypeScript compilation
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true // Use the declaration directory specified in tsconfig.json
    })
  ]
};
