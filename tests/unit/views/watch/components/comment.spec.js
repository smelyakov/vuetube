import { shallowMount } from '@vue/test-utils'
import Comment from '@/views/watch/components/Comment.vue'

let wrapper
let comment

describe('Comment.vue', () => {
  beforeEach(() => {
    comment = {
      etag: 'XI7nbFXulYBIpL0ayR_gDh3eu1k/_v07ZwmYVd9f3JLM-gbP0wz9afQ',
      id: 'UgjPj_zuee8cPXgCoAEC',
      kind: 'youtube#comment',
      snippet: {
        authorChannelId: { value: 'UCd_mRRYGpg_R5d1kZ8hL7-Q' },
        authorChannelUrl: 'http://www.youtube.com/channel/UCd_mRRYGpg_R5d1kZ8hL7-Q',
        authorDisplayName: 'Google User',
        authorProfileImageUrl: '//yt3.ggpht.com/s28-c-k-no-mo-rj-c0xffffff/photo.jpg',
        publishedAt: '2016-07-22T12:26:45',
        textDisplay: 'Hell yeah! The Best. Remember.',
        textOriginal: 'Hell yeah! The Best. Remember.',
        updatedAt: '2016-07-22T12:26:45.000Z',
      }
    }

    wrapper = shallowMount(Comment, {
      propsData: { comment }
    })
  })

  it('renders a comment', () => {
    expect(wrapper.contains('.comment')).toBe(true)
  })

  describe('author', () => {
    it('returns comment author', () => {
      expect(wrapper.vm.author).toMatch('Google User')
    })
  })

  describe('avatar', () => {
    it('returns larger author avatar', () => {
      expect(wrapper.vm.avatar).toMatch('//yt3.ggpht.com/s48-c-k-no-mo-rj-c0xffffff/photo.jpg')
    })
  })

  describe('publishedAt', () => {
    it('returns formatted date', () => {
      expect(wrapper.vm.publishedAt).toMatch('22 July 2016, 12:26')
    })
  })

  describe('textDisplay', () => {
    it('returns comment text', () => {
      expect(wrapper.vm.textDisplay).toMatch('Hell yeah! The Best. Remember.')
    })
  })

  describe('bigAvatar', () => {
    it('makes 28px avatar to be 48px', () => {
      const avatar = '//host/s28-c-k-no-mo-rj-c0xffffff/photo.jpg'

      expect(wrapper.vm.bigAvatar(avatar)).toMatch('//host/s48-c-k-no-mo-rj-c0xffffff/photo.jpg')
    })
  })
})
