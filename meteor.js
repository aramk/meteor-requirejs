if (Meteor.isServer) {
    requirejs.enableAmd = function() {
        define._amd = define.amd;
        delete define.amd;
    };
    // Useful to prevent node modules on the server from registering as RequireJS modules when they
    // are imported with NodeJS require() calls.
    requirejs.disableAmd = function() {
        define.amd = define._amd;
        delete define._amd;
    };
}
