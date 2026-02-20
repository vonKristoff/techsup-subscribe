const API_ENDPOINT = import.meta.env.VITE_API_ENDPOINT;
const API_TOKEN = import.meta.env.VITE_API_TOKEN;
import * as v from 'valibot';
import { error, redirect } from '@sveltejs/kit';
import { form } from '$app/server';

export const subscribe = form(
	v.object({
		username: v.pipe(v.string(), v.nonEmpty()),
		email: v.pipe(v.string(), v.nonEmpty(), v.email())
	}),
	async ({ username, email }) => {
		const apiData = {
			Email: email,
			Nickname: username,
			Active: true
		};

		await new Promise((resolve) => setTimeout(resolve, 1000));
		try {
			const response = await fetch(`${API_ENDPOINT}?user_field_names=true`, {
				method: 'POST',
				headers: {
					Authorization: `Token ${API_TOKEN}`,
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(apiData)
			});

			if (!response.ok) {
				throw new Error('Network response was not ok');
			}

			return { success: true };
		} catch (error) {
			console.error('Error:', error);
			return error;
		}
	}
);
