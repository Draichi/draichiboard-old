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
        <h2>Cryptocurrency Prediction</h2>
      </v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="commitsChart"
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
          :data="additionsChart"
          :options="ChartsOptions"
          color="green"
          type="Bar"
        >
          <h4 class="title font-weight-light">Additions on each commit</h4>
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
          :data="deletionsChart"
          :options="ChartsOptions"
          color="red"
          type="Line"
        >
          <h3 class="title font-weight-light">Deletetions on each commit</h3>
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
          :value="stargazers_count"
          color="green"
          icon="mdi-store"
          title="Closed Issues"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="open_issues"
          color="orange"
          icon="mdi-content-copy"
          title="Open Issues"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="forks"
          color="red"
          icon="mdi-information-outline"
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
          :value="stargazers_count"
          color="info"
          icon="mdi-twitter"
          title="Stargazers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>

      <v-flex xs12><h2>Portfolio Management</h2></v-flex>
      <v-flex
        md12
        sm12
        lg4
      >
        <material-chart-card
          :data="commitsChart"
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
          :data="additionsChart"
          :options="ChartsOptions"
          color="green"
          type="Bar"
        >
          <h4 class="title font-weight-light">Additions on each commit</h4>
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
          :data="deletionsChart"
          :options="ChartsOptions"
          color="red"
          type="Line"
        >
          <h3 class="title font-weight-light">Deletetions on each commit</h3>
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
          :value="stargazers_count"
          color="green"
          icon="mdi-store"
          title="Closed Issues"
          sub-icon="mdi-calendar"
          sub-text="Last 24 Hours"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="open_issues"
          color="orange"
          icon="mdi-content-copy"
          title="Open Issues"
          small-value="GB"
          sub-icon="mdi-alert"
          sub-icon-color="error"
          sub-text="Get More Space..."
          sub-text-color="text-primary"
        />
      </v-flex>
      <v-flex
        sm6
        xs12
        md6
        lg3
      >
        <material-stats-card
          :value="forks"
          color="red"
          icon="mdi-information-outline"
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
          :value="stargazers_count"
          color="info"
          icon="mdi-twitter"
          title="Stargazers"
          sub-icon="mdi-update"
          sub-text="Just Updated"
        />
      </v-flex>

      <v-flex
        xs12
      >
        <material-card
          color="orange"
          title="Professional Stats"
          text="Most important jobs"
        >
          <v-data-table
            :headers="headers"
            :items="items"
            hide-actions
          >
            <template
              slot="headerCell"
              slot-scope="{ header }"
            >
              <span
                class="font-weight-light text-warning text--darken-3"
                v-text="header.text"
              />
            </template>
            <template
              slot="items"
              slot-scope="{ index, item }"
            >
              <td>{{ index + 1 }}</td>
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
              <td class="text-xs-right">{{ item.country }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
            </template>
          </v-data-table>
        </material-card>
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
import axios from 'axios'
// https://api.github.com/repos/Draichi/cryptocurrency_prediction
// https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors
// https://developer.github.com/v3/repos/statistics/
export default {
  data () {
    return {
      loading: false,
      stargazers_count: null,
      open_issues: null,
      forks: null,
      numberOfCommits: null,
      contributorsTotal: null,
      additionsChart: null,
      commitsAuthor: null,
      deletionsChart: null,
      commitsChart: null,
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
      },
      headers: [
        {
          sortable: false,
          text: 'ID',
          value: 'id'
        },
        {
          sortable: false,
          text: 'Company',
          value: 'name'
        },
        {
          sortable: false,
          text: 'Salary',
          value: 'salary',
          align: 'right'
        },
        {
          sortable: false,
          text: 'Country',
          value: 'country',
          align: 'right'
        },
        {
          sortable: false,
          text: 'City',
          value: 'city',
          align: 'right'
        }
      ],
      items: [
        {
          name: 'Banco do Brasil Você Azul',
          country: 'Brazil',
          city: 'Remote',
          salary: '$35,738'
        },
        {
          name: '2Mundos',
          country: 'Brazil / USA',
          city: 'São Paulo',
          salary: '$23,738'
        }, {
          name: 'IBM',
          country: 'Brazil',
          city: 'São Paulo',
          salary: '$56,142'
        }, {
          name: 'Tagview Tech',
          country: 'Brazil',
          city: 'Remote',
          salary: '$38,735'
        }
      ],
      tabs: 0,
      list: {
        0: false,
        1: false,
        2: false
      }
    }
  },
  beforeCreate () {
    this.loading = true
    let additions = {labels: [], series: [[]]}
    let deletions = {labels: [], series: [[]]}
    let commits = {labels: [], series: [[]]}
    var obj
    axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction')
      .then(res => {
        this.stargazers_count = String(res.data.stargazers_count)
        this.open_issues = String(res.data.open_issues)
        this.forks = String(res.data.forks)
      })
    axios.get('https://api.github.com/repos/Draichi/cryptocurrency_prediction/stats/contributors')
      .then(res => {
        this.numberOfCommits = String(res.data[1].total)
        this.commitsAuthor = res.data[1].author
        obj = res.data[1].weeks
        for (let key in obj) {
          var date = new Date(obj[key].w * 1000)
          additions.labels.push(date)
          additions.series[0].push(obj[key].a)
          deletions.labels.push(date)
          deletions.series[0].push(obj[key].d)
          commits.labels.push(date)
          commits.series[0].push(obj[key].c)
        }
        this.additionsChart = additions
        this.deletionsChart = deletions
        this.commitsChart = commits
      })
    this.loading = false
  },
  methods: {
    complete (index) {
      this.list[index] = !this.list[index]
    }
  }
}
</script>
