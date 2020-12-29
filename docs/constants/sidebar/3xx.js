module.exports = {
  three: [
    '',
    {
      title: 'Setup',
      collapsable: true,
      children: [
        'installation',
        'configuration',
        'test'
      ]
    },
    {
      title: 'Guide',
      collapsable: true,
      children: [
        {
          title: 'CRUD Functionalities',
          collapsable: true,
          children: [
            'create-function',
            'read-function',
            'update-function',
            'delete-function'
          ]
        },
        {
          title: 'DATES',
          collapsable: true,
          children: [
            'dates',
          ]
        },
      ]
    },
    {
      title: 'Association',
      collapsable: true,
      children: [
        'hasMany',
        'embeds-one',
        'embeds-many'
      ]
    },
    'schema',
    'extending'
  ]
}