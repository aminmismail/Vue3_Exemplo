<template>
    <v-data-table
      :headers="headers"
      :items="profissionais"
      :sort-by="[{ key: 'id', order: 'asc' }]"
    >
      <template v-slot:top>
        <v-toolbar>
          <v-toolbar-title>Profissionais</v-toolbar-title>
          <v-divider
            class="mx-4"
            inset
            vertical
          ></v-divider>
          <v-spacer></v-spacer>
          <v-dialog
            v-model="dialog"
            max-width="80%"
          >
            <template v-slot:activator="{ props }">
              <v-btn
                class="mb-2"
                variant="elevated"
                color="primary"
                dark
                v-bind="props"
              >
                Adicionar Profissional
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
  
              <!-- Formulario de editar o profissional -->
              <v-card-text>
                  <v-container>
                  <v-row>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.id"
                        label="ID"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.nome"
                        label="Nome"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.endereco"
                        label="Endereço"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.nascimento"
                        label="Nascimento"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.genero"
                        label="Gênero"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.raca"
                        label="Raça"
                      ></v-text-field>
                    </v-col>
                    <v-col
                      cols="12"
                      md="4"
                      sm="6"
                    >
                      <v-text-field
                        v-model="editedItem.especialidade"
                        label="Especialidade"
                      ></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
  
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="close"
                >
                  Cancel
                </v-btn>
                <v-btn
                  color="blue-darken-1"
                  variant="text"
                  @click="save"
                >
                  Save
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>

          <v-dialog v-model="dialogDelete" max-width="35%">
            <v-card>
              <v-card-title class="text-h5">Tem certeza que deseja excluir este profissional?</v-card-title>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="red-darken-1" variant="text" @click="closeDelete">Cancelar</v-btn>
                <v-btn color="green-darken-1" variant="text" @click="deleteItemConfirm">Confirmar</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      
      <template v-slot:item.actions="{ item }">
        
        <v-icon
          class="me-2"
          size="small"
          @click="editItem(item)"
          icon="mdi-pencil"
        >
        </v-icon>

        <v-icon
          size="small"
          @click="deleteItem(item)"
          icon="mdi-delete"
          >
        </v-icon>
      </template>

      <template v-slot:no-data>
        <v-btn
          color="primary"
          @click="initialize"
        >
          Limpar
        </v-btn>
      </template>
    </v-data-table>
  </template>



  <script>
    export default {
      data: () => ({
        dialog: false,
        dialogDelete: false,
        headers: [
          {
            title: 'ID',
            align: 'start',
            sortable: true,
            key: 'id',
          },
          { title: 'Nome', key: 'nome' },
          { title: 'Especialidade', key: 'especialidade' },
          { title: 'Actions', key: 'actions', sortable: false },
        ],
        profissionais: [],
        editedIndex: -1,
        editedItem: {
          id: 0,
          nome: '',
          endereco: '',
          nascimento: '',
          genero: '',
          raca: '',
          especialidade: '',
        },
        defaultItem: {
          id: 0,
          nome: '',
          endereco: '',
          nascimento: '',
          genero: '',
          raca: '',
          especialidade: '',
        },
      }),
  
      computed: {
        formTitle () {
          return this.editedIndex === -1 ? 'Novo Profissional' : 'Editar Profissional'
        },
      },
  
      watch: {
        dialog (val) {
          val || this.close()
        },
        dialogDelete (val) {
          val || this.closeDelete()
        },
      },
  
      created () {
        this.initialize()
      },
  
      methods: {
        initialize () {
          this.profissionais = [
            {
                id: 1,
                nome: 'Jorge',
                endereco: 'Rua Curitiba, 615',
                nascimento: '12/1/1998',
                genero: 'M',
                raca: 'Ariana',
                especialidade: 'Assassino',
            },
            {
                id: 2,
                nome: 'Maria Torres',
                endereco: 'Avenida Paulista, 1000',
                nascimento: '5/8/1990',
                genero: 'F',
                raca: 'Caucasiana',
                especialidade: 'Engenheira'
            },
            {
                id: 3,
                nome: 'Pedro Silva',
                endereco: 'Rua São Paulo, 200',
                nascimento: '20/3/1985',
                genero: 'M',
                raca: 'Parda',
                especialidade: 'Professor'
            }
          ]
        },
  
        editItem (item) {
          this.editedIndex = this.profissionais.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialog = true
        },
  
        deleteItem (item) {
          this.editedIndex = this.profissionais.indexOf(item)
          this.editedItem = Object.assign({}, item)
          this.dialogDelete = true
        },
  
        deleteItemConfirm () {
          this.profissionais.splice(this.editedIndex, 1)
          this.closeDelete()
        },
  
        close () {
          this.dialog = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        closeDelete () {
          this.dialogDelete = false
          this.$nextTick(() => {
            this.editedItem = Object.assign({}, this.defaultItem)
            this.editedIndex = -1
          })
        },
  
        save () {
          if (this.editedIndex > -1) {
            Object.assign(this.profissionais[this.editedIndex], this.editedItem)
          } else {
            this.profissionais.push(this.editedItem)
          }
          this.close()
        },
      },
    }

  </script>