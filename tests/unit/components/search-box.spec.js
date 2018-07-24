import { createLocalVue, shallowMount } from '@vue/test-utils'
import SearchBox from '@/components/SearchBox.vue'
import VueRouter from 'vue-router'
import Vuex from 'vuex'

const localVue = createLocalVue()

localVue.use(VueRouter)
localVue.use(Vuex)

describe('SearchBox.vue', () => {
  let actions
  let store
  let router

  beforeEach(() => {
    actions = {
      FETCH_SEARCH_RESULTS: jest.fn(),
      RESET_SEARCH_RESULTS: jest.fn()
    }

    router = new VueRouter()

    store = new Vuex.Store({
      modules: {
        search: {
          namespaced: true,
          actions,
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

  it('calls store action `FETCH_SEARCH_RESULTS` when input is changed', () => {
    const wrapper = shallowMount(SearchBox, { store, localVue })
    const input = wrapper.find('.search-box__input')

    input.element.value = 'test query'
    input.trigger('input')

    expect(actions.FETCH_SEARCH_RESULTS).toHaveBeenCalled()
  })

  it('calls store action `RESET_SEARCH_RESULTS` when destroyed', () => {
    const wrapper = shallowMount(SearchBox, { store, localVue })

    wrapper.destroy()

    expect(actions.RESET_SEARCH_RESULTS).toHaveBeenCalled()
  })

  it('calls store action `RESET_SEARCH_RESULTS` when $route is changed', () => {
    const wrapper = shallowMount(SearchBox, { store, localVue, router })

    wrapper.vm.$router.push('watch/video2')

    expect(actions.RESET_SEARCH_RESULTS).toHaveBeenCalled()
  })
})
