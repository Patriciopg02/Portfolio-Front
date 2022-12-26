import bgLight from '../../resources/Fondo Light.png';
import bgDark from '../../resources/Fondo Dark.jpg';

const LightTheme = {
    background_1: bgLight,
    colorText:'#8C2A2A',
    // ---whatido---
    background_2: '#ffffff',
    keep_2: '#b76565',
    box_2: '#e9afaf',
    border_box2: '#e9a0a0',
    // ---projects---
    background_3: '#ececec',
    keep_3: '#b76565',
    box_3: '#f6e6e6',
    border_box3: '#efbbbb',
    carousel_bg:'#f6e6e6',
    h1_3:'#000000',
    shadow_3:'#ebacac',
    //---about---
    background_4: '#ffffff',
    keep_4: '#00000062',
    //---footer---
    background_5:'#ececec',
    border_footer:'#a0a0a0',
    color5:'#5f5f5f',
    techs:'#b76565',
    //------------
    color: '#000000',
}

const DarkTheme = {
    background_1: bgDark,
    colorText:'#930000',
    // ---whatido---
    background_2: '#000000',
    keep_2: '#adff2f',
    box_2: '#160000',
    border_box2: '#210000',
    // ---projects---
    background_3: '#1e0000',
    keep_3: '#adff2f',
    box_3: '#110000',
    border_box3: '#2a0000',
    carousel_bg:'#110000',
    h1_3:'#ffffff',
    shadow_3:'#930000',
    //---about---
    background_4: '#0c0000',
    keep_4: '#adff2f',

    //---footer---
    background_5:'#000000',
    color5:'#ffffff',
    techs:'#adff2f',
    //------------
    color: "#ffffff",
} 

const Themes = {
    Light: LightTheme,
    Dark: DarkTheme
}

export default Themes;