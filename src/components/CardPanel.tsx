"use client"

import { useReducer } from "react"
import Card from "./Card"

type RatingAction = { type: "update"; venueName: string; rating: number }
type RatingState = Map<string, number>

export default function CardPanel() {

    const ratingReducer = (state: RatingState, action: RatingAction) => {
        switch (action.type) {
            case "update":
                const newState = new Map(state);
                if (action.rating === 0) {
                    newState.delete(action.venueName);
                } else {
                    newState.set(action.venueName, action.rating);
                }
                return newState;
            default:
                return state;
        }
    };
    

    const [ratings, dispatchRating] = useReducer(ratingReducer, new Map([
        ["The Bloom Pavilion", 0],
        ["Spark Space", 0],
        ["The Grand Table", 0]
    ]))

    return (
        <div className="p-5 bg-gray-100 rounded-lg">
            <div className="grid grid-cols-3 gap-4">
                <Card venueName="The Bloom Pavilion" imgSrc="/images/bloom.jpg"
                    rating={ratings.get("The Bloom Pavilion")!}
                    onRatingChange={(venue, rating) => dispatchRating({ type: "update", venueName: venue, rating })} />

                <Card venueName="Spark Space" imgSrc="/images/sparkspace.jpg"
                    rating={ratings.get("Spark Space")!}
                    onRatingChange={(venue, rating) => dispatchRating({ type: "update", venueName: venue, rating })} />

                <Card venueName="The Grand Table" imgSrc="/images/grandtable.jpg"
                    rating={ratings.get("The Grand Table")!}
                    onRatingChange={(venue, rating) => dispatchRating({ type: "update", venueName: venue, rating })} />
            </div>

            <div className="mt-5">
                <h2 className="text-lg font-semibold">Ratings List</h2>
                {Array.from(ratings.entries()).map(([venue, rating]) => (
                    <div key={venue} data-testid={venue} className="flex justify-between bg-white p-2 my-2 rounded shadow"
                        onClick={() => dispatchRating({ type: "update", venueName: venue, rating: 0 })}>
                        {venue} Rating: {rating}
                    </div>
                ))}
            </div>
        </div>
    )
}
