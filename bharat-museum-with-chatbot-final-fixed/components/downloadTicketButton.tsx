import React from "react";

const DownloadTicketButton = () => {
    const downloadTicket = async () => {
        try {
            // Replace with your Flask backend URL
            const response = await fetch("http://127.0.0.1:5000/generate-ticket", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    user_name: "Sriyansh Gupta",
                    payment_id: "PAYID123456",
                    tickets: 2,
                    date: new Date().toLocaleDateString(),
                }),
            });

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const blob = await response.blob();
            // Create a download link and trigger it
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "ticket.png"; // You can customize the filename
            document.body.appendChild(a);
            a.click();
            a.remove();
            window.URL.revokeObjectURL(url);
        } catch (error) {
            console.error("Failed to download ticket:", error);
        }
    };

    return (
        <button onClick={downloadTicket} className="bg-green-600 text-white hover:bg-blue-600 px-4 py-2 rounded">
            Download Ticket
        </button>
    );
};

export default DownloadTicketButton;
