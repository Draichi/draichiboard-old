<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      v-show="!loading"
      wrap
    >
      <v-flex xs12>
        <h2>{{ cryptoPrediction.full_name }}</h2>
        <h6>Created at: {{ cryptoPrediction.created_at }}</h6>
        <h6>Updated at: {{ cryptoPrediction.updated_at }}</h6>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="cryptoPredictionContributors.commits"
          :options="ChartsOptions"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">Commits per week</h4>
          <p class="category d-inline-flex font-weight-light">All time data of cryptocurrency_prediction project</p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="cryptoPredictionContributors.additions"
          :options="ChartsOptions"
          color="accent"
          type="Bar"
        >
          <h4 class="title font-weight-light">Additions per week</h4>
          <p class="category d-inline-flex font-weight-light">All time data of cryptocurrency_prediction project</p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="cryptoPredictionContributors.deletions"
          :options="ChartsOptions"
          color="tertiary"
          type="Bar"
        >
          <h3 class="title font-weight-light">Deletetions per week</h3>
          <p class="category d-inline-flex font-weight-light">All time data of cryptocurrency_prediction project</p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPredictionStats.total"
          color="primary"
          icon="mdi-source-commit"
          title="Total Commits"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"

        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.watchers_count"
          color="success"
          icon="mdi-floor-lamp"
          title="Watchers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.forks_count"
          color="warning"
          icon="mdi-directions-fork"
          title="Forks"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.open_issues_count"
          color="error"
          icon="mdi-alert-circle-outline"
          title="Open Issues"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.network_count"
          color="accent"
          icon="mdi-access-point-network"
          title="Network Count"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.subscribers_count"
          color="tertiary"
          icon="mdi-account-check"
          title="Subscribers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.size"
          color="secondary"
          icon="mdi-harddisk"
          small-value="B"
          title="Size"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="cryptoPrediction.stargazers_count"
          color="info"
          icon="mdi-star-face"
          title="Stargazers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>

      <v-flex xs12>
        <h2>{{ portfolioList.full_name }}</h2>
        <h6>Created at: {{ portfolioList.created_at }}</h6>
        <h6>Updated at: {{ portfolioList.updated_at }}</h6>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="portfolioContributors.commits"
          :options="ChartsOptions"
          color="info"
          type="Line"
        >
          <h4 class="title font-weight-light">Commits per week</h4>
          <p class="category d-inline-flex font-weight-light">All time data of portfolio list project</p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="portfolioContributors.additions"
          :options="ChartsOptions"
          color="accent"
          type="Bar"
        >
          <h4 class="title font-weight-light">Additions per week</h4>
          <p class="category d-inline-flex font-weight-light">All time data of portfolio list project</p>
          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="portfolioContributors.deletions"
          :options="ChartsOptions"
          color="error"
          type="Bar"
        >
          <h3 class="title font-weight-light">Deletetions per week</h3>
          <p class="category d-inline-flex font-weight-light">All time data of portfolio list project</p>

          <template slot="actions">
            <v-icon
              class="mr-2"
              small
            >
              mdi-tag
            </v-icon>
            <span class="caption grey--text font-weight-light">Tracked from Github</span>
          </template>
        </material-chart-card>
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioListStats.total"
          color="primary"
          icon="mdi-source-commit"
          title="Total Commits"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"

        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.watchers_count"
          color="success"
          icon="mdi-floor-lamp"
          title="Watchers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.forks_count"
          color="warning"
          icon="mdi-directions-fork"
          title="Forks"
          sub-icon="mdi-tag"
          sub-text="Tracked from Github"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.open_issues_count"
          color="error"
          icon="mdi-alert-circle-outline"
          title="Open Issues"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.network_count"
          color="accent"
          icon="mdi-access-point-network"
          title="Network Count"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.subscribers_count"
          color="tertiary"
          icon="mdi-account-check"
          title="Subscribers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.size"
          color="secondary"
          icon="mdi-harddisk"
          small-value="B"
          title="Size"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="portfolioList.stargazers_count"
          color="info"
          icon="mdi-star-face"
          title="Stargazers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
      <!-- <v-flex
        md12
        lg6
      >
        <material-card
          class="card-tabs"
          color="green">
          <v-flex
            slot="header"
          >
            <v-tabs
              v-model="tabs"
              color="transparent"
              slider-color="white"
            >
              <span
                class="subheading font-weight-light mr-3"
                style="align-self: center"
              >Tasks:</span>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-bug</v-icon>
                Bugs
              </v-tab>
              <v-tab class="mr-3">
                <v-icon class="mr-2">mdi-code-tags</v-icon>
                Website
              </v-tab>
              <v-tab>
                <v-icon class="mr-2">mdi-cloud</v-icon>
                Server
              </v-tab>
            </v-tabs>
          </v-flex>

          <v-tabs-items v-model="tabs">
            <v-tab-item
              v-for="n in 3"
              :key="n"
            >
              <v-list three-line>
                <v-list-tile @click="complete(0)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[0]"
                      color="green"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Sign contract for "What are conference organized afraid of?"
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(1)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[1]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Lines From Great Russian Literature? Or E-mails From My Boss?
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>

                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon>
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>
                  </div>
                </v-list-tile>
                <v-divider/>
                <v-list-tile @click="complete(2)">
                  <v-list-tile-action>
                    <v-checkbox
                      :value="list[2]"
                      color="success"
                    />
                  </v-list-tile-action>
                  <v-list-tile-title>
                    Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                  </v-list-tile-title>
                  <div class="d-flex">
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="success"
                        icon
                      >
                        <v-icon color="primary">mdi-pencil</v-icon>
                      </v-btn>
                      <span>Edit</span>
                    </v-tooltip>
                    <v-tooltip
                      top
                      content-class="top">
                      <v-btn
                        slot="activator"
                        class="v-btn--simple"
                        color="danger"
                        icon
                      >
                        <v-icon color="error">mdi-close</v-icon>
                      </v-btn>
                      <span>Close</span>
                    </v-tooltip>

                  </div>
                </v-list-tile>
              </v-list>
            </v-tab-item>
          </v-tabs-items>
        </material-card>
      </v-flex> -->
    </v-layout>
  </v-container>
</template>

<script>
// import axios from 'axios'
// https://api.github.com/repos/Draichi/cryptocurrency_prediction
// https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors
// https://developer.github.com/v3/repos/statistics/
export default {
  data () {
    return {
      // loading2: false,
      // portfolioAdditionsChart: null,
      // portfolioDeletionsChart: null,
      // portfolioCommitsChart: null,
      // portfolioObj: null,
      // stargazers_count: null,
      // open_issues: null,
      // forks: null,
      // numberOfCommits: null,
      // contributorsTotal: null,
      // additionsChart: null,
      // commitsAuthor: null,
      // deletionsChart: null,
      // commitsChart: null,
      ChartsOptions: {
        axisX: {
          showLabel: false,
          showGrid: false
        },
        lineSmooth: true,
        showPoint: false,
        showArea: true,
        chartPadding: {
          top: 25,
          right: 0,
          bottom: 0,
          left: 15
        }
      }
    }
  },
  computed: {
    loading () {
      return this.$store.getters.loading
    },
    portfolioList () {
      return this.$store.getters.portfolioList
    },
    cryptoPrediction () {
      return this.$store.getters.cryptoPrediction
    },
    portfolioListStats () {
      return this.$store.getters.portfolioListStats
    },
    portfolioContributors () {
      return this.$store.getters.portfolioContributors
    },
    cryptoPredictionStats () {
      return this.$store.getters.cryptoPredictionStats
    },
    cryptoPredictionContributors () {
      return this.$store.getters.cryptoPredictionContributors
    }
  }
  // },
  // beforeCreate () {
  //   this.loading2 = true
  //   let additions = {labels: [], series: [[]]}
  //   let deletions = {labels: [], series: [[]]}
  //   let commits = {labels: [], series: [[]]}
  //   let portfolioAdditions = {labels: [], series: [[]]}
  //   let portfolioDeletions = {labels: [], series: [[]]}
  //   let portfolioCommits = {labels: [], series: [[]]}
  //   var obj
  //   axios.get('https://api.github.com/repos/Draichi/Portfolio-Management-list')
  //     .then(res => {
  //       var portfolioObj = res.data
  //       this.portfolioObj = portfolioObj
  //     })
  //     .catch(e => console.warn(e))
  //   axios.get('https://api.github.com/repos/Draichi/Portfolio-Management-list/stats/contributors')
  //     .then(res => {
  //       this.portfolioNumberOfCommits = String(res.data[0].total)
  //       this.portfolioCommitsAuthor = res.data[0].author
  //       obj = res.data[0].weeks
  //       for (let key in obj) {
  //         var date = new Date(obj[key].w * 1000)
  //         portfolioAdditions.labels.push(date)
  //         portfolioAdditions.series[0].push(obj[key].a)
  //         portfolioDeletions.labels.push(date)
  //         portfolioDeletions.series[0].push(obj[key].d)
  //         portfolioCommits.labels.push(date)
  //         portfolioCommits.series[0].push(obj[key].c)
  //       }
  //       this.portfolioAdditionsChart = portfolioAdditions
  //       this.portfolioDeletionsChart = portfolioDeletions
  //       this.portfolioCommitsChart = portfolioCommits
  //     })
  //     .catch(e => console.log(e))
  //   axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction')
  //     .then(res => {
  //       this.stargazers_count = String(res.data.stargazers_count)
  //       this.open_issues = String(res.data.open_issues)
  //       this.forks = String(res.data.forks)
  //     })
  //   axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors')
  //     .then(res => {
  //       this.numberOfCommits = String(res.data[1].total)
  //       this.commitsAuthor = res.data[1].author
  //       obj = res.data[1].weeks
  //       for (let key in obj) {
  //         var date = new Date(obj[key].w * 1000)
  //         additions.labels.push(date)
  //         additions.series[0].push(obj[key].a)
  //         deletions.labels.push(date)
  //         deletions.series[0].push(obj[key].d)
  //         commits.labels.push(date)
  //         commits.series[0].push(obj[key].c)
  //       }
  //       this.additionsChart = additions
  //       this.deletionsChart = deletions
  //       this.commitsChart = commits
  //     })
  //   this.loading2 = false
  // }
}
</script>
