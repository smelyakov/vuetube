import { shallowMount } from '@vue/test-utils'
import Home from '@/views/Home.vue'
import SearchBox from '@/components/SearchBox.vue'

describe('Home.vue', () => {
  it('renders search box', () => {
    const wrapper = shallowMount(Home)
    const searchBox = wrapper.find('searchbox-stub')

    expect(searchBox.is(SearchBox)).toBe(true)
  })
})
