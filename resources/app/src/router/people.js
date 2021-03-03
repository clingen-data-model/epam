const PersonDetail = () => import (/* person-detail */ '../components/people/PersonDetail')
const PersonForm = () => import (/* person-detail */ '../components/people/PersonForm')
const PeopleIndex = () => import (/* people-index */ '../views/PeopleIndex')

export default [
    { name: 'people-index',
            path: '/people',
            component: PeopleIndex,
            meta: {
                protected: true
            },
    },
    { name: 'person-detail',
        path: '/people/:uuid',
        component: PersonDetail,
        props: true,
        meta: {
            protected: true
        },
        children: [
            { name: 'person-edit',
                path: 'edit',
                components: {
                    default: PersonDetail,
                    modal: PersonForm
                },
                meta: {
                    showModal: true,
                    protected: true
                },
                props: true,
            }
        ]

    },
]