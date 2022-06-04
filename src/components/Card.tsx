import tw from "tailwind-styled-components";

const CardStyle = tw.div`
    w-[225px]
    h-[275px]
    shadow-lg
    flex
    flex-col
    items-center
    content-center
    bg-custom-white
    p-2
    rounded-sm
    text-custom-dark-gray
`

export const Card = () => {
    return(
        <CardStyle>
            <h3 className="text-lg font-semibold mb-3">Turniej osiedla</h3>
            <img className="rounded-lg object-cover mb-3" src="src/assets/img/tournament-card-placeholder.jpg"/>
            <div>
                <span>✅ 5/16</span>
                <span>📆 10.06.2022</span>
                <span>📍 Poznań, 11 punkt</span>
                <span>🏆 100zł</span>
            </div>
        </CardStyle>
    )
}