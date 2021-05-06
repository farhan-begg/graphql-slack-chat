import { gql } from '@apollo/client'

export default gql`
query PostsForChannel($channel: String!) {
  posts(channel: $channel) {
    message
    date
  }
}`
