// https://vuex.vuejs.org/en/actions.html
import axios from 'axios'

export default {
  getGuthubData ({commit}) {
    commit('setLoading', true)
    let cryptoPredictionAdditions = {labels: [], series: [[]]}
    let cryptoPredictionDeletions = {labels: [], series: [[]]}
    let cryptoPredictionCommits = {labels: [], series: [[]]}
    let portfolioAdditions = {labels: [], series: [[]]}
    let portfolioDeletions = {labels: [], series: [[]]}
    let portfolioCommits = {labels: [], series: [[]]}
    let weeks
    axios.get('https://api.github.com/repos/Draichi/Portfolio-Management-list')
      .then(res => {
        let portfolioObj = res.data
        commit('setPortfolioList', portfolioObj)
      })
      // .catch(e => commit('setError', String(e)))
    axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction')
      .then(res => {
        let cryptoPredictionObj = res.data
        commit('setCryptoPrediction', cryptoPredictionObj)
      })
      // .catch(e => commit('setError', String(e)))
    axios.get('https://api.github.com/repos/Draichi/Portfolio-Management-list/stats/contributors')
      .then(res => {
        let resData0 = res.data[0]
        commit('setPortfolioListStats', resData0)
        weeks = res.data[0].weeks
        for (let key in weeks) {
          let date = new Date(weeks[key].w * 1000)
          portfolioAdditions.labels.push(date)
          portfolioAdditions.series[0].push(weeks[key].a)
          portfolioDeletions.labels.push(date)
          portfolioDeletions.series[0].push(weeks[key].d)
          portfolioCommits.labels.push(date)
          portfolioCommits.series[0].push(weeks[key].c)
        }
        commit('setPortfolioContributors', {
          additions: portfolioAdditions,
          deletions: portfolioDeletions,
          commits: portfolioCommits
        })
      })
      // .catch(e => commit('setError', String(e)))
    axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors')
      .then(res => {
        let resData1 = res.data[1]
        commit('setCryptoPredictionStats', resData1)
        let weeks = resData1.weeks
        for (let key in weeks) {
          let date = new Date(weeks[key].w * 1000)
          cryptoPredictionAdditions.labels.push(date)
          cryptoPredictionAdditions.series[0].push(weeks[key].a)
          cryptoPredictionDeletions.labels.push(date)
          cryptoPredictionDeletions.series[0].push(weeks[key].d)
          cryptoPredictionCommits.labels.push(date)
          cryptoPredictionCommits.series[0].push(weeks[key].c)
        }
        commit('setCryptoPredictionContributors', {
          additions: cryptoPredictionAdditions,
          deletions: cryptoPredictionDeletions,
          commits: cryptoPredictionCommits
        })
      })
    commit('setLoading', false)
  }
}
