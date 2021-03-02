import { useRouter, useRoute } from 'vue-router'
import {computed} from 'vue'

export default function () {
    const router = useRouter()
    const route = useRoute()
    
    const sort = computed({
        immediate: true,
        get() {
            if (Object.keys(route.query).includes('sort-field')) {
                return {
                    field: route.query['sort-field'],
                    desc: Boolean(parseInt(route.query['sort-desc']))
                }
            }
            return {
                field: 'name',
                desc: false
            }
        },
        set(sortObj) {
            const newSortQuery = {'sort-field': sortObj.field, 'sort-desc': sortObj.desc ? 1 : 0}
    
            const newQuery = {
                ...route.query, 
                ...newSortQuery
            };
    
            router.replace({path: route.path, query: newQuery})
        }
    });
    
    const filter = computed({
        set(value) {
            let currentQuery = route.query;
            let currentPath = route.path;
    
            let updatedQuery = {...currentQuery};
    
            if (!value) {
                delete updatedQuery.filter;
            } else {
                updatedQuery = {...currentQuery, ...{'filter': value} };
            }
    
            router.replace({path: currentPath, query: updatedQuery})
        },
        get() {
            return route.query.filter
        },
        immediate: true
    });

    return {
        sort,
        filter
    }
}
