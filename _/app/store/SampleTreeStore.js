Ext.define('3725OS.store.SampleTreeStore', {
    extend: 'Ext.data.TreeStore',
    storeId:'sampleTreeStore',
    root: {
        text: 'Users',
        expanded: true,
        children: [
            {
                "text": "Abdullah",
                "id": "1",
                "cls": "folder",
                "children": [
                    {
                        "text": "07/31/1984",
                        "id": "1-1",
                        "cls": "file",
                        "leaf": true
                    }, {
                        "text": "555-111-1224",
                        "id": "1-2",
                        "cls": "file",
                        "leaf": true
                    }
                ]
            }, {
                "text": "Tazmin",
                "id": "2",
                "cls": "folder",
                "children": [
                    {
                        "text": "07/18/2011",
                        "id": "2-1",
                        "cls": "file",
                        "leaf": true
                    }, {
                        "text": "555-111-1234",
                        "id": "2-2",
                        "cls": "file",
                        "leaf": true
                    }
                ]
            }, {
                "text": "Sazid",
                "id": "3",
                "cls": "folder",
                "children": [
                    {
                        "text": "09/29/2006",
                        "id": "3-1",
                        "cls": "file",
                        "leaf": true
                    }, {
                        "text": "555-111-1244",
                        "id": "3-2",
                        "cls": "file",
                        "leaf": true
                    }
                ]
            }, {
                "text": "Runa",
                "id": "4",
                "cls": "folder",
                "children": [
                    {
                        "text": "10/23/1987",
                        "id": "4-1",
                        "cls": "file",
                        "leaf": true
                    }, {
                        "text": "555-111-1254",
                        "id": "4-2",
                        "cls": "file",
                        "leaf": true
                    }
                ]
            }
        ]
    },
    folderSort: true,
    sorters: [{
        property: 'text',
        direction: 'ASC'
    }]
});