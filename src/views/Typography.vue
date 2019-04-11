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
            <v-carousel>
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
        src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
      },
      {
        src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
      }
    ]
  })
}
</script>
