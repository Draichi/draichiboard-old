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
    ]
  })
}
</script>
