import reducer from '../BlogPostReducer'
import * as actions from '../BlogActions'
import { fromJS } from 'immutable'
import chai from 'chai'
import chaiImmutable from 'chai-immutable'

chai.use(chaiImmutable)
const expect = chai.expect
describe('BlogPostReducer', () => {
  it('should store array of posts by pid in store', () => {
    const mockPosts = [{ pid: 0 }]
    const beforeState = fromJS({})
    const actual = reducer(beforeState, actions.addPosts(mockPosts))

    expect(actual).to.have.size(mockPosts.length)
  })
})
