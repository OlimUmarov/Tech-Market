import { languageList } from "@/types/header"

const en = require('../../assets/images/en.svg').default
const ru = require('../../assets/images/ru.svg').default
const uz = require('../../assets/images/uz.svg').default

export const languages:languageList[] = [
    {
        name: "English",
        icon: en,
        link: "en",
    },
    {
        name: "Русский",
        icon: ru,
        link: "ru",
    },
    {
        name: "O'zbekcha",
        icon: uz,
        link: "uz",
    },
]