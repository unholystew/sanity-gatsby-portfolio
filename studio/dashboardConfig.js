export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '622f959ac2f6084f187a97a3',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-ofy6dzdc',
                  apiId: 'e4f602be-cdf9-433a-a4d6-b2ea88c371ec'
                },
                {
                  buildHookId: '622f959a2d0dfc4e8a10ae55',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-qqvbgqu1',
                  apiId: '7dfeaf54-01db-4dfa-9437-258d71e9596f'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/unholystew/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-qqvbgqu1.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
