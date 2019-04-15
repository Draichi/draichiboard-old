// https://vuex.vuejs.org/en/getters.html

export default {
  loading  (state) {
    return state.loading
  },
  portfolioList (state) {
    return state.portfolioList
  },
  cryptoPrediction (state) {
    return state.cryptoPrediction
  },
  portfolioListStats (state) {
    return state.portfolioListStats
  },
  portfolioContributors (state) {
    return state.portfolioContributors
  },
  cryptoPredictionStats (state) {
    return state.cryptoPredictionStats
  },
  cryptoPredictionContributors (state) {
    return state.cryptoPredictionContributors
  }
}
