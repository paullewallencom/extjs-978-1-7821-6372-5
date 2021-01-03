Ext.define('3725OS.store.DummyStore', {
    extend: 'Ext.data.Store',
    storeId:'dummyStore',
    fields:['name', {name:'birthdate', type:'date'}, 'phone', 'attending', {name: 'salary', type: 'int'}],
    data:{'items':[
        {"name":"Abdullah", "birthdate":"07/31/1984", "phone":"555-111-1224", "attending":true, salary:50000},
        {"name":"Tazmin", "birthdate":"07/18/2011", "phone":"555-222-1234", "attending":false, salary:50000},
        {"name":"Sazid", "birthdate":"09/29/2006", "phone":"555-222-1244", "attending":true, salary:20000},
        {"name":"Runa", "birthdate":"10/23/1981", "phone":"555-222-1254", "attending":false, salary:10000}
    ]},
    proxy: {
        type: 'memory',
        reader: {
            type: 'json',
            root: 'items'
        }
    }
});