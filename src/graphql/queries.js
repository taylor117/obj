/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      pages {
        items {
          id
          userID
          title
          date
          createdAt
          updatedAt
        }
        nextToken
      }
      followers {
        items {
          id
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      following {
        items {
          id
          username
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        username
        pages {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getPage = /* GraphQL */ `
  query GetPage($id: ID!) {
    getPage(id: $id) {
      id
      userID
      author {
        id
        username
        pages {
          nextToken
        }
        followers {
          nextToken
        }
        following {
          nextToken
        }
        createdAt
        updatedAt
      }
      title
      date
      stickers {
        items {
          id
          pageID
          url
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      textBoxes {
        items {
          id
          pageID
          content
          location
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const listPages = /* GraphQL */ `
  query ListPages(
    $filter: ModelPageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        userID
        author {
          id
          username
          createdAt
          updatedAt
        }
        title
        date
        stickers {
          nextToken
        }
        textBoxes {
          nextToken
        }
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getTextBox = /* GraphQL */ `
  query GetTextBox($id: ID!) {
    getTextBox(id: $id) {
      id
      pageID
      page {
        id
        userID
        author {
          id
          username
          createdAt
          updatedAt
        }
        title
        date
        stickers {
          nextToken
        }
        textBoxes {
          nextToken
        }
        createdAt
        updatedAt
      }
      content
      location
      createdAt
      updatedAt
    }
  }
`;
export const listTextBoxes = /* GraphQL */ `
  query ListTextBoxes(
    $filter: ModelTextBoxFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTextBoxes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pageID
        page {
          id
          userID
          title
          date
          createdAt
          updatedAt
        }
        content
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getSticker = /* GraphQL */ `
  query GetSticker($id: ID!) {
    getSticker(id: $id) {
      id
      pageID
      page {
        id
        userID
        author {
          id
          username
          createdAt
          updatedAt
        }
        title
        date
        stickers {
          nextToken
        }
        textBoxes {
          nextToken
        }
        createdAt
        updatedAt
      }
      url
      location
      createdAt
      updatedAt
    }
  }
`;
export const listStickers = /* GraphQL */ `
  query ListStickers(
    $filter: ModelStickerFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listStickers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        pageID
        page {
          id
          userID
          title
          date
          createdAt
          updatedAt
        }
        url
        location
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
