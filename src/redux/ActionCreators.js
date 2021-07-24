import * as ActionTypes from './ActionTypes';
import { baseURL } from '../shared/baseURL';

export const addComment = (dishId, rating, author, comment) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: {
		dishId: dishId,
		rating: rating,
		author: author,
		comment: comment,
	},
});

/**
 * Fetch dishes from api
 * @returns dishes
 */

export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseURL + 'dishes')
		.then((response) => response.json())
		.then((dishes) => dispatch(addDishes(dishes)));
};

export const dishesLoading = () => ({
	type: ActionTypes.DISHES_LOADING,
});

export const dishesFailed = (errorMessage) => ({
	type: ActionTypes.DISHES_FAILED,
	payload: errorMessage,
});

export const addDishes = (dishes) => ({
	type: ActionTypes.ADD_DISHES,
	payload: dishes,
});

/**
 * Fetch comments from API
 * @returns comments
 */

export const fetchComments = () => (dispatch) => {
	return fetch(baseURL + 'comments')
		.then((response) => response.json())
		.then((comments) => dispatch(addComments(comments)));
};

export const commentsFailed = (errorMessage) => ({
	type: ActionTypes.COMMENTS_FAILED,
	payload: errorMessage,
});

export const addComments = (comments) => ({
	type: ActionTypes.ADD_COMMENT,
	payload: comments,
});

/**
 * Fetch promotions from API
 * @returns promotions
 */

export const fetchPromotions = () => (dispatch) => {
	dispatch(promotionsLoading(true));

	return fetch(baseURL + 'promotions')
		.then((response) => response.json())
		.then((promotions) => dispatch(addPromotions(promotions)));
};

export const promotionsLoading = () => ({
	type: ActionTypes.PROMOTIONS_LOADING,
});

export const promotionsFailed = (errorMessage) => ({
	type: ActionTypes.PROMITIONS_FAILED,
	payload: errorMessage,
});

export const addPromotions = (promotions) => ({
	type: ActionTypes.ADD_PROMOTIONS,
	payload: promotions,
});
