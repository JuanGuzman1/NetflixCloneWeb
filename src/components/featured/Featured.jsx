import { InfoOutlined, PlayArrow } from '@material-ui/icons'
import './featured.scss'

const Featured = ({type}) => {
    return (
        <div className="featured">
            {type && (
                <div className="category">
                    <span>{type === "movie" ? "Movies" : "Series"}</span>
                    <select name="genre" id="genre">
                        <option>Genre</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                    </select>
                </div>
            )}
            <img src="https://dam.ngenespanol.com/wp-content/uploads/2020/05/pinguino-rey.jpg" alt="" />
            <div className="info">
                <img src="https://static2.abc.es/media/play/2019/07/19/pica-kXAC--620x349@abc.jpg" alt="" />
                <span className="desc">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi dolores, officiis praesentium quia temporibus repudiandae explicabo sint maxime facilis architecto quas accusantium omnis asperiores amet numquam, expedita quam ut ratione!
                </span>
                <div className="buttons">
                    <button className="play">
                        <PlayArrow/>
                        <span>Play</span>
                    </button>
                    <button className="more">
                        <InfoOutlined/>
                        <span>Info</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Featured
