import { shape, string, arrayOf, objectOf, number, bool, oneOfType } from 'prop-types';

export const urlTypes = shape ({   
    url: shape({
        filters: arrayOf(string).isRequired,
        urlParts: objectOf(string).isRequired,
    }),
    pagination: shape({
        page: number,
        totalPages: number,
        after: string,
        before: string
    }),
    final: string.isRequired
});
export const subsTypes = arrayOf(string)

export const postsTypes = arrayOf(shape({
    kind: string,
    data: shape({
        score: oneOfType([number, string]),
        title: string,
        subreddit_name_prefixed: string,
        saved: bool.isRequired,
        clicked: bool.isRequired,
        author: string,
        created_utc: string,
        permalink: string,
        url: string,
        id: string,
        num_comments: number,
        subreddit: string
    })
}))
export const commentsTypes = objectOf(
    arrayOf(
        shape({
            body: string,
            score: number,
            permalink: string,
            author: string,
            created_utc: string
        })
    ).isRequired
)





