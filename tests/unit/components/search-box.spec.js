import { createLocalVue, shallowMount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('SearchBox.vue', () => {
  let store

  beforeEach(() => {
    store = new Vuex.Store({
      modules: {
        search: {
          namespaced: true,
          state: {
            results: []
          }
        }
      }
    })
  })

  it('renders search box', () => {
    const wrapper = shallowMount(SearchBox, { store, localVue })

    expect(wrapper.contains('.search-box')).toBe(true)
  })
})
