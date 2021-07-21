import axios from '@/http/api';
import store from '.';
import Person from '@/domain/person'
import { v4 as uuid4 } from 'uuid';
import queryStringFromParams from '@/http/query_string_from_params'

const baseUrl = '/api/people';

export default {
    namespaced: true,
    state: () => ({
        requests: [],
        items: [],
        lastFetch: null,
        currentItemIdx: null
    }),
    getters: {
        people: state => state.items,
        all: state => state.items,
        personWithUuid: (state) => (uuid) => state.items.find(i => i.uuid == uuid),
        getPersonWithUuid: (state) => (uuid) => state.items.find(i => i.uuid == uuid),
        indexForPersonWithUuid: (state, uuid) => state.items.findIndex(i => i.uuid == uuid),
        currentItem: state => {
            if (state.currentItemIdx === null) {
                return new Person();
            }

            return state.items[state.currentItemIdx]
        },
    },
    mutations: {
        addPerson(state, itemData) {
            const person = new Person(itemData)
            const idx = state.items.findIndex(item => item.uuid == itemData.uuid);
            if (idx > -1) {
                state.items.splice(idx, 1, person)
                return;
            }

            state.items.push(person);
        },
        clearItems(state) {
            state.items = [];
        },
        setLastFetch(state) {
            state.lastFetch = new Date();
        },
        setLastParams(state, params) {
            state.lastParams = params;
        },
        setCurrentItemIdx(state, item) {
            const idx = state.items.findIndex(i => i.uuid == item.uuid);
            state.currentItemIdx = idx;
        },
    },
    actions: {
        // eslint-disable-next-line
        async all({ commit }, params) {
            store.dispatch('people/getAll', {params})
        },
        async getAll({ commit, state }, {params, fresh = false}) {
            if (fresh || state.lastFetch === null) {
                commit('setLastParams', params);
                await axios.get(baseUrl+queryStringFromParams(params))
                    .then(response => {
                        response.data.forEach(item => {
                            commit('addPerson', item)
                            commit('setLastFetch', new Date())
                        })
                    });
                return;
            }
            store.dispatch('people/getPeopleSinceLastFetch', params);
        },

        async getPeopleSinceLastFetch({ commit, state }, params=null) 
        {
            if (params === null) {
                params = state.lastParams
            }

            if (typeof params == 'undefined' || params === null) {
                params = {};
            }
            
            if(!params.where) {
                    params.where = {};
            }

            params.where.since = state.lastFetch.toISOString()
            

            await axios.get(baseUrl+ queryStringFromParams(params))
                .then(response => {
                    response.data.forEach(item => {
                        commit('addPerson', item)
                        commit('setLastFetch', new Date)
                    })
                })
        },

        async createPerson({ commit }, personData) {
            if (!personData.uuid) {
                personData.uuid = uuid4()
            }

            await axios.post(baseUrl, personData)
                .then(response => {
                    commit('addPerson', response.data);
                    return response.data;
                });
        },

        async getPerson({ commit }, {uuid, params}) {
            await axios.get(`${baseUrl}/${uuid}`+queryStringFromParams(params))
                .then(response => {
                    commit('addPerson', response.data)
                    commit('setCurrentItemIdx', response.data)
                });
        },

        async updateAttributes({ commit }, {uuid, attributes}) {
            await axios.put(`${baseUrl}/${uuid}`, attributes)
                .then(response => {
                    commit('addPerson', response.data);
                })
        }

    }
}