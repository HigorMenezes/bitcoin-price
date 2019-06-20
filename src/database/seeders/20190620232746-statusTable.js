module.exports = {
  up: queryInterface => {
    return queryInterface.bulkInsert(
      'status',
      [
        {
          id: 100,
          name: 'active',
          description: 'indicates that is active',
        },
        {
          id: 200,
          name: 'pendding',
          description: 'indicates that is pendding',
        },
        {
          id: 300,
          name: 'inactive',
          description: 'indicates that is inactive',
        },
      ],
      {},
    );
  },

  down: queryInterface => {
    return queryInterface.bulkDelete(
      'status',
      [
        {
          id: 100,
          name: 'active',
          description: 'indicates that is active',
        },
        {
          id: 200,
          name: 'pendding',
          description: 'indicates that is pendding',
        },
        {
          id: 300,
          name: 'inactive',
          description: 'indicates that is inactive',
        },
      ],
      {},
    );
  },
};
