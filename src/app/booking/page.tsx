import LocationDateReserve from "@/components/DateReserve";
import { TextField, Button, Paper } from "@mui/material";

export default function Booking() {
    return (
        <main className="w-[100%] flex flex-col items-center space-y-4">
            <Paper className="w-[90%] md:w-[400px] p-6 space-y-4 shadow-lg rounded-lg bg-white">
                <h1 className="text-2xl font-semibold text-center">New Reservation</h1>

                <form className="space-y-4">
                    <TextField 
                        id="Name-Lastname" 
                        label="Name & Lastname" 
                        variant="outlined" 
                        fullWidth
                        required
                    />
                    <TextField 
                        id="Contact-Number" 
                        label="Contact Number" 
                        variant="outlined" 
                        fullWidth
                        required
                    />

                    <div className="text-md text-gray-600">Event Date and Location</div>
                    <LocationDateReserve />

                    <Button 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        className="bg-sky-600 hover:bg-indigo-600"
                    >
                        Book Venue
                    </Button>
                </form>
            </Paper>
        </main>
    );
}
