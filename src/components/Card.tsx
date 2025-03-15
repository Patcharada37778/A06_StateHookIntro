"use client"

import { useState } from "react"
import Image from 'next/image'
import { Rating } from "@mui/material"

export default function Card({ venueName, imgSrc, rating, onRatingChange }: { 
    venueName: string; 
    imgSrc: string; 
    rating: number;
    onRatingChange: (venue: string, rating: number) => void;
}) {
    const [localRating, setLocalRating] = useState(rating)

    const handleRatingChange = (event: React.SyntheticEvent, newValue: number | null) => {
        if (newValue !== null) {
            setLocalRating(newValue)
            onRatingChange(venueName, newValue)
        }
    }

    return (
        <div className="border rounded-lg overflow-hidden shadow-lg p-3 bg-white">
            <div className="w-full h-[200px] relative">
                <Image src={imgSrc} alt={venueName} fill className="object-cover rounded-t-lg" />
            </div>
            <div className="p-3">
                <h3 className="text-lg font-semibold">{venueName}</h3>

                <Rating
                    name={venueName + " Rating"}
                    id={venueName + " Rating"}
                    data-testid={venueName + " Rating"}
                    value={localRating}
                    onChange={handleRatingChange}
                />
            </div>
        </div>
    )
}
