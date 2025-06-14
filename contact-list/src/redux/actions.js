import {
    ADD_CONTACT,
    DELETE_CONTACT,
    EDIT_CONTACT,
    TOGGLE_FAVORITE,
    SEARCH_CONTACT,
} from './type'

export const addContact = (newContact) => {
    return{
        type: ADD_CONTACT,
        payload: newContact
    }
}

export const deleteContact = (id) => {
    return{
        type: DELETE_CONTACT,
        payload: id
    }
}

export const editContact = (id, updatedContact) => {
    return{
        type: EDIT_CONTACT,
        payload: {id, updatedContact}
    }
}

export const toggleFavorite = (id) => {
    return{
        type: TOGGLE_FAVORITE,
        payload: id
    }
}

export const searchContact = (searchTerm) => {
    return{
        type: SEARCH_CONTACT,
        payload: searchTerm.toLowerCase()
    }
}