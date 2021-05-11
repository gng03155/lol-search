import axios from "axios";
import cheerio from "cheerio";


export const searchUser = async (name: string) => {

    let requestUrl = `summoner/userName=${name}`;

    return await axios.get(requestUrl)
        .then(html => {
            const $ = cheerio.load(html.data);
            // console.log(data);
            // const body = $(".SummonerLayout");
            return $;
        })
        .catch(err => err);


}