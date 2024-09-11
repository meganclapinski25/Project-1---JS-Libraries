import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

export default {
  input: 'src/index.ts',  // Entry point (main file to bundle)
  output: [
    {
      file: 'dist/bundle.umd.js',   // Output for UMD format
      format: 'umd',                // Universal Module Definition
      name: 'MyLibrary',            // Global name in UMD builds
      sourcemap: true,
    },
    {
      file: 'dist/bundle.esm.js',   // Output for ESM format
      format: 'es',                 // ES Module format
      sourcemap: true,
    }
  ],
  plugins: [
    resolve(),                      // Resolves modules from node_modules
    commonjs(),                     // Converts CommonJS modules to ES6
    typescript({                    // TypeScript compilation
      tsconfig: './tsconfig.json',
      useTsconfigDeclarationDir: true // Use the declaration directory specified in tsconfig.json
    })
  ]
};
