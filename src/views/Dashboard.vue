<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-container
      v-show="loading"
      fluid>
      <v-layout row>
        <v-flex>
          <v-layout
            justify-center>
            <div class="text-xs-center">
              <v-progress-circular
                :size="80"
                indeterminate
                color="accent"
              />
            </div>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-container>
    <v-layout
      v-show="!loading"
      wrap
    >
      <v-flex xs12>
        <h2 class="brake-line">{{ cryptoPrediction.full_name }}</h2>
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
          :value="String(cryptoPredictionStats.total)"
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
          :value="String(cryptoPrediction.watchers_count)"
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
          :value="String(cryptoPrediction.forks_count)"
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
          :value="String(cryptoPrediction.open_issues_count)"
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
          :value="String(cryptoPrediction.network_count)"
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
          :value="String(cryptoPrediction.subscribers_count)"
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
          :value="String(cryptoPrediction.size)"
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
          :value="String(cryptoPrediction.stargazers_count)"
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
          :value="String(portfolioListStats.total)"
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
          :value="String(portfolioList.watchers_count)"
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
          :value="String(portfolioList.forks_count)"
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
          :value="String(portfolioList.open_issues_count)"
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
          :value="String(portfolioList.network_count)"
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
          :value="String(portfolioList.subscribers_count)"
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
          :value="String(portfolioList.size)"
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
          :value="String(portfolioList.stargazers_count)"
          color="info"
          icon="mdi-star-face"
          title="Stargazers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
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
  },
  created() {
    setTimeout(this.$store.commit('setLoading', false), 3000)
  },
}
</script>

<style>
.brake-line {
  word-break: break-all;
}
</style>
