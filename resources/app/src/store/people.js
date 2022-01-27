import {api, queryStringFromParams} from '@/http';
import Person from '@/domain/person'

const baseUrl = '/api/people';

export const state = () => ({
    requests: [],
    items: [],
    lastFetch: null,
    currentItemIdx: null
})

export const getters = {
    people: state => state.items,
    all: state => state.items,
    personWithUuid: (state) => (uuid) => state.items.find(i => i.uuid == uuid),
    getPersonWithUuid: (state) => (uuid) => state.items.find(i => i.uuid == uuid),
    indexForPersonWithUuid: (state) => (uuid) => state.items.findIndex(i => i.uuid == uuid),
    currentItem: state => {
        if (typeof state.currentItemIdx == 'undefined' || state.currentItemIdx == null || state.currentItemIdx < 0) {
            return new Person();
        }

        return state.items[state.currentItemIdx]
    },
};

export const mutations = {
    addItem(state, itemData) {
        let person = itemData;
        if (!(itemData instanceof Person)) {
            person = new Person(itemData);
        }

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
    setCurrentItemIndex(state, item) {
        const idx = state.items.findIndex(i => i.uuid == item.uuid);
        if (idx > -1) {
            state.currentItemIdx = idx;
        }
    },
};

export const actions = {
    async all({ dispatch }, params) {
        dispatch('getAll', {params})
    },
    async getAll({ commit, state, dispatch }, {params, fresh = false}) {
        if (fresh || state.lastFetch === null) {
            commit('setLastParams', params);
            await api.get(baseUrl+queryStringFromParams(params))
                .then(response => {
                    response.data.forEach(item => {
                        commit('addItem', item)
                        commit('setLastFetch', new Date())
                    })
                });
            return;
        }
        dispatch('getPeopleSinceLastFetch', params);
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
        

        await api.get(baseUrl+ queryStringFromParams(params))
            .then(response => {
                response.data.forEach(item => {
                    commit('addItem', item)
                    commit('setLastFetch', new Date)
                })
            })
    },

    // eslint-disable-next-line
    async createPerson({ commit }, personData) {
        console.error('people/createPerson action is no longer implemented. Person creation currently happens when adding members to groups.');
    },

    async getPerson({commit}, {uuid, params}) {
        await api.get(`${baseUrl}/${uuid}`+queryStringFromParams(params))
            .then(response => {
                commit('addItem', response.data.data)
                commit('setCurrentItemIndex', response.data.data)
            });
    },

    async updateAttributes({ commit }, {uuid, attributes}) {
        await api.put(`${baseUrl}/${uuid}`, attributes)
            .then(response => {
                commit('addItem', response.data);
            })
    },

    async updateProfile({ commit }, {uuid, attributes}) {
        return api.put(`${baseUrl}/${uuid}/profile`, attributes)
            .then(response => {
                commit('addItem', response.data);
                return response
            })
    },

    // eslint-disable-next-line
    async getMail ({commit}, person) {
        if(person.uuid == null) {
            return false;
        }
        return api.get(`/api/people/${person.uuid}/email`)
                    .then(response => {
                        person.mailLog = response.data;
                        return response;
                    })
    }
};

export default {
    namespaced: true,
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}