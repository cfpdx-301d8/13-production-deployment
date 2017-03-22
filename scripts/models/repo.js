(function(module) {
  var reposObj = {};

  reposObj.allRepos = [];

  reposObj.requestRepos = function(callback) {
    $.ajax('https://api.github.com/users/neverssync/repos', {
      method: 'GET',
      headers: {
        Authorization: `token ${process.env.GITHUB_TOKEN}`
      }
    })
    .done(function(data) {
      reposObj.allRepos = data;
    })
    .done(callback);
  }
  //   $.get('/github/users/codefellows-portland-301d7/repos' +
  //         '?per_page=10&sort=updated')
  //         .done(function(data) {
  //           reposObj.allRepos = data;
  //         }).done(callback);
  // };

  reposObj.withTheAttribute = function(attr) {
    return reposObj.allRepos.filter(function(aRepo) {
      return aRepo[attr];
    });
  };

  module.reposObj = reposObj;
})(window);
