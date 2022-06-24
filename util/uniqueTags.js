import { quotes } from "../data/quotes";

export const uniqueTags = [...new Set(quotes.map((quote, i) => quote.topic1))];