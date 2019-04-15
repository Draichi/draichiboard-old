// https://vuex.vuejs.org/en/mutations.html

export default {
  setLoading (state, payload) {
    state.loading = payload
  },
  setPortfolioList (state, payload) {
    state.portfolioList = payload
  },
  setCryptoPrediction (state, payload) {
    state.cryptoPrediction = payload
  },
  setPortfolioListStats (state, payload) {
    state.portfolioListStats = payload
  },
  setPortfolioContributors (state, payload) {
    state.portfolioContributors = payload
  },
  setCryptoPredictionStats (state, payload) {
    state.cryptoPredictionStats = payload
  },
  setCryptoPredictionContributors (state, payload) {
    state.cryptoPredictionContributors = payload
  }
}
