(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];



  reposObj.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/MartinPelayo/repos',{
      method: 'GET',
      headers: {
        Authorization: 'token ' //+ process.env.AUTH_TOKEN 
      }
    })
         
         
         
         
         
          .done(function(data) {
            reposObj.allRepos = data;
          }).done(callback);
  };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
