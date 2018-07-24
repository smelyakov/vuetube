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
        authorProfileImageUrl: 'https://yt3.ggpht.com/-PAWaHDnWQns/AAAAAAAAAAI/AAAAAAAAAAA/dW1e4b-fKMM/s28-c-k-no-mo-rj-c0xffffff/photo.jpg',
        canRate: true,
        likeCount: 0,
        publishedAt: '2016-07-22T12:26:45.000Z',
        textDisplay: 'Hell yeah! The Best. Remember.',
        textOriginal: 'Hell yeah! The Best. Remember.',
        updatedAt: '2016-07-22T12:26:45.000Z',
        videoId: 'WensdPz9cqM',
        viewerRating: 'none'
      }
    }
    wrapper = shallowMount(Comment, {
      propsData: { comment }
    })
  })

  it('renders a comment', () => {
    expect(wrapper.contains('.comment')).toBe(true)
  })
})
