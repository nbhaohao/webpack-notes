const fs = require("fs");
const path = require("path");
const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const babel = require("@babel/core");

const isObjectEmpty = obj => Object.keys(obj).length === 0;

const iterateObject = (obj, callback) => {
  for (const key in obj) {
    callback(obj[key], key);
  }
};

const transObjectToString = str => JSON.stringify(str);

const transFileCodeToAst = filename => {
  const content = fs.readFileSync(filename, "utf-8");
  return parser.parse(content, {
    sourceType: "module"
  });
};

const analyserModuleDependencies = (ast, filename) => {
  const dependencies = {};
  traverse(ast, {
    ImportDeclaration({ node }) {
      const dirname = path.dirname(filename);
      const relativePath = node.source.value;
      dependencies[relativePath] = `./${path.join(dirname, relativePath)}`;
    }
  });
  return dependencies;
};

const transEs6CodeToEs5 = ast => {
  const { code } = babel.transformFromAst(ast, null, {
    presets: ["@babel/preset-env"]
  });
  return code;
};

const moduleAnalyser = filename => {
  const ast = transFileCodeToAst(filename);
  const dependencies = analyserModuleDependencies(ast, filename);
  const code = transEs6CodeToEs5(ast);
  return {
    filename,
    dependencies,
    code
  };
};

const makeModuleDependenciesGraph = (entry, saveObject) => {
  const entryModule = moduleAnalyser(entry);
  const deps = entryModule.dependencies;
  const { filename, ...props } = entryModule;
  saveObject[filename] = props;
  if (isObjectEmpty(deps)) {
    return;
  }
  iterateObject(deps, value => {
    makeModuleDependenciesGraph(value, saveObject);
  });
};

const makeProjectDependenciesGraph = entry => {
  const graph = {};
  makeModuleDependenciesGraph(entry, graph);
  console.log('graph', graph)
  return graph;
};

const generateCode = entry => {
  const graph = transObjectToString(makeProjectDependenciesGraph(entry));
  return `
    (function(graph){
      function require(module) {
        function localRequire(relativePath) {
          return require(graph[module].dependencies[relativePath])
        }
        var exports = {};
        (function(require, exports, code){
          eval(code)
        })(localRequire, exports, graph[module].code)
        return exports
      };
      require('${entry}')
    })(${graph})
  `;
};

const __main = entry => {
  const code = generateCode(entry);
  console.log(code);
};

__main("./src/index.js");
