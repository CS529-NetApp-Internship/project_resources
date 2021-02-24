const yaml = require('js-yaml');
const fs = require('fs');

var config = yaml.load(fs.readFileSync('../data/swagger.yaml', 'utf8'));

const parse = function() {  
  var state = {
    endpoints: [],
    searchTerm: "",
  }
  
  for (var key in config.paths) {
  
      for(var nest_key in config.paths[key]){
  
          state.endpoints.push({id:key,type:nest_key,desc:"description"})
          
        }
        
      }
  return state
}
console.log(parse())
// export default parse;




