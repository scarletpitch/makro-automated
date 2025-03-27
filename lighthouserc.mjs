export default {
  ci: {
    collect: {
      url: ['https://maknet-webapp.mango-qa.siammakro.cloud/en'],
      numberOfRuns: 1
    },
    upload: {
      target: 'temporary-public-storage'
    },
    assert: {
      assertions: {
        'categories:performance': ['warn', { minScore: 0.8 }]
      }
    }
  }
}
