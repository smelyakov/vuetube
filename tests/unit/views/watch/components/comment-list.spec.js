import { shallowMount } from '@vue/test-utils'
import Comment from '@/views/watch/components/Comment.vue'
import CommentList from '@/views/watch/components/CommentList.vue'

describe('CommentList.vue', () => {
  beforeEach(() => {
  })

  it('renders comments', () => {
    const wrapper = shallowMount(CommentList, {
      propsData: {
        comments: [
          {id: 1, text: 'Comment 1'},
          {id: 2, text: 'Comment 2'}
        ]
      }
    })
    const comments = wrapper.findAll('comment-stub')

    expect(comments.length).toEqual(2)
    expect(comments.at(0).is(Comment)).toBe(true)
  })
})
