export default {
    name: 'pin',
    title: 'Pin',
    type: 'document',
    fields: [
        {
            name: 'title',
            type: 'Title',
            type: 'string'
        },
        {
            name: 'about',
            type: 'About',
            type: 'string'
        },
        {
            name: 'destination',
            type: 'Destination',
            type: 'url'
        },
        {
            name: 'category',
            type: 'Category',
            type: 'string'
        },
        {
            name: 'image',
            type: 'Image',
            type: 'image',
            options: {
                hotspot: true
            }
        },
        {
            name: 'userID',
            type: 'UserID',
            type: 'string'
        },
        {
            name: 'postedBy',
            type: 'PostedBy',
            type: 'postedBy'
        },
        {
            name: 'save',
            type: 'Save',
            type: 'array',
            of: [{type: 'save'}]
        },
        {
            name: 'comments',
            type: 'Comments',
            type: 'array',
            of: [{type: 'comment'}]
        },
        
    ]
}