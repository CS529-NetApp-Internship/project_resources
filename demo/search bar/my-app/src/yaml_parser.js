import raw from 'raw.macro';

const yaml = require('js-yaml');
var config = yaml.load(raw('./swagger.yaml'));

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
// console.log(parse())
export default parse;







