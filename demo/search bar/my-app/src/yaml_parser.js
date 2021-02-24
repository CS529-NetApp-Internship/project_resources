import raw from 'raw.macro';

const yaml = require('js-yaml');
var config = yaml.load(raw('../data/swagger.yaml'));

const parse = function() {
  var state = {
    endpoints: [],
    searchTerm: "",
  }
  
  for (var operation in config.paths) {
  
      for(var method in config.paths[operation]){
  
          state.endpoints.push({id:operation,type:method,desc:"description"})
          
        }
        
      }
  return state
}
// console.log(parse())
export default parse;







