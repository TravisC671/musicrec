
interface songType {
    trackID: string,
    trackName: string,
    trackAuthor: string,
    trackImage: string,
    timeAdded: string,
    timeRated: string,
    rated: boolean,
    rating: number,
    comment: string
}

type SongFnType = {
    song: songType
}


export default function Song({song}:SongFnType) {
    const ratingLabel = ['S',       'A',       'B',       'C',       'D',       'F'] 
    const ratingColor = ['#ff7f7f', '#ffbf7f', '#ffdf7f', '#ffff7f', '#bfff7f', '#7fff7f']
    
    //add rating later
    return (
        <div className="flex flex-row gap-2 items-center mb-2">
            <img src={song.trackImage} alt="image bork" className={`rounded-sm w-12 ${song.rated ? '' : 'grayscale'}`}/>
            <div>
                <h1 className={`text-lg font-semibold ${song.rated ? '' : 'text-gray-500'}`}>{song.trackName}</h1>
                <h1 className={`text-sm ${song.rated ? '' : 'text-gray-500'}`}>{song.trackAuthor}</h1>
            </div>
            <div className={`${song.rated ? 'visible' : 'hidden'} bg-[${ratingColor[song.rating]}] p-1 h-min rounded-sm text-black`}>
                {ratingLabel[song.rating]}
            </div>
        </div>
    )
}

export type { songType }