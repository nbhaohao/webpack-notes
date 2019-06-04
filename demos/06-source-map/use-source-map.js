const fs = require('fs');
const SourceMap = require('source-map');

const { readFileSync } = fs;
const { SourceMapConsumer } = SourceMap;

const rawSourceMap = JSON.parse(readFileSync('./main.js.map', 'utf8'));

SourceMapConsumer.with(rawSourceMap, null, consumer => {
  const pos = consumer.originalPositionFor({
    line: 1,
    column: 1132
  });

  console.log(pos);
});