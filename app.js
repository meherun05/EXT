/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({
    extend: 'CRUD.Application',

    name: 'CRUD',

    requires: [
        // This will automatically load all classes in the CRUD namespace
        // so that application classes do not need to require each other.
        'CRUD.*'
    ],

    // The name of the initial view to create.
    mainView: 'CRUD.view.main.Main'
});
