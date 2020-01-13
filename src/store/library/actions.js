import * as M from './mutation_types';
import * as H from '../../helpers';
import { apiService } from '../../services/';

export default {
    async getActObj({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const actOb = await apiService.getBookBE(requestModel);
        commit({ type: M.GET_ACT_OBJ, payload: actOb });
    },
    async getBooksBE({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const books = await apiService.getBooksListBE(requestModel);
        commit({ type: M.GET_BOOKS, payload: books });
    },
    async getAuthorsBE({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const authors = await apiService.getAuthorsListBE(requestModel);
        commit({ type: M.GET_AUTHORS, payload: authors });
    },
    async getPublishingBE({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const publishing = await apiService.getPublishingListBE(requestModel);
        commit({ type: M.GET_PUBLISHINGS, payload: publishing });
    },
    async getAuthorsBookBE({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const books = await apiService.getBooksByAuthorBE(requestModel);
        commit({ type: M.GET_AUTHORS_BOOKS, payload: books });
    },
    async getPublishBookBE({commit}, requestModel = {}){
        requestModel=JSON.stringify(requestModel);
        const authors = await apiService.getBooksByPublishBE(requestModel);
        commit({ type: M.GET_PUBLISHING_BOOKS, payload: authors });
    },
    async addBookBE({commit}, requestModel = {}){
        const response = await apiService.addBookBE(requestModel);
        commit({ type: M.SET_NEW_BOOK, payload: response });

    },
    async addAuthorBE({commit}, requestModel = {}){
        const response = await apiService.addAuthorBE(requestModel);
        commit({ type: M.SET_NEW_AUTHOR, payload: response });
    },
    async addPublishingBE({commit}, requestModel = {}){
        const requestPublishingModel=JSON.stringify(requestModel);
        const response = await apiService.addPublishingBE(requestPublishingModel);
        commit({ type: M.SET_NEW_PUBLISHING, payload: response });
    },
    async editPublishingBE({commit}, requestModel = {}){
        const requestPublishingModel=JSON.stringify(requestModel);
        const response = await apiService.editPublishingBE(requestPublishingModel);
        const id = response['Id'];
        commit({ type: M.EDIT_PUBLISHING, payload: response, id});
    },
    async editBookBE({commit}, requestModel = {}){
        const response = await apiService.editBookBE(requestModel);
        const id = response['Id'];
        commit({ type: M.EDIT_BOOK, payload: response, id});
    },
    async editAuthorBE({commit}, requestModel = {}){
        const response = await apiService.editAuthorBE(requestModel);
        const id = response['Id'];
        commit({ type: M.EDIT_AUTHOR, payload: response, id});
    }
    
}