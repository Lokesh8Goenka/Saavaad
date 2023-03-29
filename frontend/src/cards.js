import ebook from "./images/ebook.jpg";
import more from "./images/more.png";
import poem from "./images/poet.jpg";
import contract from "./images/summary.jpg";
import shortstory from "./images/shortstoryWriter.jpg";
import Translate from "./images/languages.png";



const Cards = [
    {
        title: "Summary",
        text: "Have a long documnet to read? Get a summary of it in no time.",
        imgURL: contract
    },
    {
        title: "Ebook",
        text: "Just click hand written story and upload them to get your own EBook.",
        imgURL: ebook
    },
    {
        title: "Poem",
        text: "Are you a poet?  Then try the digital version of your poem!",
        imgURL: poem
    },
    {
        title: "Short Story",
        text: "Written a short story?   Get a digital copy now!",
        imgURL: shortstory
    },
    {
        title: "Translation",
        text: "Unable to get a language   Get it in your language!",
        imgURL: Translate
    },
    {
        title: "More",
        text: "Want anything else?   Write to us!",
        imgURL: more
    },
]

export default Cards;