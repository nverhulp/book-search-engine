import gql from 'graphql-tag';

export const GET_ME = gql`
{
    me{
        _id
        username
        email
        bookCount
        SavedBooks{
            bookId
            authors
            description
            title
            image
            link
        }
    }
}
`;