<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout>
      <v-flex xs12>
        <v-card>
          <v-container
            grid-list-sm
            fluid
          >
            <v-layout
              row
              wrap
            >
              <v-flex
                v-for="(item,i) in items"
                :key="i"
                xs4
                d-flex
              >
                <v-card
                  flat
                  tile
                  class="d-flex"
                >
                  <v-img
                    :src="item.src"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    @click.stop="item.dialog = true"
                  />
                </v-card>
                <v-dialog
                  v-show="false"
                  v-model="item.dialog"
                  max-width="540"
                >
                  <v-card>
                    <v-img
                      :src="item.src"
                      class="grey lighten-2"
                      @click.stop="item.dialog = true"
                    />
                    <v-divider/>
                    <v-card-actions>
                      <v-spacer/>
                      <v-btn
                        :color="color"
                        @click="item.dialog = false"
                      >
                        Close
                      </v-btn>
                    </v-card-actions>
                  </v-card>
                </v-dialog>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    items: [
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm9-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm5-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm21-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm20-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm19-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm18-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm15-11.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm15-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm14-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm12-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm11-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/globo2-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/globo1-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/audit-720w.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/mudamos-web1-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/mudamos-web1-1.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/voceazul_dash.png?raw=true',
        dialog: false
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/voceazul_profile.png?raw=true',
        dialog: false
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

<style>
.v-window__container--is-active {
    height: 100% !important;
}
</style>
