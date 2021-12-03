import store from '@/store/index'

const GroupList = () =>
    import ( /* webpackChunkName: "group-list" */ '@/views/groups/GroupList.vue')
const GroupDetail = () =>
    import ( /* webpackChunkName: "group-detail" */ '@/views/groups/GroupDetail.vue')
const MemberForm = () =>
    import ( /* webpackChunkName: "group-detail" */ '@/components/groups/MemberForm.vue')

const GeneDiseaseForm = () =>
    import ( /* webpackChunkName: "group-detail" */ '@/components/expert_panels/GeneDiseaseForm.vue')

const GroupApplication = () =>
    import ( /* webpackChunkName: "group-application" */ '@/views/groups/GroupApplication.vue')

const hasGroupPermission = async (to, permission) => {
    if (store.getters.currentUser.hasPermission('groups-manage')) {
        return true;
    }

    if (!store.getters['groups/currentItem'] || store.getters['groups/currentItem'].uuid != to.params.uuid) {
        const rsp = await store.dispatch('groups/findAndSetCurrent', to.params.uuid);
        console.log(rsp);
    }
    
    const group = store.getters['groups/currentItem'];

    if (store.getters.currentUser.hasGroupPermission(permission, group)) {
        return true;
    }

    store.commit('pushError', 'Permission denied');
    return false;
}

const canUpdateApplication = async (to) => {
    if (store.getters.currentUser.hasPermission('ep-applications-manage')) {
        return true;
    }
    if (!store.getters['groups/currentItem'] || store.getters['groups/currentItem'].uuid != to.params.uuid) {
        await store.dispatch('find', to.params.uuid);
    }
    const group = store.getters['groups/currentItem'];

    if (store.getters.currentUser.hasGroupPermission('application-edit', group)) {
        return true;
    }

    store.commit('pushError', 'Permission denied');
    return false;
}

export default [
    {
        name: 'GroupList',
        path: '/groups',
        components:  {
            default: GroupList
        },
        meta: {
            protected: true,
        },
        props: true
    },
    {
        name: 'GroupDetail',
        path: '/groups/:uuid',
        components: {
            default: GroupDetail
        },
        meta: {
            protected: true
        },
        props: true,

        children: [
            {
                name: 'AddMember',
                path: '/groups/:uuid/members/add',
                component: MemberForm,
                meta: {
                    default: GroupDetail,
                    showModal: true,
                    protected: true,
                    title: 'Add Group Member'
                },
                props: true,
                beforeEnter: async (to) => {
                    return await hasGroupPermission(to, 'members-invite', ['groups-manage'])
                }
            },
            {
                name: 'EditMember',
                path: '/groups/:uuid/members/:memberId',
                component: MemberForm,
                meta: {
                    default: GroupDetail,
                    showModal: true,
                    protected: true,
                    title: 'Add Group Member'
                },
                props: true,
                beforeEnter: async (to) => {
                    return await hasGroupPermission(to, 'members-update', ['groups-manage'])
                }
            },
        ],
    },
    {
        name: 'GroupApplication',
        path: '/groups/:uuid/application',
        components: {
            default: GroupApplication
        },
        meta: {
            protected: true
        },
        props: true,
        beforeEnter: async (to) => {
            return await hasGroupPermission(to, 'application-edit')
        }
    }
]
