var future = Npm.require('fibers/future');
var exec = Npm.require('child_process').exec;


var shell = new Jubo.connect();
shell.whoami('STWSNa5GHcn9Ze4KR', '86227', function(error) {
  console.log('connect to jubo error');
});

Meteor.methods({
  jsh: function (command) {
    var shell = new future();

    exec(command,function(error,stdout,stderr){
      if(error) 
        shell.return('' + error);
      else
        shell.return('' + stdout);
    });

    return shell.wait();
  }
});

