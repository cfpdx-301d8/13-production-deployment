(function(module) {
  var repoView = {};

  var repoCompiler = Handlebars.compile($('#repo-template').text());
  var followersCompiler = Handlebars.compile($('#followers-template').text());

  repoView.renderRepos = function() {
    $('#about ul').empty().append(
      reposObj.withTheAttribute('name')
      .map(repoCompiler)
    );
    if(reposObj.followers ){
      $('#about .followers').empty().append(
        reposObj.followers.map(followersCompiler)
      );
    }
  };
  reposObj.requestRepos(repoView.renderRepos);

  module.repoView = repoView;
})(window);
