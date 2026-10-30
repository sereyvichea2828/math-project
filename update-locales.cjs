const fs = require('fs');

function updateEn() {
  let content = fs.readFileSync('src/locales/en.js', 'utf8');
  content = content.replace(
    "subtitle: 'Solve linear systems using exact methods or least squares approximation for overdetermined systems.',",
    "subtitle: 'Solve linear systems using exact methods or least squares approximation for overdetermined systems.',\n    models: 'Special Models',\n    model1: 'Model 1: Unique Solution',\n    model2: 'Model 2: Multiple Solutions',\n    model3: 'Model 3: Least Squares (No Answer)',"
  );
  content = content.replace(
    "resultX: 'Result: x =\\n{matrix}'",
    "resultX: 'Result: x =\\n{matrix}',\n      multipleSolutions: 'Infinite Solutions / Free Variables detected!',\n      errorVector: 'Error Vector (e = b - Ax):\\n{matrix}',\n      normError: 'Norm of Error (||e||): {norm}',\n      percentageError: 'Percentage Error (||e|| / ||b||): {percent}%',\n      errorHighWarning: '⚠️ Warning: Error is {percent}% (Above 25% threshold)'"
  );
  fs.writeFileSync('src/locales/en.js', content);
}

function updateKm() {
  let content = fs.readFileSync('src/locales/km.js', 'utf8');
  content = content.replace(
    "subtitle: 'ដោះស្រាយប្រព័ន្ធសមីការលីនេអ៊ែរតាមវិធីសាស្ត្រពិតប្រាកដ ឬការប៉ាន់ស្មាន Least squares សម្រាប់ប្រព័ន្ធកំណត់លើស។',",
    "subtitle: 'ដោះស្រាយប្រព័ន្ធសមីការលីនេអ៊ែរតាមវិធីសាស្ត្រពិតប្រាកដ ឬការប៉ាន់ស្មាន Least squares សម្រាប់ប្រព័ន្ធកំណត់លើស។',\n    models: 'គំរូពិសេស',\n    model1: 'គំរូទី១៖ ចម្លើយតែមួយគត់',\n    model2: 'គំរូទី២៖ ចម្លើយច្រើន',\n    model3: 'គំរូទី៣៖ គ្មានចម្លើយពិតប្រាកដ (Least Square)',"
  );
  content = content.replace(
    "resultX: 'លទ្ធផល: x =\\n{matrix}',",
    "resultX: 'លទ្ធផល: x =\\n{matrix}',\n      multipleSolutions: 'ករណីមានចម្លើយច្រើន (អថេរសេរី)!',\n      errorVector: 'វ៉ិចទ័រកំហុស (e = b - Ax):\\n{matrix}',\n      normError: 'ណមនៃកំហុស (||e||): {norm}',\n      percentageError: 'ភាគរយកំហុស (||e|| / ||b||): {percent}%',\n      errorHighWarning: '⚠️ ចំណាំ៖ កំហុសមានចំនួន {percent}% (លើសពី 25%)'"
  );
  fs.writeFileSync('src/locales/km.js', content);
}

updateEn();
updateKm();
