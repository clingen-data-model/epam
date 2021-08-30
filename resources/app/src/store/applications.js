import store from ".";
import Application from '@/domain/application'
import appRepo from '@/adapters/application_repository';
import api from '@/http/api';
import { v4 as uuid4 } from 'uuid';

const baseUrl = '/api/applications';

export default {
    namespaced: true,
    state: () => ({
        requests: [],
        items: [],
        lastFetch: null,
        lastParams: {},
        currentItemIdx: null,
        lastFetchBy: null
    }),
    getters: {
        applications: state => state.items,
        all: state => state.items,
        requestCount: state => {
            return state.requests.length;
        },
        hasPendingRequests: state => {
            return state.requests.length > 0;
        },
        gceps: state => {
            return state.items.filter(app => app.expert_panel_type_id == 1);
        },
        vceps: state => {
            return state.items.filter(app => app.expert_panel_type_id == 2);
        },
        currentItem: state => {
            if (state.currentItemIdx === null) {
                return new Application();
            }

            return state.items[state.currentItemIdx]
        },
        getApplicationByUuid: (state) => (uuid) => {
            return state.items.find(app => app.uuid == uuid);
        },
    },
    mutations: {
        addApplication(state, application) {
            const appModel = new Application(application)
            const idx = state.items.findIndex(item => item.uuid == application.uuid);
            if (idx > -1) {
                state.items.splice(idx, 1, appModel)
                return;
            }

            state.items.push(appModel);
        },
        clearApplications(state) {
            state.items = [];
        },
        setLastFetch(state) {
            state.lastFetch = new Date();
        },
        setLastParams(state, params) {
            state.lastParams = params;
        },
        setCurrentItemIdx(state, application) {
            const idx = state.items.findIndex(i => i.uuid == application.uuid);
            state.currentItemIdx = idx;
        },
        removeItem(state, item) {
            const idx = state.items.findIndex(i => i.uuid == item.uuid);
            state.items.splice(idx, 1);           
        },
        clearCurrentItemIdx(state) {
            state.currentItemIdx = null;
        }
    },
    actions: {
        async getApplications({ commit, state }, params, fresh = false) {
            if (fresh || state.lastFetch === null) {
                commit('setLastParams', params);
                await appRepo.all(params)
                    .then(data => {
                        data.forEach(item => {
                            commit('addApplication', item)
                        })
                        commit('setLastFetch', new Date())
                        state.lastFetchBy = 'getApplications';
                    });
                return;
            }

            store.dispatch('applications/getApplicationsSinceLastFetch', params);
        },

        async getApplicationsSinceLastFetch({ commit, state }, params = null) {
            if (params === null) {
                params = state.lastParams
            }

            if (!params.where) {
                params.where = {}
            }
            params.where.since = state.lastFetch.toISOString()

            await appRepo.all(params)
                .then(data => {
                    data.forEach(item => {
                        commit('addApplication', item)
                    })
                })
            commit('setLastFetch', new Date)
            state.lastFetchBy = 'getApplications';
        },

        async initiateApplication({ commit }, appData) {
            await appRepo.initiate(appData)
                .then(item => {
                    commit('addApplication', item);
                    store.dispatch('applications/getApplications')
                })
        },
        async getApplication({ commit }, appUuid) {
            await appRepo.find(appUuid, { with: ['logEntries', 'group.documents', 'contacts', 'logEntries.causer', 'cois', 'group.documents.type', 'nextActions'] })
                .then(item => {
                    commit('addApplication', item)
                    commit('setCurrentItemIdx', item)
                });
        },
        // eslint-disable-next-line
        async updateEpAttributes({ commit }, application) {
            await appRepo.updateEpAttributes(application)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                });
        },
        // eslint-disable-next-line
        async addNextAction({ commit }, { application, nextActionData }) {
            if (!nextActionData.uuid) {
                nextActionData.uuid = uuid4();
            }

            return await api.post(`${baseUrl}/${application.uuid}/next-actions`, nextActionData)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                })
        },
        // eslint-disable-next-line
        async updateNextAction({ commit }, { application, updatedAction }) {
            if (!updatedAction.uuid) {
                updatedAction.uuid = uuid4();
            }

            return await api.put(`${baseUrl}/${application.uuid}/next-actions/${updatedAction.id}`, updatedAction)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                });
        
        },
       // eslint-disable-next-line
       async deleteNextAction({ commit }, {application, nextAction}) {
           console.log(nextAction.id)
           const url = `/api/applications/${application.uuid}/next-actions/${nextAction.id}`
            await api.delete(url)
                .then(() => {
                    console.log('deleted. reload application')
                    store.dispatch('applications/getApplication', application.uuid);
                })
        },
        // eslint-disable-next-line
        async completeNextAction({ commit }, { application, nextAction, dateCompleted }) {
            const url = `/api/applications/${application.uuid}/next-actions/${nextAction.uuid}/complete`;
            await api.post(url, { date_completed: dateCompleted })
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                })
        },
        // eslint-disable-next-line
        async addLogEntry({ commit }, { application, logEntryData }) {
            const url = `/api/applications/${application.uuid}/log-entries`
            await api.post(url, logEntryData)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                })
        },

        // eslint-disable-next-line
        async updateLogEntry({ commit }, { application, updatedEntry }) {
            const url = `/api/applications/${application.uuid}/log-entries/${updatedEntry.id}`;
            await api.put(url, updatedEntry)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                })
        },

        // eslint-disable-next-line
        async deleteLogEntry({ commit }, { application, logEntry }) {
            const url = `/api/applications/${application.uuid}/log-entries/${logEntry.id}`;
            await api.delete(url)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        // eslint-disable-next-line
        async addDocument({ commit }, { application, documentData }) {
            await appRepo.addDocument(application, documentData)
                .then((response) => {
                    store.dispatch('applications/getApplication', application.uuid)
                    return response;
                })
        },

        // eslint-disable-next-line
        async markDocumentReviewed({ commit }, { application, document, dateReviewed, isFinal }) {
            await appRepo.markDocumentReviewed(application, document, dateReviewed, isFinal)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                })
        },

        // eslint-disable-next-line
        async markDocumentVersionFinal({ commit }, { application, document }) {
            await api.post(`/api/applications/${application.uuid}/documents/${document.uuid}/final`)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        //eslint-disable-next-line
        async updateDocumentInfo({ commit }, { application, document }) {
            return await api.put(`/api/applications/${application.uuid}/documents/${document.uuid}`, document)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        //eslint-disable-next-line
        async deleteDocument( { commit }, {application, document}) {
            return await api.delete(`/api/applications/${application.uuid}/documents/${document.uuid}`)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        // eslint-disable-next-line
        async approveCurrentStep({ commit }, { application, dateApproved, notifyContacts, subject, body, attachments }) {
            const formData = new FormData();
            formData.append('date_approved', dateApproved);
            formData.append('notify_contacts', notifyContacts);
            formData.append('subject', subject);
            formData.append('body', body);

            Array.from(attachments).forEach((file, idx) => {
                formData.append('attachments[' + idx + ']', file);
            });

            const url = `/api/applications/${application.uuid}/current-step/approve`
            return await api.post(
                    url,
                    formData, {
                        headers: {
                            "Content-Type": "multipart/form-data"
                        }
                    }
                )
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        // eslint-disable-next-line
        async updateApprovalDate({ commit }, { application, dateApproved, step }) {
            await api.put(`/api/applications/${application.uuid}/approve`, {
                    date_approved: dateApproved,
                    step: step
                })
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid)
                });
        },

        // eslint-disable-next-line
        async addContact({ commit }, { application, contact }) {
            await appRepo.addContact(application, contact)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                })
        },

        // eslint-disable-next-line
        async removeContact({ commit }, { application, contact }) {
            await appRepo.removeContact(application, contact)
                .then(() => {
                    store.dispatch('applications/getApplication', application.uuid);
                });
        },

        async deleteApplication({ commit }, {application}) {
            return await api.delete(`/api/applications/${application.uuid}`)
                .then(() => {
                    commit('removeItem', application);
                    commit('clearCurrentItemIdx')
                })
        }


    },
}