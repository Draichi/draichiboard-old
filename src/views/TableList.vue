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
          title="Main companies I worked with"
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
              slot-scope="{ item }"
            >
              <td>{{ item.name }}</td>
              <td class="text-xs-right">{{ item.country }}</td>
              <td class="text-xs-right">{{ item.city }}</td>
              <td class="text-xs-right">{{ item.salary }}</td>
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
        text: 'Company',
        value: 'name'
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
      },
      {
        sortable: false,
        text: 'Annual Salary (USD)',
        value: 'salary',
        align: 'right'
      }
    ],
    items: [
      {
        name: '2Mundos',
        country: 'Brazil / USA',
        city: 'São Paulo',
        salary: '$14,258'
      },
      {
        name: 'IBM',
        country: 'Brazil / USA',
        city: 'São Paulo',
        salary: '$11,675'
      },
      {
        name: 'Tagview Tech',
        country: 'Brazil',
        city: 'Remote',
        salary: '$9,738'
      },
      {
        name: 'Banco do Brasil Você Azul',
        country: 'Brazil',
        city: 'Remote',
        salary: '$9,848'
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
