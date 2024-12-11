export default function Banner({ title, subtitle, leadtext }) {
    return (
        <div className="banner bg-light text-black py-4 mb-5 shadow">
            <div className="container-lg">
                <h2>{title}</h2>
                <h4>{subtitle}</h4>
                <p>{leadtext}</p>
            </div>
        </div>
    )
}