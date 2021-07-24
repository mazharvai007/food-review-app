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
 * Error Handeling
 * @returns dishes
 */

export const fetchDishes = () => (dispatch) => {
	dispatch(dishesLoading(true));

	return fetch(baseURL + 'dishes')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var errorStatus = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					errorStatus.response = response;
					throw errorStatus;
				}
			},
			(error) => {
				var errorStatusMessage = new Error(error.message);
				throw errorStatusMessage;
			}
		)
		.then((response) => response.json())
		.then((dishes) => dispatch(addDishes(dishes)))
		.catch((error) => dispatch(dishesFailed(error.message)));
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
 * Error Handeling
 * @returns comments
 */

export const fetchComments = () => (dispatch) => {
	return fetch(baseURL + 'comments')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var errorStatus = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					errorStatus.response = response;
					throw errorStatus;
				}
			},
			(error) => {
				var errorStatusMessage = new Error(error.message);
				throw errorStatusMessage;
			}
		)
		.then((response) => response.json())
		.then((comments) => dispatch(addComments(comments)))
		.catch((error) => dispatch(commentsFailed(error.message)));
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
 * Error Handeling
 * @returns promotions
 */

export const fetchPromotions = () => (dispatch) => {
	dispatch(promotionsLoading(true));

	return fetch(baseURL + 'promotions')
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var errorStatus = new Error(
						'Error ' + response.status + ': ' + response.statusText
					);
					errorStatus.response = response;
					throw errorStatus;
				}
			},
			(error) => {
				var errorStatusMessage = new Error(error.message);
				throw errorStatusMessage;
			}
		)
		.then((response) => response.json())
		.then((promotions) => dispatch(addPromotions(promotions)))
		.catch((error) => dispatch(promotionsFailed(error.message)));
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
