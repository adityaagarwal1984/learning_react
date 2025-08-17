// Import your shows data from a JSON file
import shows from './shows.json';

export const Card = () => {
    return (
        <div>
            <h1>Netflix Shows</h1>
            <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {shows.map((show) => (
                    <div
                        key={show.id}
                        style={{
                            border: "1px solid black",
                            width: "250px",
                            padding: "10px",
                            display: "flex",
                            flexDirection: "column",
                            justifyContent: "space-between",
                            minHeight: "480px", // adjust as needed
                            boxSizing: "border-box"
                        }}
                    >
                        <div>
                            <img src={show.image} alt={show.title} style={{ width: "100%", height: "auto" }} />
                            <h2>{show.title} ({show.year})</h2>
                            <p><b>Genre:</b> {show.genre}</p>
                            <p><b>Rating:</b> {show.rating}</p>
                            {/* <p><b>Cast:</b> {show.cast.join(", ")}</p> */}
                            {/* <p><b>Description:</b> {show.description}</p> */}
                        </div>
                        <a
                            href={show.trailer}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="trailer-btn"
                            style={{
                                display: "inline-block",
                                marginTop: "auto",
                                padding: "8px 16px",
                                background: "#e50914",
                                color: "#fff",
                                textDecoration: "none",
                                borderRadius: "4px",
                                transition: "background 0.2s",
                                alignSelf: "flex-end"
                            }}
                        >
                            Watch Trailer
                        </a>
                    </div>
                ))}
            </div>
            <style>
                {`
                .trailer-btn:hover {
                    border:2px solid skyblue !important;
                }
                `}
            </style>
        </div>
    );
}