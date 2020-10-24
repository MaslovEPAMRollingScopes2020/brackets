module.exports = function check(str, bracketsConfig) {
  let flag = true;
  let findingPosition = -1;
  let i;
  for(; str.length > 0;){
    
    for(i = 0; i < bracketsConfig.length; i++){
      findingPosition = str.indexOf(bracketsConfig[i].join(''));
      if(findingPosition !== -1){
        break;
      }
    }

    if(findingPosition === -1){
      return false;
    }

    str = str.split('');
    str.splice(findingPosition, 2);
    str = str.join('');
  }

  return true;
}
