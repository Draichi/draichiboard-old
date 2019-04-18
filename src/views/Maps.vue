<template>
  <v-container
    fill-height
    fluid
    grid-list-xl
  >
    <v-layout
      justify-center
      wrap
    >
      <v-flex
        xs12
      >
        <material-card
          :color="color"
          title="Live Projects"
          text="Some of the main projects"
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
              <td class="text-xs-right">{{ item.project }}</td>
              <td class="text-xs-right">
                <a
                  :href="item.link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {{ item.link }}
                </a>
              </td>
            </template>
          </v-data-table>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    headers: [
      {
        sortable: false,
        text: 'ID',
        value: 'id'
      },
      {
        sortable: false,
        text: 'Project',
        value: 'name'
      },
      {
        sortable: false,
        text: 'Description',
        value: 'project',
        align: 'right'
      },
      {
        sortable: false,
        text: 'Link',
        value: 'link',
        align: 'right'
      }
    ],
    items: [
      {
        name: 'ABC Mouse (2Mundos)',
        link: 'https://www.abcmouse.com/',
        project: 'API developed in PHP'
      }, {
        name: 'Bud Fox',
        link: 'https://bud-fox.github.io/live/',
        project: 'Nutx.js and Flask API'
      }, {
        name: 'Tagview Tech',
        link: 'https://www.mudamos.org/',
        project: 'Website in Ruby on Rails'
      },
      {
        name: 'Metups',
        link: 'https://meetupsproject.firebaseapp.com/',
        project: 'Vue.js and Firebase API'
      },
      {
        name: 'Reinforcement Learning',
        link: 'https://draichi.github.io/ai-flappy-bird/index.html',
        project: 'Flappy Bird in Javascript'
      }
    ]
  }),
  computed: {
    color () {
      return this.$store.state.app.color
    }
  }
}
</script>
