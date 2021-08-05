/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createPage = /* GraphQL */ `
  mutation CreatePage(
    $input: CreatePageInput!
    $condition: ModelPageConditionInput
  ) {
    createPage(input: $input, condition: $condition) {
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
export const updatePage = /* GraphQL */ `
  mutation UpdatePage(
    $input: UpdatePageInput!
    $condition: ModelPageConditionInput
  ) {
    updatePage(input: $input, condition: $condition) {
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
export const deletePage = /* GraphQL */ `
  mutation DeletePage(
    $input: DeletePageInput!
    $condition: ModelPageConditionInput
  ) {
    deletePage(input: $input, condition: $condition) {
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
export const createTextBox = /* GraphQL */ `
  mutation CreateTextBox(
    $input: CreateTextBoxInput!
    $condition: ModelTextBoxConditionInput
  ) {
    createTextBox(input: $input, condition: $condition) {
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
export const updateTextBox = /* GraphQL */ `
  mutation UpdateTextBox(
    $input: UpdateTextBoxInput!
    $condition: ModelTextBoxConditionInput
  ) {
    updateTextBox(input: $input, condition: $condition) {
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
export const deleteTextBox = /* GraphQL */ `
  mutation DeleteTextBox(
    $input: DeleteTextBoxInput!
    $condition: ModelTextBoxConditionInput
  ) {
    deleteTextBox(input: $input, condition: $condition) {
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
export const createSticker = /* GraphQL */ `
  mutation CreateSticker(
    $input: CreateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    createSticker(input: $input, condition: $condition) {
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
export const updateSticker = /* GraphQL */ `
  mutation UpdateSticker(
    $input: UpdateStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    updateSticker(input: $input, condition: $condition) {
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
export const deleteSticker = /* GraphQL */ `
  mutation DeleteSticker(
    $input: DeleteStickerInput!
    $condition: ModelStickerConditionInput
  ) {
    deleteSticker(input: $input, condition: $condition) {
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
