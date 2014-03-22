require.config({

    paths:{
        jquery: 'lib/jquery/dist/jquery'
    },
    shim:{
        jquery:{
            exports:'jQuery'
        }
    }
});

requirejs(["main"]);
