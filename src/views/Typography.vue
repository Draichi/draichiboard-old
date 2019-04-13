<template>
  <v-container
    fill-height
    fluid
  >
    <v-layout
      justify-center
      align-center
    >
      <v-flex xs12>
        <material-card
          color="green"
          title="Material Dashboard Heading"
          text="Created using Roboto Font Family"
        >
          <v-card-text>
            <v-carousel
              dark
              hide-delimiters
              interval="1000"
              max="100"
              style="height:100%"
            >
              <v-carousel-item
                v-for="(item,i) in items"
                :key="i"
                :src="item.src"
              />
            </v-carousel>
          </v-card-text>
        </material-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

export default {
  data: () => ({
    items: [
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm9-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm5-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm21-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm20-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm19-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm18-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm15-11.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm15-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm14-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm12-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/ibm11-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/globo2-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/globo1-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/audit-720w.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/mudamos-web1-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/mudamos-web1-1.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/voceazul_dash.png?raw=true'
      },
      {
        src: 'https://github.com/Draichi/portfolio/blob/master/src/img/voceazul_profile.png?raw=true'
      }
    ]
  })
}
</script>

<style>
.v-window__container--is-active {
    height: 100% !important;
}
</style>
