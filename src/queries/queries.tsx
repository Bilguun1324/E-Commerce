import { gql } from "@apollo/client";

export const REQUEST_COUPON = gql`
{
  couponCollection {
    items {
      detail
      prize
      color
    }
  }
}
`