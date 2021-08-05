/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser {
    onCreateUser {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser {
    onUpdateUser {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser {
    onDeleteUser {
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
export const onCreatePage = /* GraphQL */ `
  subscription OnCreatePage {
    onCreatePage {
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
export const onUpdatePage = /* GraphQL */ `
  subscription OnUpdatePage {
    onUpdatePage {
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
export const onDeletePage = /* GraphQL */ `
  subscription OnDeletePage {
    onDeletePage {
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
export const onCreateTextBox = /* GraphQL */ `
  subscription OnCreateTextBox {
    onCreateTextBox {
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
export const onUpdateTextBox = /* GraphQL */ `
  subscription OnUpdateTextBox {
    onUpdateTextBox {
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
export const onDeleteTextBox = /* GraphQL */ `
  subscription OnDeleteTextBox {
    onDeleteTextBox {
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
export const onCreateSticker = /* GraphQL */ `
  subscription OnCreateSticker {
    onCreateSticker {
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
export const onUpdateSticker = /* GraphQL */ `
  subscription OnUpdateSticker {
    onUpdateSticker {
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
export const onDeleteSticker = /* GraphQL */ `
  subscription OnDeleteSticker {
    onDeleteSticker {
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
