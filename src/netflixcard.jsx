import shows from './shows.json';

export const Card = () => {
    return (
        <div>
            <h1 className="text-red-700  px-150  ">Netflix Shows</h1>
            <div  className=" m-1 p-10"style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
                {shows.map((show) => (
                    <div 
                        key={show.id}
                        style={{
                            border: "1px solid #e0e0e0",
                            borderRadius: "12px",
                            boxShadow: "0 2px 8px rgba(0,0,0,0.07)",
                            width: "260px",
                            padding: "16px",
                            display: "flex",
                            flexDirection: "column",
                            background: "#fff",
                            boxSizing: "border-box",
                            justifyContent: "space-between",
                        }}
                    >
                        <img
                            src={show.image}
                            alt={show.title}
                            style={{
                                width: "100%",
                                height: "160px",
                                objectFit: "cover",
                                borderRadius: "8px",
                                marginBottom: "12px"
                            }}
                        />
                        <h2 className="text-red-700 text-2xl">
                            {show.title} <span style={{ color: "#888", fontWeight: 400 }}>({show.year})</span>
                        </h2>
                        <p style={{ margin: "0 0 4px 0", color: "#666" }}>
                            <b>Genre:</b> {show.genre}
                        </p>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-between",
                            marginTop: "8px"
                        }}>
                            <span
                                style={{
                                    background:
                                        show.rating > 8
                                            ? "linear-gradient(90deg,#21d07a,#1db954)"
                                            : show.rating >= 6
                                                ? "linear-gradient(90deg,#2196f3,#21cbf3)"
                                                : "linear-gradient(90deg,#e53935,#e35d5b)",
                                    color: "#fff",
                                    padding: "4px 12px",
                                    borderRadius: "20px",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)"
                                }}
                            >
                                ★ {show.rating}
                            </span>
                            <a
                                href={show.trailer}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="trailer-btn"
                                style={{
                                    padding: "7px 16px",
                                    background: "linear-gradient(90deg,#e50914,#b81d24)",
                                    color: "#fff",
                                    textDecoration: "none",
                                    borderRadius: "20px",
                                    fontWeight: 600,
                                    fontSize: "0.95rem",
                                    boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
                                    transition: "background 0.2s, box-shadow 0.2s",
                                    marginLeft: "8px"
                                }}
                            >
                                Watch Trailer
                            </a>
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`
                .trailer-btn:hover {
                    border:2px solid #21cbf3 !important;
                    box-shadow: 0 2px 8px rgba(33,203,243,0.15);
                    background: linear-gradient(90deg,#b81d24,#e50914);
                }
                `}
            </style>
        </div>
    );
}