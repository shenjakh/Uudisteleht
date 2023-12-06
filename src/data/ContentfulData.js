const contentful = require('contentful')

// const client = contentful.createClient({
//   space: 'm1rhl7x6p2pq',
//   environment: 'master',
//   accessToken: 'G6P9g935A7-CxYb1DAcZE0d3VKfdff7CrH5NHhtwL5Y'
// })

      // const entry1 = await client.getEntry('qpw5XAO2M2gNLj9RV811u');
      // const entry2 = await client.getEntry('2ZvrvIgnlTjBGX7uOXlo9d');



        const client = contentful.createClient({
        space: 'm1rhl7x6p2pq',
        environment: 'master',
        accessToken: 'G6P9g935A7-CxYb1DAcZE0d3VKfdff7CrH5NHhtwL5Y'
      })
      
      async function fetchData(entryKeys) {
        try {
          const dataPromises = entryKeys.map(async (entryKey) => {
            const entry = await client.getEntry(entryKey);
            const imagePath = 'https:' + entry.fields.pilt.fields.file.url;
            const title = entry.fields.nimi;
      
            return { imagePath, title };
          });
      
          const dataArray = await Promise.all(dataPromises);
          return dataArray;
        } catch (error) {
          console.error(error);
          return null;
        }
      }
      
      module.exports = fetchData;